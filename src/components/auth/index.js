import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AuthGuard = ({ children }) => {
<<<<<<< Updated upstream
    const navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    console.log('isLoggedIn: ', isLoggedIn);
=======
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
>>>>>>> Stashed changes

    useEffect(() => {
        if (!isLoggedIn) navigate('/signin', { replace: true });
    }, [isLoggedIn, navigate])

    return (
        <>
            {children}
        </>
    )
}

export default AuthGuard;