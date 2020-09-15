import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CategoryTree from './CategoryTree';
import Divider from '@material-ui/core/Divider';

function Categories({ links, history }) {
    const keys = Object.keys(links || {});
    const trees = [[], [], []];

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];

        trees[!i ? 0 : 1 + (i % 2)].push({
            type: key,
            title: key,
            children: links[key],
        });
    }

    return (
        <div className="landing__categories">
            <Typography component="h2" variant="h3">
                Our Categories
            </Typography>
            <Grid container spacing={3}>
                {trees.map((tree, i) => {
                    console.log('title', tree.title);
                    return tree.length ? (
                        <Grid item sm={4} xs={6} key={i}>
                            <CategoryTree {...{ tree, history }} />
                        </Grid>
                    ) : null;
                })}
            </Grid>
            <Divider />
        </div>
    );
}

export default Categories;
