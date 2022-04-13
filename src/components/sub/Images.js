import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Images(props) {
	return (
		<article className='post'>
			<a href='#'>
				<img src={`${props.path}/img/${props.imgSrc}.jpg`} />

				<div class='txt'>
					<h3>Lorem, ipsum dolor.</h3>
					<span>
						5 <FontAwesomeIcon icon={faMessage} />
					</span>
					<span>
						7 <FontAwesomeIcon icon={faHeart} />
					</span>
				</div>
			</a>
		</article>
	);
}

export default Images;
