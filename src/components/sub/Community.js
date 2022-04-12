import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Community() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const key = 'AIzaSyBVwYJUnAqD52l07QdQxyBTARq6SOpwgmA';
		const num = 4;
		const id = 'PLP1K1O_EnQH8JMRalZtLZYTS2yFF-pC_f';
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&maxResults=${num}&playlistId=${id}`;

		axios.get(url).then((json) => {
			console.log(json.data.items);
			setItems(json.data.items);
		});
	}, []);

	return (
		<Layout name={'COMMUNITY'}>
			<div className='mvBox'>
				<div className='mv'>
					{items.map((item, idx) => {
						const desc = item.snippet.description;
						const date = item.snippet.publishedAt;

						return (
							<article key={idx}>
								<a href='#' className='pic'>
									<img src={item.snippet.thumbnails.medium.url} />
								</a>
								<h2>{item.snippet.title}</h2>
							</article>
						);
					})}
				</div>
			</div>
		</Layout>
	);
}

export default Community;
