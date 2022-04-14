import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Popup(props) {
	return (
		<aside className='popup'>
			<span>
				<FontAwesomeIcon icon={faXmark} />
			</span>
			<span onClick={() => props.setOpen(false)}>
				<FontAwesomeIcon icon={faXmark} />
			</span>
			<div className='con'>{props.children}</div>
		</aside>
	);
}
export default Popup;
