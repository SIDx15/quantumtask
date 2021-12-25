import * as types from "./actiotype";
import {auth, googleauthprovider,facebookauthprovider} from "../firebase";

const registerStart = () => ({
    type: types.REGISTER_START,
});

const registerSuccess = (user) => ({
    type :types.REGISTER_SUCCESS,
    payload : user,
});

const registerfail = (error) => ({
    type : types.REGISTER_FAIL,
    payload: error,
});

const loginStart = () => ({
    type: types.LOGIN_START,
});

const loginSuccess = (user) => ({
    type :types.LOGIN_SUCCESS,
    payload : user,
});

const loginfail = (error) => ({
    type : types.LOGIN_FAIL,
    payload: error,
});

const logoutStart = () => ({
    type: types.LOGOUT_START,
});

const logoutSuccess = (user) => ({
    type :types.LOGOUT_SUCCESS,
    
});

const logoutfail = (error) => ({
    type : types.LOGOUT_FAIL,
    payload: error,
});

export const setuser = (user) => ({
    type :types.SET_USER,
    payload : user,
});

const googleStart = () => ({
    type: types.GOOGLE_START,
});

const googleSuccess = (user) => ({
    type :types.GOOGLE_SUCCESS,
    payload : user,
});

const googlefail = (error) => ({
    type : types.GOOGLE_FAIL,
    payload: error,
});

const fbStart = () => ({
    type: types.FB_START,
});

const fbSuccess = (user) => ({
    type :types.FB_SUCCESS,
    payload : user,
});

const fbfail = (error) => ({
    type : types.FB_FAIL,
    payload: error,
});

export const registerInitiate = (email, password, displayname )=>{
    return function (dispatch){
        dispatch(registerStart);
        auth.createUserWithEmailAndPassword(email, password, ).then(({user})=>{
            user.updateProfile({
                displayname
            })
            dispatch(registerSuccess(user))
        }).catch((error) => dispatch(registerfail(error.message)))
    }
}

export const loginInitiate = (email, password )=>{
    return function (dispatch){
        dispatch(loginStart);
        auth.signInWithEmailAndPassword(email, password, ).then(({user})=>{
            
            dispatch(loginSuccess(user))
        }).catch((error) => dispatch(loginfail(error.message)))
    }
}

export const logoutInitiate = ()=>{
    return function (dispatch){
        dispatch(logoutStart);
        auth.signOut().then((response)=>
            
            dispatch(logoutSuccess())
        ).catch((error) => dispatch(logoutfail(error.message)))
    }
}


export const googleInitiate = ()=>{
    return function (dispatch){
        dispatch(googleStart());
        auth.signInWithPopup(googleauthprovider).then(({user})=>{
            
            dispatch(googleSuccess(user))
        }).catch((error) => dispatch(googlefail(error.message)))
    }
}

export const fbInitiate = ()=>{
    return function (dispatch){
        dispatch(fbStart());
        auth.signInWithPopup(facebookauthprovider.addScope("user_birthday, email")).then(({user})=>{
            
            dispatch(fbSuccess(user))
        }).catch((error) => dispatch(fbfail(error.message)))
    }
}

