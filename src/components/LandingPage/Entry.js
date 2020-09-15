import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { VIDEO_URL } from '../../configs/constants';
const mobile = require('../../assets/images/mobile.png');

function Entry({ history }) {
    return (
        <div className="landing__video">
            <video autoPlay loop src={VIDEO_URL}></video>
            <div className="landing__video__content">
                <Grid container spacing={3}>
                    <Grid item md={8}>
                        <div className="landing__video__content__details">
                            <Typography
                                component="h1"
                                color="primary"
                                variant="h2"
                            >
                                Easy Shopping,
                            </Typography>
                            <Typography component="p" variant="subtitle1">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quidem autem repellendus iste
                                nihil, soluta odio nemo esse ex cumque dolorum
                                quo, aut corrupti accusamus voluptatum veritatis
                                nulla molestias
                            </Typography>
                            <div className="landing__video__content__actions">
                                <Button
                                    color="primary"
                                    variant="contained"
                                    onClick={() => history.push('/login')}
                                >
                                    Login
                                </Button>
                                <Button
                                    color="secondary"
                                    variant="outlined"
                                    onClick={() => history.push('/register')}
                                >
                                    Register
                                </Button>
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={4}>
                        <div className="landing__video__content__image">
                            <img src={mobile} alt="product preview" />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Entry;
