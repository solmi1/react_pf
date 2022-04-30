import React, { useEffect, useRef } from 'react';

function Layout(props) {
	let frame = useRef(null);
	const cursor = useRef(null);
	let isCursor = false;

	const handleMove = (e) => {
		if (isCursor) {
			cursor.current.style.left = e.clientX + 'px';
			cursor.current.style.top = e.clientY + 'px';
		}
	};

	useEffect(() => {
		frame.current.classList.add('on');

		const figure = frame.current.querySelector('.sub_visual');
		figure.addEventListener('mouseenter', () => {
			isCursor = true;
			cursor.current.style.display = 'block';
		});
		figure.addEventListener('mouseleave', () => {
			isCursor = false;
			cursor.current.style.display = 'none';
		});

		window.addEventListener('mousemove', handleMove);

		return () => window.removeEventListener('mousemove', handleMove);
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
