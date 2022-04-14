import React, { useRef, useEffect, useState } from 'react';
import Layout from '../common/Layout';

function Contact() {
	const path = process.env.PUBLIC_URL;
	const container = useRef(null);
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
						<ul className='branch'>
							{mapInfo.map((info, idx) => {
								return (
									<li key={idx} onClick={() => setIndex(idx)}>
										{info.title}
									</li>
								);
							})}
						</ul>
						<div id='map' ref={container}></div>
					</div>

					<form action=''></form>
				</div>

				<div className='quick'></div>
			</Layout>
		</>
	);
}

export default Contact;
