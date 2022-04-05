import React, { useEffect, useState } from 'react';
import './Reviews.css';

const Reviews = () => {
    const {reviews, setReviews} = useState([]);
    useEffect( () => {
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data));
    }, [])
    
    return (
        <div>
            <h2>Our happy Customers review</h2>
        </div>
       
    );
};

export default Reviews;