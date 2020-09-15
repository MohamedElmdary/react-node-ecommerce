import React from 'react';
import './LandingPage.scss';

import Entry from '../components/LandingPage/Entry';
import AboutUs from '../components/LandingPage/AboutUs';
import Categories from '../components/LandingPage/Categories';

// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import AboutUsItem from '../components/LandingPage/AboutusItem';

function LandingPage({ history, links }) {
    return (
        <div className="landing">
            <Entry {...{ history }} />
            <AboutUs />
            <Categories {...{ links }} />
        </div>
    );
}

export default LandingPage;
