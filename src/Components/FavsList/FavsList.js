import React from 'react';
import './FavsList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faHeart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function FavsList(props) {
	// console.log('favs', props)
	const loaded = props.favs.map((fav, index) => {
		return (
			<div className="fav-list">
				<div className='fav' key={index}>
						<span className='fav-title'>
							<b>Title:</b> {fav.title}
						</span>
						<span className='fav-artist'>
							<b>Artist:</b> {fav.artist}
						</span>
						<span className='fav-time'>
							<b>Time:</b> {fav.time}
						</span>
				</div>
				<div className='btns'>
					<button className='fav-btn save-song' onClick={() => {props.handleUnsave(fav)}}>
						<FontAwesomeIcon icon={faHeart} />
					</button>
				</div>
			</div>
		);
	});
	const loading = 'No songs added yet';

	return (
		<div className="fav-div">
			<h3>My Fave List</h3>
			{props.favs.length > 0 ? loaded : <div className="loading">{loading}</div>}
		</div>
	)
}

export default FavsList;
