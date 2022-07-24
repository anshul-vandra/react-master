import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { dummyLogin } from '../../actions/auth';
import './signin.scss';

const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        dispatch(dummyLogin());

        navigate('/dashboard');
    }

    return (
        <>
            In SignIn <br />
            <button type="button" onClick={handleClick}>Login Test</button>
        </>
    );
}

export default SignIn;