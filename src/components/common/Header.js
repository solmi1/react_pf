import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faAngrycreative } from '@fortawesome/free-brands-svg-icons';

function Header(props) {
	return (
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
						<NavLink to='/community'>COMMUNITY</NavLink>
					</li>
					<li>
						<NavLink to='/board'>BOARD</NavLink>
					</li>
				</ul>

				<FontAwesomeIcon icon={faBars} />
			</div>
		</header>
	);
}

export default Header;
