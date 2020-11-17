import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faHeart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Playlist.css';

function Playlist(props) {

	const loaded = props.userList.map((song, index) => {
// const loaded = props.list.map((song, index) => {
		return (
			<div className='song' key={index}>
				<div className='song-info'>
					<span className='song-title'>
						<b>Title:</b> {song.title}
					</span>
					<span className='song-artist'>
						<b>Artist:</b> {song.artist}
					</span>
					<span className='song-time'>
						<b>Time:</b> {song.time}
					</span>
				</div>
				<div className='btns'>
					
						<button className='btn save-song' onClick={() => {props.handleSave(song)}}>
							<FontAwesomeIcon icon={faHeart} />
						</button>
					<Link to='/edit'>
						<button className='btn edit-song' onClick={
							() => {
								console.log('song', song)
							props.selectSong(song);
							props.history.push('/edit')
							}}>
							<FontAwesomeIcon icon={faEdit} />
						</button>
					</Link>
					<button className='btn remove-song' onClick={() => {props.handleDelete(song)}}>
						<FontAwesomeIcon icon={faTrashAlt} />
					</button>
				</div>
			</div>
		);
	});

	const loading = 'Loading...';

	return (
		<div className="playlist">
			<h3>My Playlist</h3>
			{props.list.length > 0 ? loaded : loading}
		</div>
	);
}

export default Playlist;
