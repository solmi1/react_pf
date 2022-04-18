import Layout from '../common/Layout';
import Popup from '../common/Popup';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const path = process.env.PUBLIC_URL;

function Portfolio() {
	const key = '51b057cd44f5185603bcc94da4cdd6ad';
	const username = '195299958@N03';
	const num = 50;
	const base = 'https://www.flickr.com/services/rest/?';
	const methodFav = 'flickr.favorites.getList';
	const url = `${base}method=${methodFav}&api_key=${key}&per_page=${num}&format=json&nojsoncallback=1&user_id=${username}`;

	const [items, setItems] = useState([]);
	const [open, setOpen] = useState(false);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		axios.get(url).then((json) => {
			console.log(json.data.photos.photo);
			setItems(json.data.photos.photo);
		});
	}, []);

	return (
		<>
			<Layout name={'Gallery'}>
				<ul>
					{items.map((item, idx) => {
						return (
							<li
								key={idx}
								onClick={() => {
									setOpen(true);
									setIndex(idx);
								}}>
								<div className='box'>
									<p>
										<FontAwesomeIcon icon={faPlus} />
									</p>

									<div className='pic'>
										<img
											src={`https:live.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg`}
										/>
									</div>
									<h2>{item.title}</h2>
								</div>
							</li>
						);
					})}
				</ul>
			</Layout>

			{open ? (
				<Popup setOpen={setOpen}>
					<img
						src={`https:live.staticflickr.com/${items[index].server}/${items[index].id}_${items[index].secret}_b.jpg`}
					/>
				</Popup>
			) : null}
		</>
	);
}

export default Portfolio;
