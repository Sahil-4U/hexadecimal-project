import React from 'react';
import './sidecolumn.css';

function Sidecolumn({ sortValue }) {
    const handleClick = (e) => {
        sortValue(e.target.value);
    }
    return (
        <div className='sidecolumn-component'>
            <button className='btn' onClick={handleClick} value={"name"}>
                Sort By Name
            </button>
            <button className='btn' onClick={handleClick} value={"username"}>
                Sort By UserName
            </button>
            <button className='btn' onClick={handleClick} value={"phone"}>
                Sort By Phone
            </button>
            <button className='btn' onClick={handleClick} value={"email"}>
                Sort By Email
            </button>
        </div>
    )
}

export default Sidecolumn