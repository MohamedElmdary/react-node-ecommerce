import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div>
            <h1>landing page</h1>
            <Link to="/login">Login</Link>

            <Link to="/register">register</Link>

            <Link to="/grocery/meat">shopping</Link>
        </div>
    );
}

export default LandingPage;
