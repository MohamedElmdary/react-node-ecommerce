import React from 'react';
import './LandingPage.scss';

import Entry from '../components/LandingPage/Entry';
import AboutUs from '../components/LandingPage/AboutUs';

// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import AboutUsItem from '../components/LandingPage/AboutusItem';

function LandingPage({ history, links }) {
    console.log(links);

    return (
        <div className="landing">
            <Entry {...{ history }} />
            <AboutUs />
        </div>
    );
}

export default LandingPage;
