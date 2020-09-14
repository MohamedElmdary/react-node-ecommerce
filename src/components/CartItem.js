import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import './CartItem.scss';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import CartController from '../classes/cartController';

function CartItem({ count, product, setCart }) {
    const { image, title, price, salePrice } = product;

    return (
        <div className="cartitem">
            <div className="cartitem__left">
                <div className="cartitem__image">
                    <img src={image} alt={title} />
                </div>
                <div>
                    <Typography component="h6" variant="subtitle1">
                        {title}
                    </Typography>
                    <Typography component="p" variant="caption">
                        {salePrice || price}$
                    </Typography>
                </div>
            </div>
            <div>
                <ButtonGroup variant="contained" color="primary" size="small">
                    <Button
                        onClick={() => {
                            setCart(CartController.merge(product));
                        }}
                    >
                        <AddIcon />
                    </Button>
                    <Button disabled>{count}</Button>
                    <Button
                        onClick={() => {
                            setCart(CartController.merge(product, false));
                        }}
                    >
                        <RemoveIcon />
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    );
}

export default CartItem;
