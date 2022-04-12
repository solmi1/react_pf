import React, { useRef } from 'react';

function Layout(props) {
	let frame = useRef(null);

	return (
		<section className={`content ${props.name}`} ref={frame}>
			<div className='sub_visual'>
				<h1>{props.name}</h1>
			</div>
			<div className='inner'>{props.children}</div>
		</section>
	);
}

export default Layout;
