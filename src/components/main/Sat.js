import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faDisplay,
	faBriefcase,
	faFaceSmile,
} from '@fortawesome/free-solid-svg-icons';

function Brand() {
	return (
		<section id='satisfied'>
			<div className='inner'>
				<article>
					<FontAwesomeIcon icon={faDisplay} />
					<h1>1000+</h1>
					<p>Website Developed</p>
				</article>
				<article>
					<FontAwesomeIcon icon={faBriefcase} />
					<h1>500+</h1>
					<p>Brand Identity</p>
				</article>
				<article>
					<FontAwesomeIcon icon={faFaceSmile} />
					<h1>1500+</h1>
					<p>Satisfied Customers</p>
				</article>
			</div>
		</section>
	);
}

export default Brand;
