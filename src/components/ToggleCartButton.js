import React from 'react';
import Button from '@material-ui/core/Button';
import CartIcon from '@material-ui/icons/ShoppingCart';
import RemoveCartIcon from '@material-ui/icons/RemoveShoppingCart';
import CartController from '../classes/cartController';

function ToggleCartButton({ cart, setCart, product }) {
    const { id } = product;
    const itemInCart = cart.reduce((res, { product }) => {
        return res || product.id === id;
    }, false);
    const startIcon = itemInCart ? <RemoveCartIcon /> : <CartIcon />;
    const onClick = (e) => {
        e.stopPropagation();
        if (itemInCart) {
            setCart(CartController.remove(product));
        } else {
            setCart(CartController.merge(product));
        }
    };

    return (
        <Button
            size="small"
            variant="outlined"
            color="primary"
            {...{ startIcon, onClick }}
        >
            {itemInCart ? `Remove` : 'Add'}
        </Button>
    );
}

export default ToggleCartButton;
