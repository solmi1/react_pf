import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowRight,
	faTv,
	faPalette,
} from '@fortawesome/free-solid-svg-icons';

function Ser() {
	return (
		<section id='services'>
			<div className='inner'>
				<h1>OUR SERVICES</h1>

				<div className='wrap'>
					<article>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
							officiis in totam consectetur explicabo tempora cumque
							exercitationem dolorum sequi, consequuntur dolor porro eaque nam
							sit.
						</p>
						<NavLink to='/service' className='btn'>
							All Services <FontAwesomeIcon icon={faArrowRight} />
						</NavLink>
					</article>

					<article>
						<FontAwesomeIcon icon={faTv} />
						<h2>Web Development</h2>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
							sed commodi at vel praesentium mollitia accusantium qui labore ex.
						</p>
					</article>

					<article>
						<FontAwesomeIcon icon={faPalette} />
						<h2>Grphic Design</h2>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
							sed commodi at vel praesentium mollitia accusantium qui labore ex.
						</p>
					</article>
				</div>
			</div>
		</section>
	);
}

export default Ser;
