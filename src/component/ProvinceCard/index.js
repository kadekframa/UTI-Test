import React from 'react';
import './province-card.css';

const ProvinceCard = (props) => {
    const {province, url, bg_image} = props;
    return (
        <div className='card-wrapper m-auto'>
            <a className='link-url' href='/'>
                <div className={bg_image}>
                    <div className='text-overlay'>
                        <h3 className='text'>{province}</h3>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default ProvinceCard;