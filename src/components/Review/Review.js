import React from 'react';
import './Review.css'

const Review = ({review}) => {
    const {name,comment,rating} = review;
    return (
        <div className='review-card'>
            <div>
            <h4>Name: {name}</h4>
            <p>Review: {comment}</p>
            <p><small>Rating:{rating}</small></p>
            </div>

        </div>
    );
};

export default Review;