import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faInstagram,
	faTwitter,
	faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Cont() {
	return (
		<section id='contact'>
			<div className='inner'>
				<h1>CONTACT US</h1>

				<div className='wrap'>
					<article>
						<NavLink to='/service'>Terms of Service</NavLink>
						<NavLink to='/youtube'>Watching YouTube</NavLink>
						<NavLink to='/contact'>Site Map</NavLink>
					</article>
					<article>
						<p>Techoners</p>
						<p>House-194, Road-9, First Phase,</p>
						<p> Khulna 9100</p>

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
					</article>
					<article>
						<p>Email : some763@naver.com</p>
						<p>Call : 010-0000-0000</p>
						<NavLink to='/contact' className='btn'>
							Live Chat <FontAwesomeIcon icon={faArrowRight} />
						</NavLink>
					</article>
				</div>
			</div>
		</section>
	);
}

export default Cont;
