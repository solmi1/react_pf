import Layout from '../common/Layout';
import Popup from '../common/Popup';
import Images from './Images';
import { NavLink } from 'react-router-dom';
import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
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

function Youtube() {
	// 카테고리
	const names = [
		'Design',
		'UI/UX Design',
		'Logo Design',
		'Brand Identity',
		'Clipping Path',
		'Image Masking',
	];
	const listItem = names.map((name) => (
		<li>
			<p>{name}</p>
		</li>
	));

	// 뉴포스트
	const path = process.env.PUBLIC_URL;
	const imgs = ['brand01', 'brand02', 'brand03', 'brand04', 'brand05'];
	const [pics] = useState(imgs);

	//공지사항
	const getLocalData = () => {
		let data = localStorage.getItem('posts');
		data = JSON.parse(data);
		return data;
	};
	const [posts, setPosts] = useState(getLocalData);

	// 유튜브
	const vidData = useSelector((state) => state.youtubeReducer.youtube);
	const vids1 = vidData.slice(0, 2);
	const vids2 = vidData.slice(2, 5);
	const pop = useRef(null);
	const [index, setIndex] = useState(0);

	// useEffect(() => {
	// 	axios.get(url).then((json) => {
	// 		setItems(json.data.items);
	// 	});
	// }, []);

	return (
		<>
			<Layout name={'YOUTUBE'}>
				<div className='top'>
					<div className='left'>
						<div>
							<div className='imgBox'>
								{vids1.map((item, idx) => {
									const desc = item.snippet.description;
									const date = item.snippet.publishedAt;

									return (
										<article
											key={idx}
											onClick={() => {
												// setOpen(true);
												setIndex(idx);
												pop.current.open();
											}}>
											<div className='imgbox'>
												<img src={item.snippet.thumbnails.maxres.url} />

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
												<tr>
													<td rowSpan='3'>{date.split('T')[0]}</td>
													<td colSpan='3'>{item.snippet.title}</td>
												</tr>
												<tr>
													<td colSpan='3'>
														{desc.length > 150
															? desc.substr(0, 200) + '...'
															: desc}
													</td>
												</tr>
												<tr>
													<td>By {item.snippet.videoOwnerChannelTitle}</td>
													<td>0 Comments</td>
													<td
														key={idx}
														onClick={() => {
															// setOpen(true);
															setIndex(idx);
															pop.current.open();
														}}>
														More <FontAwesomeIcon icon={faArrowRight} />
													</td>
												</tr>
											</table>
										</article>
									);
								})}
							</div>
						</div>
					</div>

					<div className='right'>
						<div className='sec cartegories'>
							<h2>Cartegories</h2>
							<ul>{listItem}</ul>
						</div>

						<div className='sec post'>
							<h2>New Posts</h2>
							<>
								{pics.map((pic, idx) => {
									return <Images key={idx} imgSrc={pic} path={path} />;
								})}
							</>
						</div>

						<div className='sec notice'>
							<h2>Notice</h2>
							<ul>
								{posts.map((post, idx) => {
									let con = post.content.split('\n');
									if (idx < 5) {
										return (
											<li key={idx}>
												<NavLink to='/board'>
													<h3>{post.title}</h3>
													<p>
														{con.map((txt, idx) => {
															return <>{txt}</>;
														})}
													</p>
												</NavLink>
											</li>
										);
									}
								})}
							</ul>
						</div>

						<div className='sec insta'>
							<h2>Instagram</h2>
						</div>
					</div>
				</div>

				<div className='mvBox'>
					<div className='mv'>
						{vids2.map((item, idx) => {
							const desc = item.snippet.description;
							const date = item.snippet.publishedAt;

							return (
								<article
									key={idx}
									onClick={() => {
										// setOpen(true);
										setIndex(idx + 2);
										pop.current.open();
									}}>
									<div className='imgBox'>
										<img src={item.snippet.thumbnails.medium.url} />
									</div>

									<h2>{item.snippet.title}</h2>
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

			<Popup ref={pop}>
				{vidData.length !== 0 && (
					<iframe
						src={
							'https://www.youtube.com/embed/' +
							vidData[index].snippet.resourceId.videoId
						}
						frameBorder='0'></iframe>
				)}
				<span onClick={() => pop.current.close()}>
					<FontAwesomeIcon icon={faXmark} />
				</span>
			</Popup>

			{/* {open ? (
				<Popup setOpen={setOpen}>
					<iframe
						src={
							'https://www.youtube.com/embed/' +
							items[index].snippet.resourceId.videoId
						}
						frameBorder='0'></iframe>
				</Popup>
			) : null} */}
		</>
	);
}

export default Youtube;
