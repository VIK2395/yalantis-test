import React, { useState } from 'react';
import User from './User'

function Month(props) {
    const [isOpen, setIsOpen] = useState(false)

    const usersElements = props.users.map(user => <User key = {user.id} userInfo = {user} />)

    const monthBgColor = (qty) => {
        if (qty <=2) return 'bg-light mb-3';
        if (qty >= 3 && qty <= 6) return 'text-white bg-info mb-3';
        if (qty >= 7 && qty <= 10) return 'text-white bg-success mb-3';
        if (qty >= 11) return 'text-white bg-danger mb-3';
    }

    const handleClick = () => setIsOpen(!isOpen);

    return (
        <>
            <div className = {`card mx-auto ${monthBgColor(props.users.length)}`}>
                
                <div className='card-header'>
                    {props.month}
                    <button className='btn btn-primary float-right' onClick={ handleClick }>
                        {isOpen ? 'close' : 'open'}
                    </button>
                </div>
                <div className='card-body'>
                    <p className='card-text'>
                        users qty: {props.users.length}
                    </p>
                    {isOpen && (
                    <div>
                        {usersElements}
                    </div>
                    )}
                </div>

            </div>
        </>
    )
}

export default Month;