import './home.css';
import React from 'react';
import {useNavigate, Link} from 'react-router-dom';
import { useDispatch,useSelector} from 'react-redux';
import { logoutInitiate } from '../redux/action';

const Home = () => {
    const {currentUser} = useSelector((state) => state.user);
    const dispatch = useDispatch();
    
    const handleAuth = ()=> {
        if (currentUser) {
            dispatch(logoutInitiate());
        }
    };
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
            <h1 >and your email id has been registered in my firebase</h1>
            <br/>
            <br/>
            
            <br/>
            <h1 >This is made by Siddharth Das</h1>
            <br/>
            <br/>
           
           
             
                <br/>
            <br/>
            

            
        </div>
    )
}

export default Home
