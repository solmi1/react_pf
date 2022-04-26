import React, { useEffect, useRef } from 'react';

function Layout(props) {
	let frame = useRef(null);
	const cursor = useRef(null);

	useEffect(() => {
		frame.current.classList.add('on');

		if (cursor.current) {
			window.addEventListener('mousemove', (e) => {
				cursor.current.style.left = e.clientX + 'px';
				cursor.current.style.top = e.clientY + 'px';
			});
		}
	}, []);

	return (
		<section className={`content ${props.name}`} ref={frame}>
			<div className='sub_visual'>
				<h1>{props.name}</h1>
				<div className='cursor' ref={cursor}></div>
			</div>
			<div className='inner'>{props.children}</div>
		</section>
	);
}

export default Layout;
