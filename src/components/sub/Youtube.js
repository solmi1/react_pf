import Layout from '../common/Layout';
import Popup from '../common/Popup';
import Images from './Images';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Youtube(props) {
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

	// 유튜브 상단

	// 유튜브 하단
	const key = 'AIzaSyBVwYJUnAqD52l07QdQxyBTARq6SOpwgmA';
	const num = 4;
	const id = 'PLP1K1O_EnQH9ylQZIezxV4c1B7vVKRkmj';
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&maxResults=${num}&playlistId=${id}`;

	const [items, setItems] = useState([]);
	const [open, setOpen] = useState(false); //팝업 생성 유무를 관리하는 state생성
	const [index, setIndex] = useState(0);

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
												<tr>
													<td rowspan='3'>{date.split('T')[0]}</td>
													<td colspan='3'>{items.snippet.title}</td>
												</tr>
												<tr>
													<td colspan='3'>
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
