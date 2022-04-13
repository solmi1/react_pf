import Layout from '../common/Layout';
import Popup from '../common/Popup';
import Images from './Images';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Youtube() {
	const path = process.env.PUBLIC_URL;
	const imgs = ['brand01', 'brand02', 'brand03', 'brand04', 'brand05'];
	const [pics] = useState(imgs);

	const key = 'AIzaSyBVwYJUnAqD52l07QdQxyBTARq6SOpwgmA';
	const num = 4;
	const id = 'PLP1K1O_EnQH8JMRalZtLZYTS2yFF-pC_f';
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&maxResults=${num}&playlistId=${id}`;

	const [items, setItems] = useState([]);
	const [open, setOpen] = useState(false); //팝업 생성 유무를 관리하는 state생성
	const [index, setIndex] = useState(0);

	useEffect(() => {
		axios.get(url).then((json) => {
			console.log(json.data.items);
			setItems(json.data.items);
		});
	}, []);

	return (
		<>
			<Layout name={'YOUTUBE'}>
				<div className='top'>
					<div className='left'>
						<article>
							<div className='imgBox'>
								<div className='img'></div>
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
									<td rowspan='3'>
										<strong>31</strong> March 2022 Thursday
									</td>
									<td colspan='3'>What is Graphic Design?</td>
								</tr>
								<tr>
									<td colspan='3'>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Modi nulla sit qui. Repellat dignissimos iure iusto
										veritatis. Repellendus tenetur numquam quod minus voluptatum
										aliquid, fugiat vero omnis illum nobis sapiente!
									</td>
								</tr>
								<tr>
									<td>By Matt</td>
									<td>0 Comments</td>
									<td>
										<a href='#'>
											More <FontAwesomeIcon icon={faArrowRight} />
										</a>
									</td>
								</tr>
							</table>
						</article>
					</div>

					<div className='right'>
						<div class='sec cartegories'>
							<h2>Cartegories</h2>
							<ul>
								<li>
									<a href='#'>Design</a>
								</li>
								<li>
									<a href='#'>UI/UX Design</a>
								</li>
								<li>
									<a href='#'>Logo Design</a>
								</li>
								<li>
									<a href='#'>brand Identity</a>
								</li>
								<li>
									<a href='#'>Clipping Path</a>
								</li>
								<li>
									<a href='#'>Image Masking</a>
								</li>
							</ul>
						</div>

						<div class='sec post'>
							<h2>New Posts</h2>
							<>
								{pics.map((pic, idx) => {
									return <Images key={idx} imgSrc={pic} path={path} />;
								})}
							</>
						</div>

						<div class='sec notice'>
							<h2>Notice</h2>

							<ul>
								<li>
									<a href='#'>Lorem ipsum dolor sit amet consectetur.</a>
								</li>
								<li>
									<a href='#'>Lorem ipsum dolor sit.</a>
								</li>
								<li>
									<a href='#'>
										Lorem ipsum dolor sit amet consectetur adipisicing.
									</a>
								</li>
								<li>
									<a href='#'>Lorem ipsum dolor sit amet.</a>
								</li>
							</ul>
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
									<img src={items.snippet.thumbnails.medium.url} />
									<h2>{items.snippet.title}</h2>
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
