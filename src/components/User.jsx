import React from 'react';

function User(props) {
    return (
        <div className='card text-dark bg-light mb-3'>
            <div className='card-body'>
                <p className='card-text'>
                    id: {props.userInfo.id}
                </p>
                <p className='card-text'>
                    firstName: {props.userInfo.firstName}
                </p>
                <p className='card-text'>
                    lastName: {props.userInfo.lastName}
                </p>
                <p className='card-text'>
                    bd: {props.userInfo.dob}
                </p>
            </div>
        </div>
    )
}

export default User