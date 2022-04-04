import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <h2>Question and Answer:</h2>

            <div className='blogs'>
            <h4>1. What is Context API?</h4>
            <p>#Context provides a way to pass data through the component tree without having to pass props down manually at every level.The Context API is a component structure provided by the React framework, which enables us to share specific forms of data across all levels of the application.</p>
            <br></br>

            <h4>2. What is Semantic Tag?</h4>
            <p>#Semantic tags clearly define the purpose of the HTML element. It also describes the type of content that the element should contain.Semantic tags also help search engines to parse the webpage correctly and find accurate information. Thus, helping search engines to correctly index the page.</p>
            </div>
        </div>
    );
};

export default Blogs;