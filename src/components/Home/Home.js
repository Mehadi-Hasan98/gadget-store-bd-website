import React from 'react';
import './Home.css';
import Image from '../../components/Image/headphone.jpg'
import useReviews from '../../Hooks/useReviews';
import Review from '../Review/Review';
import { useNavigate } from 'react-router-dom';



const Home = () => {
    const [reviews, setReviews] = useReviews();
    const navigate = useNavigate();
    return (
        <div className='homepage'>
            <div className='main'>
            <div>
            <h1 className='main-text'>Next Generations Headphone</h1>
            <h1 className='main-text'>Next Generations Gadget</h1>
            <p>Here is your next generation Headphones. In this website you will find various types of new headphones. You can choose your favourite headphone from here. All the headphones are latest editions. Buy one and enjoy yourself.</p>
            <button>Live Demo</button>
            </div>
            <div>
            <img width={350} src={Image} alt="" />
            </div>
            </div>
            <br></br>
            <br></br>
            <h2>Customers Review</h2>
            <div className='card-home'>
            {reviews.slice(0, 3).map((review) => (
            <Review key={review.id} review={review}></Review>
          ))}
            </div>
            <button className='review-btn' onClick={()=> navigate('/reviews')}>See All Reviews</button>
        </div>
        
    );
};

export default Home;