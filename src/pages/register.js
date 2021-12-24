import React,{useState, useEffect} from 'react';
import {useDispatch,  useSelector} from 'react-redux';
import {useNavigate, Link} from 'react-router-dom';
import { registerInitiate } from '../redux/action';
import './register.css';

const Register = () => {
    const [state, setState] = useState({
        displayname:"",
        email:"",
        password:"",
        passwordconfirm:""

    });
    const {currentUser} = useSelector((state) => state.user);
    const history =useNavigate();

    useEffect(()=>{
        if(currentUser){
            history("/home");
        }
    }, [currentUser, history]);

    const dispatch = useDispatch();
    const  {email, password, displayname, passwordconfirm} = state;
    
    const handlesubmit = (e) => {
        e.preventDefault();
        if(password !== passwordconfirm){
            return;
        }
        dispatch(registerInitiate(email, password, displayname));
        setState({email:"",displayname:"",password:"",passwordconfirm:""})
    };
    const handlechange = (e) => {
        let {name, value} = e.target;
        setState({...state,[name]:value});
    };
    return (
        <div id='register-form' >
            <form className='form-signup' onSubmit={handlesubmit}>
                <h1 className='h3 nb-3 font-weight-normal' style={{textAlign:"center"}}>
                    Sign up
                </h1>
                
                
                <input
                type="email"
                id="inputemail"
                className="form-control"
                
                placeholder='Email address'
                name='email'
                onChange={handlechange}
                value={email}
                required
                />
                <input
                type="text"
                id="displayname"
                className="form-control"
                
                placeholder='Full name'
                name='displayname'
                onChange={handlechange}
                value={displayname}
                required
                />
                <input
                type="password"
                id="inputpassword"
                className="form-control"
                
                placeholder='password'
                name='password'
                onChange={handlechange}
                value={password}
                required
                />
                <input
                type="password"
                id="passwordconfirm"
                className="form-control"
                
                placeholder='confirm password'
                name='passwordconfirm'
                onChange={handlechange}
                value={passwordconfirm}
                required
                />
                <button className='btn btn-primary btn-block' type="submit">Sign up</button>
                
                <Link to="/">
                   <i className='fas fa-angle-left'></i> Back
                </Link>
                

            </form>
            <br />
        </div>
    )
}

export default Register;
