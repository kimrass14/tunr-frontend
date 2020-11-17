import React, {useEffect, useState} from 'react'
import './User.css'

const User = (props) => {
    const [users, setUsers] = React.useState([])

    const getUsers = () => {
		fetch(props.url + '/users/')
			.then((response) => response.json())
			.then((data) => {
				// console.log('data', data)
				setUsers(data);
			});
	};
	React.useEffect(() => {
		getUsers();
    }, []);


    const loaded = users.map((user, index) => {
        return(
                <div className="name" onClick={() => {props.handleClick(user)}}>{user.name}</div>
        )
    })

    const loading = 'No users....sad'


    return(
        <div className="user-section">
            <h4>Top Users :</h4>
            <div className="users">
                {users.length > 0 ? loaded : <h4>{loading}</h4>}
            </div>
        </div>
    )
}

export default User