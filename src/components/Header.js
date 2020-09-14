import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { DRAWER_WIDTH } from '../configs/constants';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import CartItem from './CartItem';

const useStyles = makeStyles((theme) => ({
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        marginLeft: DRAWER_WIDTH,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

function Header({ open, toggleDrawer, isSmall, cart, setCart, showDrawer }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width: 550px)');

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const fullPrice = cart
        .reduce((total, { count, product }) => {
            const { price, salePrice } = product;
            return total + count * (salePrice || price);
        }, 0)
        .toFixed(2);

    return (
        <AppBar
            position="fixed"
            className={
                isSmall
                    ? clsx(classes.appBar)
                    : clsx(classes.appBar, {
                          [classes.appBarShift]: showDrawer && open,
                      })
            }
        >
            <Toolbar>
                {showDrawer ? (
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        edge="start"
                        className={clsx(classes.menuButton)}
                    >
                        {open ? <CloseIcon /> : <MenuIcon />}
                    </IconButton>
                ) : null}
                <Typography
                    variant="h6"
                    noWrap
                    style={{ textTransform: 'uppercase' }}
                >
                    easy shopping
                </Typography>
                {showDrawer ? (
                    <IconButton
                        style={{ marginLeft: 'auto' }}
                        color="inherit"
                        onClick={handleClick}
                        className={clsx(classes.menuButton)}
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                    >
                        <CartIcon />
                    </IconButton>
                ) : null}
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    PaperProps={{
                        style: {
                            minWidth: isMobile ? 'calc(100% - 30px)' : '500px',
                            maxHeight: 'calc(100vh - 30px)',
                        },
                    }}
                >
                    {cart && cart.length ? (
                        cart.map(({ count, product }) => {
                            return (
                                <MenuItem
                                    key={product.id}
                                    button={false}
                                    style={{ outline: 'none' }}
                                >
                                    <CartItem
                                        {...{ count, product, setCart }}
                                    />
                                </MenuItem>
                            );
                        })
                    ) : (
                        <MenuItem button={false} style={{ outline: 'none' }}>
                            <p style={{ textAlign: 'center', width: '100%' }}>
                                Please Add Products To Yor Cart.
                            </p>
                        </MenuItem>
                    )}
                    <Divider />
                    <MenuItem
                        button={false}
                        style={{
                            outline: 'none',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Button
                            style={{
                                width: '100%',
                            }}
                            color="primary"
                            size="large"
                            onClick={() => {
                                setAnchorEl(null);
                                console.log('should checkout');
                            }}
                        >
                            Checkout - {fullPrice}$
                        </Button>
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
