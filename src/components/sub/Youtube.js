import Layout from '../common/Layout';
import Popup from '../common/Popup';
import Images from './Images';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faInstagram,
	faTwitter,
	faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import {
	faEnvelope,
	faArrowRight,
	faXmark,
} from '@fortawesome/free-solid-svg-icons';

function Youtube(props) {
	// 뉴포스트
	const path = process.env.PUBLIC_URL;
	const imgs = ['brand01', 'brand02', 'brand03', 'brand04', 'brand05'];
	const [pics] = useState(imgs);

	// 유튜브
	const key = 'AIzaSyBVwYJUnAqD52l07QdQxyBTARq6SOpwgmA';
	const num = 4;
	const id = 'PLP1K1O_EnQH9ylQZIezxV4c1B7vVKRkmj';
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&maxResults=${num}&playlistId=${id}`;

	// 갤러리
	const imgs2 = [
		'ui01',
		'ui02',
		'ui03',
		'ui04',
		'ui05',
		'ui06',
		'web01',
		'web02',
		'web03',
		'web04',
		'web05',
		'web06',
	];
	const [pics2] = useState(imgs2);

	//팝업 생성
	const [open, setOpen] = useState(false);
	const [index, setIndex] = useState(0);
	const [items, setItems] = useState([]);

	useEffect(() => {
		axios.get(url).then((json) => {
			setItems(json.data.items);
		});
	}, []);

	return (
		<>
			<Layout name={'YOUTUBE'}>
				<div className='top'>
					<div className='left'>
						<div>
							<div className='imgBox'>
								{items.map((items, idx) => {
									const desc = items.snippet.description;
									const date = items.snippet.publishedAt;

									return (
										<article>
											<div
												key={idx}
												onClick={() => {
													setOpen(true);
													setIndex(idx);
												}}
												className='imgbox'>
												<img src={items.snippet.thumbnails.maxres.url} />
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

											<table>
												<tbody>
													<tr>
														<td rowSpan='3'>{date.split('T')[0]}</td>
														<td colSpan='3'>{items.snippet.title}</td>
													</tr>
													<tr>
														<td colSpan='3'>
															{desc.length > 150
																? desc.substr(0, 200) + '...'
																: desc}
														</td>
													</tr>
													<tr>
														<td>By {items.snippet.videoOwnerChannelTitle}</td>
														<td>0 Comments</td>
														<td
															key={idx}
															onClick={() => {
																setOpen(true);
																setIndex(idx);
															}}>
															More <FontAwesomeIcon icon={faArrowRight} />
														</td>
													</tr>
												</tbody>
											</table>
										</article>
									);
								})}
							</div>
						</div>
					</div>

					<div className='right'>
						{/* 카테고리 */}
						<div className='sec cartegories'>
							<h2>Cartegories</h2>
							<ul>
								<li>
									<p>Design</p>
								</li>
								<li>
									<p>UI/UX Design</p>
								</li>
								<li>
									<p>Logo Design</p>
								</li>
								<li>
									<p>Brand Identity</p>
								</li>
								<li>
									<p>Clipping Path</p>
								</li>
								<li>
									<p>Image Masking</p>
								</li>
							</ul>
						</div>

						{/* 뉴포스트 */}
						<div className='sec post'>
							<h2>New Posts</h2>
							<>
								{pics.map((pic, idx) => {
									return <Images key={idx} imgSrc={pic} path={path} />;
								})}
							</>
						</div>

						{/* 공지사항 */}
						<div className='sec notice'>
							<h2>Notice</h2>
							<ul>
								<li>
									<NavLink to='/board'>
										<h3>lorem 5</h3>
										<p>
											Lorem ipsum dolor sit, amet consectetur adipisicing elit.
											Ipsa?
										</p>
									</NavLink>
								</li>
								<li>
									<NavLink to='/board'>
										<h3>lorem 4</h3>
										<p>
											Lorem ipsum dolor sit, amet consectetur adipisicing elit.
											Ipsa?
										</p>
									</NavLink>
								</li>
								<li>
									<NavLink to='/board'>
										<h3>lorem 3</h3>
										<p>
											Lorem ipsum dolor sit, amet consectetur adipisicing elit.
											Ipsa?
										</p>
									</NavLink>
								</li>
								<li>
									<NavLink to='/board'>
										<h3>lorem 2</h3>
										<p>
											Lorem ipsum dolor sit, amet consectetur adipisicing elit.
											Ipsa?
										</p>
									</NavLink>
								</li>
								<li>
									<NavLink to='/board'>
										<h3>lorem 1</h3>
										<p>
											Lorem ipsum dolor sit, amet consectetur adipisicing elit.
											Ipsa?
										</p>
									</NavLink>
								</li>
							</ul>
						</div>

						{/* 갤러리 */}
						<div className='sec gallery'>
							<h2>Gallery</h2>
							<div className='imgBox'>
								<img src={`${path}/img/web01.jpg`} alt='web01' />
								<img src={`${path}/img/web02.jpg`} alt='web02' />
								<img src={`${path}/img/web03.jpg`} alt='web03' />
								<img src={`${path}/img/web04.jpg`} alt='web04' />
								<img src={`${path}/img/web05.jpg`} alt='web05' />
								<img src={`${path}/img/web06.jpg`} alt='web06' />
								<img src={`${path}/img/ui01.jpg`} alt='ui01' />
								<img src={`${path}/img/ui02.jpg`} alt='ui02' />
								<img src={`${path}/img/ui03.jpg`} alt='ui03' />
								<img src={`${path}/img/ui04.jpg`} alt='ui04' />
								<img src={`${path}/img/ui05.jpg`} alt='ui05' />
								<img src={`${path}/img/ui06.jpg`} alt='ui06' />
							</div>
						</div>
					</div>
				</div>

				{/* 하단 유튜브 */}
				<div className='mvBox'>
					<div className='mv'>
						{items.map((items, idx) => {
							const desc = items.snippet.description;
							const date = items.snippet.publishedAt;

							return (
								<article
									key={idx}
									onClick={() => {
										setOpen(true);
										setIndex(idx);
									}}>
									<div className='imgBox'>
										<img src={items.snippet.thumbnails.medium.url} />
									</div>
									<h2>{items.snippet.title}</h2>
									<div className='txt'>
										<p>
											{desc.length > 50 ? desc.substr(0, 120) + '...' : desc}
										</p>
										<span>{date.split('T')[0]}</span>
									</div>
								</article>
							);
						})}
					</div>
				</div>
			</Layout>

			{open ? (
				<Popup setOpen={setOpen}>
					<iframe
						src={
							'https://www.youtube.com/embed/' +
							items[index].snippet.resourceId.videoId
						}
						frameBorder='0'></iframe>
				</Popup>
			) : null}
		</>
	);
}

export default Youtube;
