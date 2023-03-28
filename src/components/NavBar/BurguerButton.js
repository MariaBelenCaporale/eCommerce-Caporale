import React from 'react';
import './BurguerButton.css';

const BurguerButton = (props) => {
    
    return (
        <div className='Burguer'>
        <div onClick={props.handleClick} className={`nav-icon3 ${props.clicked ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        </div>
    )
}
export default BurguerButton;