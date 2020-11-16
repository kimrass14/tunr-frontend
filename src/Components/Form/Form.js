import React, { useEffect, useState } from 'react';
import './Form.css';

function Form(props) {
	// console.log('form props', props)
	console.log('form props.song', props.song) //returns selected song
	
//DESTRUCTURING
	// const [formData, setFormData] = useState({title: props.song.title, artist: props.song.artist, time: props.song.time});
	// 	console.log('form data', formData) 
	// 	//return is song with empty values
	// const {title} = props.song.title
	// 	console.log('title', title) 
		//returns 'undefined'

	const [formData, setFormData] = useState(props.song)
		console.log('formData', formData)

	//because form is there upon initial opening of site
	//it needs to re-render to show updates / song to update

	useEffect(() => {
		setFormData(props.song)
	}, [props.song.id])
	console.log('formData', formData)

	const handleChange = (e) => {
		const key = e.target.name;
		const value = e.target.value;
		setFormData({ ...formData, [key]: value });
		console.log("value", value)
	};

	const handleSubmit = (event) => {
		event.preventDefault(); // Prevent Form from Refreshing
		console.log('formdata: ', formData);
		props.handleSubmit(formData); // Submit to Parents desired function
		// props.history.push('/'); //Push back to display page
	};

	return (
		<div className='song-form'>
			<h3>Add a new song</h3>
			<form onSubmit={handleSubmit}>
				<input
					className="inputs"
					type='text'
					name='title'
					value={formData.title}
					// defaultValue="hello"
					placeholder='Title'
					onChange={handleChange}
				/>
				<input
					className="inputs"
					type='text'
					name='artist'
					value={formData.artist}
					placeholder='Artist'
					onChange={handleChange}
				/>
				<input
					className="inputs"
					type='text'
					name='time'
					value={formData.time}
					placeholder='Time'
					onChange={handleChange}
				/>
				<div className="btn-div">
					<input type='submit' value='Add song' className="button"/>
					<input type='submit' value='Update' className="button"/>
				</div>
			</form>
		</div>
	);
}

export default Form;
