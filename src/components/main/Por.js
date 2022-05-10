import Popup from '../common/Popup';
import { useSelector } from 'react-redux';
import { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowRight,
	faPlus,
	faShareFromSquare,
	faXmark,
} from '@fortawesome/free-solid-svg-icons';

function Por() {
	const { flickr } = useSelector((state) => state.flickrReducer);
	const pop = useRef(null);
	const [index, setIndex] = useState(0);

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

				<>
					<Swiper
						slidesPerView={'auto'}
						spaceBetween={20}
						scrollbar={{
							hide: true,
						}}
						modules={[Scrollbar]}
						className='mySwiper'>
						<>
							{flickr.map((item, idx) => {
								if (idx < 10) {
									return (
										<SwiperSlide key={idx}>
											<div className='pic'>
												<img
													src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg`}
												/>
												<div className='more'>
													<p
														onClick={() => {
															setIndex(idx);
															pop.current.open();
														}}>
														<FontAwesomeIcon icon={faPlus} />
													</p>
													<p>
														<NavLink to='/portfolio'>
															<FontAwesomeIcon icon={faShareFromSquare} />
														</NavLink>
													</p>
												</div>
											</div>
										</SwiperSlide>
									);
								}
							})}
						</>
					</Swiper>

					<Popup ref={pop}>
						{flickr.length !== 0 && (
							<img
								src={`https://live.staticflickr.com/${flickr[index].server}/${flickr[index].id}_${flickr[index].secret}_b.jpg`}
							/>
						)}
						<span onClick={() => pop.current.close()}>
							<FontAwesomeIcon icon={faXmark} />
						</span>
					</Popup>
				</>
			</div>
		</section>
	);
}

export default Por;
