import React, { useState, useCallback, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import axios from 'axios';

import Header from './components/Header';
import Sidenav from './components/Sidenav';
import { CATEGORIES_URL } from './configs/constants';
import { DRAWER_WIDTH } from './configs/constants';
import { Route, Switch, Redirect } from 'react-router-dom';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: DRAWER_WIDTH,
        flexShrink: 0,
    },
    drawerPaper: {
        width: DRAWER_WIDTH,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -DRAWER_WIDTH,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

function Home() {
    const isSmall = useMediaQuery('(max-width: 768px)');
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    const [links, setLinks] = useState(null);

    const toggleDrawer = useCallback(() => {
        setOpen(!open);
    }, [open]);

    const closeDrawer = useCallback(() => {
        if (isSmall) {
            setOpen(false);
        }
        // eslint-disable-next-line
    }, [isSmall]);

    useEffect(() => {
        axios.get(CATEGORIES_URL).then((categories) => {
            setLinks(categories.data);
        });
    }, []);

    useEffect(() => {
        if (isSmall && open) {
            setOpen(false);
        } else if (!isSmall && !open) {
            setOpen(true);
        }
        // eslint-disable-next-line
    }, [isSmall]);

    return (
        <div className={classes.root}>
            <Header {...{ open, toggleDrawer, isSmall }} />
            <Drawer
                className={classes.drawer}
                variant={isSmall ? 'temporary' : 'persistent'}
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
                onClose={() => {
                    setOpen(false);
                }}
            >
                <Sidenav {...{ links, closeDrawer }} />
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
                style={{
                    marginLeft: isSmall ? 0 : undefined,
                }}
            >
                <div className={classes.drawerHeader} />
                <Switch>
                    <Route path="/:type/:category" exact component={Products} />
                    <Route
                        path="/:type/:category/:id"
                        exact
                        component={ProductDetails}
                    />
                    <Redirect to="/grocery/fruits" />
                </Switch>
            </main>
        </div>
    );
}

export default Home;
