import { useState, forwardRef, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
	faInstagram,
	faTwitter,
	faFacebook,
} from '@fortawesome/free-brands-svg-icons';

const Menu = forwardRef((props, ref) => {
	const [open, setOpen] = useState(false);
	// const active = { background: '#ee7d31', color: '#fff' };

	useImperativeHandle(ref, () => {
		return {
			open: () => setOpen(true),
			close: () => setOpen(false),
		};
	});

	return (
		<AnimatePresence>
			{open && (
				<>
					<motion.nav
						initial={{
							x: 300,
							opacity: 0,
						}}
						animate={{
							x: 0,
							opacity: 1,
							transition: { duration: 0.5, type: 'spring', bounce: 0 },
						}}
						exit={{
							x: 300,
							opacity: 0,
							transition: { duration: 0.5, type: 'spring', bounce: 0 },
						}}>
						<ul
							id='gnb'
							onClick={() => {
								setOpen(false);
								props.setOpened(!props.opened);
							}}>
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
								<NavLink to='/board'>
									{/* activeStyle={active} */}
									BOARD
								</NavLink>
							</li>
						</ul>

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
					</motion.nav>
				</>
			)}
		</AnimatePresence>
	);
});

export default Menu;
