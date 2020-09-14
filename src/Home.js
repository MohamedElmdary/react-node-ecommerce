import React, { useState, useCallback, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import axios from 'axios';
import Header from './components/Header';
import Sidenav from './components/Sidenav';
import { CATEGORIES_URL } from './configs/constants';
import { DRAWER_WIDTH } from './configs/constants';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CartController from './classes/cartController';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';

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
    const [cart, setCart] = useState([]);
    const { pathname } = useLocation();
    const [showDrawer, setShowDrawer] = useState(false);

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

        setCart(CartController.get());
    }, []);

    useEffect(() => {
        if (isSmall && open) {
            setOpen(false);
        } else if (!isSmall && !open) {
            setOpen(true);
        }

        if (/\/\w+\/\w+(\/\w+)?/.test(pathname)) {
            if (!showDrawer) {
                setShowDrawer(true);
            }
        } else {
            if (showDrawer) {
                setShowDrawer(false);
            }
        }
        // eslint-disable-next-line
    }, [isSmall, pathname]);

    return (
        <div className={classes.root}>
            <Header
                {...{ open, toggleDrawer, isSmall, cart, setCart, showDrawer }}
            />
            <Drawer
                className={classes.drawer}
                variant={isSmall ? 'temporary' : 'persistent'}
                anchor="left"
                open={showDrawer && open}
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
                    [classes.contentShift]: showDrawer && open,
                })}
                style={{
                    marginLeft: isSmall ? 0 : undefined,
                }}
            >
                <div className={classes.drawerHeader} />
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                    <Route
                        path="/:type/:category"
                        exact
                        render={(props) => (
                            <Products {...props} {...{ cart, setCart }} />
                        )}
                    />
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
