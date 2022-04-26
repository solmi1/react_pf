import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faInstagram,
	faTwitter,
	faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Visual() {
	const path = process.env.PUBLIC_URL;
	const [color, setColor] = useState('orange');

	const handleColor = (e) => {
		const color = e.target.innerText;
		setColor(color);
	};

	useEffect(() => {
		document.body.className = color;
	}, [color]);

	return (
		<figure id='visual'>
			<video src={`${path}/img/main_visual.mp4`} autoPlay loop muted></video>

			<div className='stay'>
				<div className='txt'>
					<h1>
						Stay with us
						<br />
						And ask
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem et
						aliquid, magnam rerum provident placeat nesciunt quasi est!
					</p>
				</div>

				<NavLink to='/board' className='btn'>
					Learn More <FontAwesomeIcon icon={faArrowRight} />
				</NavLink>
			</div>

			<div className='color'>
				<div className='orange' onClick={handleColor}>
					orange
				</div>
				<div className='lightblue' onClick={handleColor}>
					lightblue
				</div>
				<div className='lightgreen' onClick={handleColor}>
					lightgreen
				</div>
			</div>

			<div className='sns'>
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
		</figure>
	);
}

export default Visual;
