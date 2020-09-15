import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import PermDataSettingIcon from '@material-ui/icons/PermDataSetting';

import './AboutusItem.scss';

function AboutUsItem() {
    return (
        <Card className="aboutitem" style={{ padding: '20px' }}>
            <div className="aboutitem__icon">
                <PermDataSettingIcon />
            </div>
            <div className="aboutitem__details">
                <Typography component="h4" variant="h5">
                    Aboutus Title
                </Typography>
                <Typography component="p" variant="subtitle2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem autem repellendus iste nihil, soluta odio nemo esse
                    ex cumque dolorum quo, aut
                </Typography>
            </div>
        </Card>
    );
}

export default AboutUsItem;
