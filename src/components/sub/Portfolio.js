import Layout from '../common/Layout';
import Popup from '../common/Popup';
import axios from 'axios';
import Maconry from 'react-masonry-component';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Portfolio() {
	const pop = useRef(null);
	const path = process.env.PUBLIC_URL;
	const masonryOptions = {
		transitionDuration: '0.5s',
	};

	const frame = useRef(null);
	//검색창을 참조할 객체 생성
	const input = useRef(null);

	//팝업생성
	const [open, setOpen] = useState(false);
	const [index, setIndex] = useState(0);

	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [enableClick, setEnableClick] = useState(true);

	const getFlickr = async (opt) => {
		const key = '51b057cd44f5185603bcc94da4cdd6ad';
		const username = '195299958@N03';
		const method_people = 'flickr.people.getPhotos';
		const method2 = 'flickr.photos.search';
		const num = opt.count;
		let url = '';

		if (opt.type === 'interest') {
			url = `https://www.flickr.com/services/rest/?method=${method_people}&api_key=${key}&per_page=${num}&format=json&nojsoncallback=1&user_id=${username}`;
		}

		if (opt.type === 'search') {
			url = `https://www.flickr.com/services/rest/?method=${method2}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&tags=${opt.tags}`;
		}

		await axios.get(url).then((json) => {
			//api호출시 해당 검색어에 대한 결과값이 없으면
			//경고창 띄우고 해당 함수 종료
			if (json.data.photos.photo.length === 0) {
				alert('해당 검색어의 이미지가 없습니다');
				return;
			}
			setItems(json.data.photos.photo);
		});

		setTimeout(() => {
			frame.current.classList.add('on');
			setLoading(false);

			setTimeout(() => {
				setEnableClick(true);
			}, 1000);
		}, 1000);
	};

	const showSearch = () => {
		const result = input.current.value.trim();
		if (!result || result === '') {
			alert('검색어를 입력하세요.');
			return;
		}

		if (enableClick) {
			setEnableClick(false);
			setLoading(true);
			frame.current.classList.remove('on');

			getFlickr({
				type: 'search',
				count: 50,
				tags: result,
			});
			input.current.value = '';
		}
	};

	useEffect(() => {
		getFlickr({
			type: 'interest',
			count: 50,
		});
	}, []);

	return (
		<>
			<Layout name={'PORTFOLIO'}>
				<div className='topBtns'>
					<button
						onClick={() => {
							if (enableClick) {
								setEnableClick(false);
								setLoading(true);
								frame.current.classList.remove('on');

								getFlickr({
									type: 'interest',
									count: 50,
								});
							}
						}}>
						RESET
					</button>

					<div className='searchBox'>
						<input
							type='text'
							ref={input}
							onKeyUp={(e) => {
								if (e.key === 'Enter') showSearch();
							}}
						/>
						<button onClick={showSearch}>SEARCH</button>
					</div>
				</div>

				<div className='frame' ref={frame}>
					<Maconry elementType={'div'} options={masonryOptions}>
						{items.map((item, idx) => {
							const desc = item.title;
							console.log(item);
							return (
								<article key={idx}>
									<div className='box'>
										<p
											onClick={() => {
												setOpen(true);
												setIndex(idx);
											}}>
											<FontAwesomeIcon icon={faPlus} />
										</p>

										<div className='pic'>
											<img
												src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg`}
											/>
										</div>

										<h2>
											{desc.length > 20 ? desc.substr(0, 16) + '...' : desc}
										</h2>
									</div>
								</article>
							);
						})}
					</Maconry>
				</div>
			</Layout>

			{open ? (
				<Popup ref={pop}>
					<img
						src={`https:live.staticflickr.com/${items[index].server}/${items[index].id}_${items[index].secret}_b.jpg`}
					/>
				</Popup>
			) : null}
		</>
	);
}

export default Portfolio;
