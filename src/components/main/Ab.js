import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Ab() {
	return (
		<section id='about'>
			<div className='pic'></div>

			<div className='box'>
				<h1>ABOUT US</h1>
				<h2>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos odit
					aliquam nihil numquam temporibus quaerat.
				</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
					deleniti sint beatae fugit error quo!
				</p>

				<NavLink to='/about' className='btn'>
					Learn More <FontAwesomeIcon icon={faArrowRight} />
				</NavLink>
			</div>
		</section>
	);
}

export default Ab;
