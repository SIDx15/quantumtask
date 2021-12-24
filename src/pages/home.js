import './home.css';
import React from 'react';
import {useNavigate, Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            
            
            <br/>
            <br/>
            <br/>
            <h1 >Welcome to our site</h1>
            <br />
            <h1 >You have successfuly signed up / logged in</h1>
            <br/>
            <h1 >Using facebook / google / other email</h1>
            <br/>
            <br/>
            <br/>
            
            <br/>
            <h1 >This is made by Siddharth Das</h1>
            <br/>
            <br/>
           
            <Link to ="/">
                <button className='button-18'>
                    BACK
                </button>
                </Link>
                <br/>
            <br/>
            

            
        </div>
    )
}

export default Home
