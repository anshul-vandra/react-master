import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginAction } from '../../Redux/AuthSlice';
import './signin.scss';

const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        dispatch(loginAction())
            .then(res => navigate('/dashboard'))
    }

    return (
        <>
            <div>
                <h2 style={{ textAlign: 'center' }}>In SignIn</h2>
            </div>
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button type="button" onClick={handleClick}>Login Test</button>
            </div>
        </>
    );
}

export default SignIn;