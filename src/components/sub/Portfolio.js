import Layout from '../common/Layout';
import Popup from '../common/Popup';

import { useSelector, useDispatch } from 'react-redux';
import Maconry from 'react-masonry-component';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';

function Portfolio() {
	const path = process.env.PUBLIC_URL;
	const masonryOptions = {
		transitionDuration: '0.5s',
	};

	const frame = useRef(null);
	//검색창을 참조할 객체 생성
	const input = useRef(null);
	// 팝업 컴포넌트 참조
	const pop = useRef(null);
	const [index, setIndex] = useState(0);

	// const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [enableClick, setEnableClick] = useState(true);

	const { flickr } = useSelector((state) => state.flickrReducer);
	const dispatch = useDispatch();
	const [opt, setOpt] = useState({ type: 'interest' });

	const endLoading = () => {
		setTimeout(() => {
			frame.current.classList.add('on');
			setLoading(false);
			setTimeout(() => setEnableClick(true), 1000);
		}, 1000);
	};

	const initGallery = () => {
		setEnableClick(false);
		setLoading(true);
		frame.current.classList.remove('on');

		setOpt({ type: 'interest' });
		endLoading();
	};

	const searchTag = () => {
		const tag = input.current.value.trim();
		if (!tag) {
			alert('검색어를 입력하세요');
			return;
		}
		setEnableClick(false);
		setLoading(true);
		frame.current.classList.remove('on');

		setOpt({ type: 'search', tags: tag });
		input.current.value = '';
		endLoading();
	};

	useEffect(() => {
		dispatch({ type: 'FLICKR_START', opt });
		endLoading();
	}, [opt]);

	return (
		<>
			<Layout name={'PORTFOLIO'}>
				{loading ? (
					<div className='loading'>
						<img src={path + '/img/loading.gif'} />
					</div>
				) : null}

				<div className='topBtns'>
					<button
						onClick={() => {
							if (enableClick) initGallery();
						}}>
						RESET
					</button>

					<div className='searchBox'>
						<input
							type='text'
							ref={input}
							onKeyUp={(e) => {
								if (e.key === 'Enter') {
									if (enableClick) searchTag();
								}
							}}
						/>

						<button
							onClick={() => {
								if (enableClick) searchTag();
							}}>
							SEARCH
						</button>
					</div>
				</div>

				<div className='frame' ref={frame}>
					<Maconry elementType={'div'} options={masonryOptions}>
						{flickr.map((item, idx) => {
							const desc = item.title;
							return (
								<article key={idx}>
									<div className='box'>
										<p
											onClick={() => {
												// setOpen(true);
												setIndex(idx);
												pop.current.open();
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
	);
}

export default Portfolio;
