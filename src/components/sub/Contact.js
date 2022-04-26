import React, { useRef, useEffect, useState } from 'react';
import Layout from '../common/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faLocationDot,
	faPhoneFlip,
	faEnvelopeOpen,
	faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
	faInstagram,
	faTwitter,
	faFacebook,
} from '@fortawesome/free-brands-svg-icons';

function Contact() {
	const path = process.env.PUBLIC_URL;
	const container = useRef(null);
	const branch = useRef(null);
	const { kakao } = window;

	const info = [
		{
			title: 'Seoul',
			latlng: new kakao.maps.LatLng(37.56682870765463, 126.97865225753738),
			imgSrc: `${path}/img/marker1.png`,
			imgSize: new kakao.maps.Size(60, 62),
			imgPos: { offset: new kakao.maps.Point(29, 62) },
		},
		{
			title: 'Cheongju',
			latlng: new kakao.maps.LatLng(36.642492995513585, 127.48901907523596),
			imgSrc: `${path}/img/marker2.png`,
			imgSize: new kakao.maps.Size(60, 62),
			imgPos: { offset: new kakao.maps.Point(29, 62) },
		},
	];

	const [map, setMap] = useState(null);
	const [mapInfo] = useState(info);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		container.current.innerHTML = '';

		const options = {
			center: mapInfo[index].latlng,
			level: 3,
		};

		const mapInstance = new kakao.maps.Map(container.current, options);

		const markerPosition = mapInfo[index].latlng;
		//마커 이미지 정보 추가
		const imgSrc = mapInfo[index].imgSrc;
		const imgSize = mapInfo[index].imgSize;
		const imgPos = mapInfo[index].imgPos;
		const markerImg = new kakao.maps.MarkerImage(imgSrc, imgSize, imgPos);

		// 마커 생성
		const marker = new kakao.maps.Marker({
			position: markerPosition,
			image: markerImg,
		});

		marker.setMap(mapInstance);

		setMap(mapInstance);

		const mapInit = () => {
			mapInstance.setCenter(mapInfo[index].latlng);
		};

		//index 값이 변경될 때마다 참조된 브랜치의 모든 li를 비활성화 시키고
		const lis = branch.current.querySelectorAll('li');
		for (const li of lis) li.classList.remove('on');
		//현재 index 순번의 버튼만 활성화
		lis[index].classList.add('on');

		window.addEventListener('resize', mapInit);

		return () => {
			window.removeEventListener('resize', mapInit);
		};
	}, [index]);

	const initVal = {
		name: '',
		email: '',
		comments: '',
	};
	const [val, setVal] = useState(initVal);
	const [err, setErr] = useState({});
	const [success, setSuccess] = useState(false);
	const [isSubmit, setIsSubmit] = useState(false);

	const check = (val) => {
		const errs = {};

		if (val.name.length < 5) {
			errs.name = '이름을 1글자 이상 입력해주세요';
		}

		if (val.email < 5 || !/@/.test(val.email)) {
			errs.email = '이메일은 @ 포함해 입력해주세요';
		}

		if (val.comments.length < 10) {
			errs.comments = '남기는 말은 10글자 이상 입력해주세요';
		}

		return errs;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setVal({ ...val, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErr(check(val));
	};

	const handleReset = () => {
		setVal(initVal);
		setErr({});
		setIsSubmit(false);
	};

	useEffect(() => {
		//객체의 키값을 반환하는 메서드
		const len = Object.keys(err).length;

		if (len === 0 && isSubmit) {
			setSuccess(true);
			handleReset(true);
		} else {
			setSuccess(false);
		}
	}, [err]);

	//success 스테이트값을 의존성 배열로 해서
	useEffect(() => {
		//success값이 true로 변경되면
		//기존 인풋요소 초기화
		handleReset();
	}, [success]);

	return (
		<>
			<Layout name={'CONTACT'}>
				{success ? alert('문의주셔서 감사합니다!') : null}

				<div className='tit'>
					<h1>CONTACT US</h1>
					<p>Get it touch and let us know how we can help</p>
				</div>

				<div className='con'>
					<div className='maps'>
						<ul className='branch' ref={branch}>
							{mapInfo.map((info, idx) => {
								return (
									<li
										key={idx}
										onClick={() => {
											setIndex(idx);
										}}>
										{info.title}
									</li>
								);
							})}
						</ul>
						<div id='map' ref={container}></div>
					</div>

					<div className='formBox'>
						<div className='sns'>
							<h2>Connect</h2>

							<a href='https://www.instagram.com/' target='_blank'>
								<FontAwesomeIcon icon={faInstagram} />
							</a>
							<a href='https://twitter.com/' target='_blank'>
								<FontAwesomeIcon icon={faTwitter} />
							</a>
							<a href='https://www.facebook.com/' target='_blank'>
								<FontAwesomeIcon icon={faFacebook} />
							</a>
							<a href='https://www.google.co.kr/' target='_blank'>
								<FontAwesomeIcon icon={faEnvelope} />
							</a>
						</div>

						<form onSubmit={handleSubmit}>
							<fieldset>
								<legend>문의사항 폼 양식</legend>
								<h2>Send a Request</h2>

								<table>
									<caption>문의사항 입력</caption>
									<tr>
										<th scope='row'>
											<label htmlFor='name'>Name</label>
										</th>
										<td>
											<input
												type='text'
												name='name'
												id='name'
												placeholder='Your Name'
												value={val.name}
												onChange={handleChange}
											/>
											<span className='err'>{err.name}</span>
										</td>
									</tr>

									<tr>
										<th scope='row'>
											<label htmlFor='email'>E-MAIL</label>
										</th>
										<td>
											<input
												type='text'
												name='email'
												id='email'
												placeholder='Your Email'
												value={val.email}
												onChange={handleChange}
											/>
											<span className='err'>{err.email}</span>
										</td>
									</tr>

									<tr>
										<th scope='row'>
											<label htmlFor='comments'>COMMENTS</label>
										</th>
										<td>
											<textarea
												name='comments'
												id='comments'
												placeholder='Your Request'
												cols='30'
												rows='10'
												value={val.comments}
												onChange={handleChange}></textarea>
											<span className='err'>{err.comments}</span>
										</td>
									</tr>

									<tr>
										<input type='reset' value='CANCEL' onClick={handleReset} />
										<input
											type='submit'
											value='SEND'
											onClick={() => {
												setIsSubmit(true);
											}}
										/>
									</tr>
								</table>
							</fieldset>
						</form>
					</div>
				</div>

				<div className='quick'>
					<p>Contact</p>

					<div class='sub_tit'>
						<h1>
							Quick. <br /> Support
						</h1>
						<p>You can get all the contact information.</p>
					</div>

					<div class='box'>
						<article>
							<FontAwesomeIcon icon={faLocationDot} />
							<h2>Visit Us</h2>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Sapiente, possimus.
							</p>
						</article>

						<article>
							<FontAwesomeIcon icon={faPhoneFlip} />
							<h2>Call Us</h2>
							<p>02-000-0000</p>
							<p>010-0000-0000</p>
						</article>

						<article>
							<FontAwesomeIcon icon={faEnvelopeOpen} />
							<h2>Email Us</h2>
							<p>abcd12@gamil.com</p>
							<p>support@gamil.com</p>
						</article>
					</div>
				</div>

				<div class='subscribe'>
					<div class='sub_tit'>
						<h1>Subscribe</h1>
						<p>To our newslettor</p>
					</div>

					<form onSubmit={handleSubmit}>
						<fieldset>
							<legend>뉴스레터 폼 양식</legend>
							<h2>Send a Request</h2>

							<table>
								<caption>뉴스레터 정보 입력</caption>
								<tr>
									<td>
										<input
											type='text'
											name='name'
											id='name'
											placeholder='Your Name'
											value={val.name}
											onChange={handleChange}
										/>
										<span className='err'>{err.name}</span>
									</td>
									<td>
										<input
											type='text'
											name='email'
											id='email'
											placeholder='Your Email'
											value={val.email}
											onChange={handleChange}
										/>
										<span className='err'>{err.email}</span>
									</td>
								</tr>

								<tr>
									<td colSpan={2}>
										<input
											type='submit'
											value='Subscribe to the newsletter'
											onClick={() => {
												setIsSubmit(true);
											}}
										/>
									</td>
								</tr>
							</table>
						</fieldset>
					</form>
				</div>
			</Layout>
		</>
	);
}

export default Contact;
