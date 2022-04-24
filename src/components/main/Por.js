import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Por() {
	return (
		<section id='portfolio'>
			<div className='inner'>
				<div className='sub_tit'>
					<h1>PORTFOLIO</h1>
					<p>
						It's our work. <br />
						Let me know if you like it.
					</p>
					<NavLink to='/portfolio' className='btn'>
						More <FontAwesomeIcon icon={faArrowRight} />
					</NavLink>
				</div>
			</div>
		</section>
	);
}

export default Por;
