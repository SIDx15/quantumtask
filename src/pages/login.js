import React,{useState, useEffect} from 'react';
import {useDispatch,  useSelector} from 'react-redux';
import {useNavigate, Link} from 'react-router-dom';
import { loginInitiate, googleInitiate, fbInitiate } from '../redux/action';
import './Login.css';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

const Login = () => {
    const [state, setState] = useState({
        email:"",
        password:"",

    });
    const  {email, password} = state;

    const {currentUser} = useSelector((state) => state.user);
    const history =useNavigate();

    useEffect(()=>{
        if(currentUser){
            history("/home");
        }
    }, [currentUser, history]);

    const dispatch = useDispatch();

    const handlegooglesignin = () => {
        dispatch(googleInitiate());
    };
    const handlefbsignin = () => {
        dispatch(fbInitiate());
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        if(!email || ! password){
            return;
        }
        dispatch(loginInitiate(email, password));
        setState({email:"", password:""});
    };
    const handlechange = (e) => {
        let {name, value} = e.target;
        setState({...state,[name]:value});
    };
    return (
        <div id='logreg-forms'>
            
            <form className='form-signin' onSubmit={handlesubmit}>
                <h1 className='h3 nb-3 font-weight-normal' style={{textAlign:"center"}}>
                    Sign in
                </h1>
                <div className='social-login'>
                  <button className='btn google-btn social-btn' type="button" onClick={handlegooglesignin}>
                      <span>
                          <GoogleIcon />
                          <i className='fab fa-google-plus-g'></i>  sign in with google
                      </span>
                  </button>
                  <button className='btn facebook-btn social-btn' type="button" onClick={handlefbsignin}>
                      <span>
                          < FacebookIcon/>
                          <i className='fab fa-facebook-f'></i>  sign in with facebook
                      </span>
                  </button>
                </div>

                <p style={{textAlign:'center'}}>OR</p>
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
                type="password"
                id="inputpassword"
                className="form-control"
                
                placeholder='password'
                name='password'
                onChange={handlechange}
                value={password}
                required
                />
                <button className='btn btn-secondary btn-block' type="submit">Sign in</button>
                <hr />
                
                <p> Dont have account </p>
                <Link to ="/register">
                <button className='btn btn-primary btn-block' type="button" id="btn-signup">
                    <i className='fas fa-user-plus'></i>Sign up New Account
                </button>
                </Link>
                

            </form>
        </div>
    )
}

export default Login

/*
<p style={{textAlign:'center'}}>OR</p>
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
                type="password"
                id="inputpassword"
                className="form-control"
                
                placeholder='password'
                name='password'
                onChange={handlechange}
                value={password}
                required
                />
                <button className='btn btn-secondary btn-block' type="submit">Sign in</button>
                <hr />

                */