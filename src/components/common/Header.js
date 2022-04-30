import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faAngrycreative } from '@fortawesome/free-brands-svg-icons';
import Menu from './Menu';

function Header(props) {
	// 테마 컬러변경
	const [color, setColor] = useState('orange');

	const handleColor = (e) => {
		const color = e.target.innerText;
		setColor(color);
	};

	useEffect(() => {
		document.body.className = color;
	}, [color]);

	const [opened, setOpened] = useState(false);
	const menu = useRef(null);

	useEffect(() => {
		opened ? menu.current.open() : menu.current.close();
	}, [opened]);

	return (
		<>
			<header className={props.type}>
				<div className='inner'>
					<h1>
						<NavLink exact to='/'>
							<FontAwesomeIcon icon={faAngrycreative} />
						</NavLink>
					</h1>

					<ul id='gnb'>
						<li>
							<NavLink to='/service'>SERVICE</NavLink>
						</li>
						<li>
							<NavLink to='/about'>ABOUT</NavLink>
						</li>
						<li>
							<NavLink to='/contact'>CONTACT</NavLink>
						</li>
						<li>
							<NavLink to='/portfolio'>PORTFOLIO</NavLink>
						</li>
						<li>
							<NavLink to='/youtube'>YOUTUBE</NavLink>
						</li>
						<li>
							<NavLink to='/board'>BOARD</NavLink>
						</li>
					</ul>

					<div className='color'>
						<div className='orange' onClick={handleColor}>
							orange
						</div>
						<div className='lightblue' onClick={handleColor}>
							lightblue
						</div>
						<div className='lightgreen' onClick={handleColor}>
							lightgreen
						</div>
					</div>

					<FontAwesomeIcon
						icon={faBars}
						onClick={() => {
							setOpened(!opened);
						}}
					/>
				</div>
			</header>

			<Menu ref={menu} opened={opened} setOpened={setOpened} />
		</>
	);
}

export default Header;
