import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AboutUsItem from './AboutusItem';

function AboutUs() {
    return (
        <div className="landing__aboutus">
            <Typography component="h2" variant="h3">
                About Us
            </Typography>
            <Grid container spacing={3}>
                {Array(8)
                    .fill(0)
                    .map((_, i) => (
                        <Grid item lg={3} md={4} sm={6} xs={12} key={i}>
                            <AboutUsItem />
                        </Grid>
                    ))}
            </Grid>
        </div>
    );
}

export default AboutUs;
