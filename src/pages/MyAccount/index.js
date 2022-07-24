import React from 'react';
import { Link } from 'react-router-dom';
import './myAccount.scss';

const MyAccount = () => {

    React.useEffect(() => {

        return () => {

        }
    }, [])


    return (
        <>
            <p className="anshul">In MyAccount </p>
            <br />

            <Link to="/dashboard">Dashboard</Link>
        </>
    );
}

export default MyAccount;