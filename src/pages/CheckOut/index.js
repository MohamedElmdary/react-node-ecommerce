import React, { Fragment } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import './CheckOut.scss';

function CheckOut({ cart, history }) {
    const { list, totalPrice } = cart.reduce(
        (result, { count, product }) => {
            const { id, title, price, salePrice } = product;
            const finalPrice = salePrice || price;

            result.list.push(
                <Fragment key={id}>
                    <ListItem>
                        <ListItemText
                            style={{
                                marginRight: '15px',
                            }}
                        >
                            <Typography component="span" variant="body1">
                                {count}
                            </Typography>
                            <Typography component="span" variant="body2">
                                {' x ' + title}
                            </Typography>
                        </ListItemText>
                        <ListItemSecondaryAction>
                            <Typography component="h6" variant="subtitle1">
                                {(count * finalPrice).toFixed(2)}$
                            </Typography>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                </Fragment>
            );
            result.totalPrice += finalPrice * count;

            return result;
        },
        { list: [], totalPrice: 0 }
    );

    return (
        <div className="checkout">
            <Typography component="h1" variant="h2">
                Check Out
            </Typography>
            <div className="checkout__container">
                <Card className="checkout__container__inner">
                    <List>{list}</List>
                    <List>
                        <ListItem>
                            <ListItemText>Total Price</ListItemText>
                            <ListItemSecondaryAction>
                                <Typography component="h4" variant="h6">
                                    {totalPrice.toFixed(2).replace('.00', '')}$
                                </Typography>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                </Card>
                <div className="checkout__actions">
                    <Button
                        onClick={() => {
                            history.push('/register');
                        }}
                        size="large"
                        color="primary"
                        variant="contained"
                    >
                        Order Now
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default CheckOut;
