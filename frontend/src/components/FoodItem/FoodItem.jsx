import React from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'

const FoodItem = ({ id, name, price, description, image }) => {
    return (
        <div className='food-item'>
            <div className='food-item-image-container'>
                <img className="food-item-image" src={image} alt="" />
            </div>
            <div className='food-item-info'>
                <div className="food-item-rating">
                    <p>
                        {name}
                    </p>
                    <img src={assets.rating_starts}></img>
                    <p className='food-item-desc'>
                        {description}
                    </p>
                    <p className='food-item-price'>
                        ${price}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FoodItem
