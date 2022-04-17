import React, { useRef, useEffect, useState } from 'react';
import Layout from '../common/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

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

	return (
		<>
			<Layout name={'CONTACT'}>
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

					<div className='form'>
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

						<div className='request'>
							<h2>Send a Request</h2>

							<input
								type='text'
								name='name'
								id='name'
								placeholder='Your Name'
								required
							/>
							<input
								type='text'
								name='mail'
								id='mail'
								placeholder='Your Email'
								required
							/>

							<textarea
								name='request'
								id='request'
								placeholder='Your Request'
								cols='30'
								rows='10'></textarea>
						</div>

						<button>SEND</button>
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

					<div className='inputBox'>
						<h2>Name</h2>
						<input
							type='text'
							name='name'
							id='name'
							placeholder='Your Name'
							required
						/>
					</div>

					<div className='inputBox'>
						<h2>Email</h2>
						<input
							type='text'
							name='mail'
							id='mail'
							placeholder='Your Email'
							required
						/>
					</div>

					<button>Subscribe to the newsletter</button>
				</div>
			</Layout>
		</>
	);
}

export default Contact;
