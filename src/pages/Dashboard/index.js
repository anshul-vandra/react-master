import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.scss';

const Dashboard = () => {

    return (
        <>
            <p className="anshul">Dashboard </p>

            <br />

            <Link to="/my-account">My Account</Link>
        </>
    );
}

export default Dashboard;