
import useReviews from '../../Hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useReviews(); 
    
    return (
        <div>
            <h2>Our happy Customers Review!!</h2>
           <div className='card'>
           {
               reviews.map(review => <Review 
                key={review.id}
                review={review}
               ></Review>)
            }
           </div>
        </div>
       
    );
};

export default Reviews;