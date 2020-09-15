import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CategoryTree from './CategoryTree';

function Categories({ links }) {
    const keys = Object.keys(links || {});
    const trees = [[], [], []];

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (i === 0) {
            trees[0].push({
                title: key,
                children: links[key],
            });
        } else {
            trees[1 + (i % 2)].push({
                title: key,
                children: links[key],
            });
        }
    }

    console.log(trees);

    return (
        <div className="landing__categories">
            <Typography component="h2" variant="h3">
                Our Categories
            </Typography>
            <Grid container spacing={3}>
                {trees.map((tree, i) =>
                    tree.length ? (
                        <Grid item sm={4} xs={6} key={i}>
                            <CategoryTree {...{ tree }} />
                        </Grid>
                    ) : null
                )}
            </Grid>
        </div>
    );
}

export default Categories;
