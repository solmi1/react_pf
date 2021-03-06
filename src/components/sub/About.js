import Layout from '../common/Layout';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faInstagram,
	faTwitter,
	faFacebook,
} from '@fortawesome/free-brands-svg-icons';

import {
	faEnvelope,
	faMedal,
	faUsers,
	faCircleDollarToSlot,
	faCartFlatbed,
	faKeyboard,
	faNetworkWired,
	faFileArrowUp,
	faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

function About() {
	const path = process.env.PUBLIC_URL;
	const [members, setMembers] = useState([]);

	useEffect(() => {
		axios.get(`${path}/DB/member.json`).then((json) => {
			setMembers(json.data.data);
		});
	});

	return (
		<>
			<Layout name={'ABOUT'}>
				<div className='sub_tit'>
					<h1>WE ALWAYS WORK FOR YOUR SUCCESS</h1>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />{' '}
						Quisquam mollitia earum aut saepe asperiores consequuntur itaque
						soluta animi rem repellendus.
					</p>
				</div>

				<div className='introduction'>
					<div className='box'>
						<div className='pic'></div>
						<div className='txt'>
							<h2>
								Are you planning to take your business to the next level? Let's
								make your website ready!
							</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Distinctio dolores aliquam maiores nulla amet ducimus
								perferendis alias vitae sequi dolorum porro magnam, expedita
								quis! Cum quam voluptatum nostrum eveniet possimus incidunt
								voluptate enim quod iusto?
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Distinctio dolores aliquam maiores nulla amet ducimus
								perferendis alias vitae sequi dolorum porro magnam, expedita
								quis! Cum quam voluptatum nostrum eveniet possimus incidunt
								voluptate enim quod iusto?
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
								possimus non perspiciatis. Impedit, itaque rem!
							</p>
						</div>
					</div>

					<div className='box'>
						<div className='pic'></div>
						<div className='txt'>
							<h2>
								Are you planning to take your business to the next level? Let's
								make your website ready!
							</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Distinctio dolores aliquam maiores nulla amet ducimus
								perferendis alias vitae sequi dolorum porro magnam, expedita
								quis! Cum quam voluptatum nostrum eveniet possimus incidunt
								voluptate enim quod iusto?
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Distinctio dolores aliquam maiores nulla amet ducimus
								perferendis alias vitae sequi dolorum porro magnam, expedita
								quis! Cum quam voluptatum nostrum eveniet possimus incidunt
								voluptate enim quod iusto?
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
								possimus non perspiciatis. Impedit, itaque rem!
							</p>
						</div>
					</div>
				</div>

				<div className='service'>
					<article>
						<FontAwesomeIcon icon={faMedal} />
						<h2>TOP QUALITY SERVICE</h2>
					</article>
					<article>
						<FontAwesomeIcon icon={faUsers} />
						<h2>EXPERT TEAM</h2>
					</article>
					<article>
						<FontAwesomeIcon icon={faCircleDollarToSlot} />
						<h2>MARKET BEST PRICING</h2>
					</article>
					<article>
						<FontAwesomeIcon icon={faCartFlatbed} />
						<h2>ONTIME DELIVERY</h2>
					</article>
				</div>

				<div className='process'>
					<div className='sub_tit'>
						<h1>PROCESS</h1>
						<p>Three Steps Solution</p>
					</div>

					<article>
						<FontAwesomeIcon icon={faKeyboard} />
						<h2>Order Your Service</h2>
					</article>
					<article>
						<FontAwesomeIcon icon={faNetworkWired} />
						<h2>Our Team Start Works</h2>
					</article>
					<article>
						<FontAwesomeIcon icon={faFileArrowUp} />
						<h2>Deliver</h2>
					</article>
				</div>

				<div className='member'>
					<div className='sub_tit'>
						<h1>OUR TEAM</h1>
						<p>The Leadership Team</p>
					</div>

					{members.map((member, idx) => {
						return (
							<article key={idx}>
								<div className='box'>
									<img src={`${path}/img/${member.pic}`} />
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
								</div>

								<div className='intro'>
									<h2>{member.name}</h2>
									<p>{member.position}</p>
									<span>{member.introduce}</span>
								</div>
							</article>
						);
					})}
				</div>

				<div className='questions'>
					<div className='sub_tit'>
						<h1>DO YOU HAVE ANY QUESTION?</h1>
						<p>Feel free to request for qoote</p>
					</div>

					<NavLink to='/board'>
						BOARD REQUEST FOR QUOTE <FontAwesomeIcon icon={faArrowRight} />
					</NavLink>
				</div>
			</Layout>
		</>
	);
}

export default About;
