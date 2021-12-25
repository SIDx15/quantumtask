import React from 'react';
import {Route} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Redirect from './redirect';
import Home from '../pages/home';

const Userroute = (children, ...rest) => {
    const { currentUser } = useSelector((state) => state.user);
    return currentUser ? <Route { ...rest }/> : <Redirect to="/" />;
}

export default Userroute

