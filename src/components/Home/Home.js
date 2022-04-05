import React from 'react';
import './Home.css';
import Image from '../../components/Image/headphone.jpg'



const Home = () => {
    return (
        <div className='homepage'>
            <div>
            <h1 className='main-text'>Next Generations Headphone</h1>
            <h1 className='main-text'>Next Generations Gadget</h1>
            <p>Here is your next generation Headphones. In this website you will find various types of new headphones. You can choose your favourite headphone from here. All the headphones are latest editions. Buy one and enjoy yourself.</p>
            <button>Live Demo</button>
            </div>
            <div>
            <img width={400} src={Image} alt="" />
            </div>
        </div>
        
    );
};

export default Home;