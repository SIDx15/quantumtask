import React, { useState , useEffect} from 'react';
import {useNavigate} from 'react-router-dom';



const Redirect = () => {
    const [count , setCount ] = useState(3);
    const history = useNavigate();

    useEffect (()=>{
        const interval =  setInterval(() =>{
            setCount((currentcount) => --currentcount)
        },1000)

        count === 0 && history('/')
        return () => clearInterval(interval);
    }, [count , history])
    return (
        <div>
            <p>Redirecting you in {count } seconds</p>
        </div>
    )
}

export default Redirect