import React, { useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import './Product.scss';
import ToggleCartButton from './ToggleCartButton';

function Product({ product, type, category, cart, setCart }) {
    const history = useHistory();
    const {
        id,
        image,
        title,
        unit,
        price,
        salePrice,
        discountInPercent,
    } = product;

    const onClick = useCallback(() => {
        history.push(`/${type}/${category}/${id}`);
        // eslint-disable-next-line
    }, [type, category, id]);

    return (
        <Grid item lg={12 / 4} md={12 / 3} sm={12 / 2} xs={12}>
            <Paper className="product" {...{ onClick }}>
                <div className="product__image">
                    {discountInPercent > 0 ? (
                        <div>
                            <Chip
                                size="small"
                                label={discountInPercent + '% OFF'}
                                color="primary"
                            />
                        </div>
                    ) : null}
                    <img src={image} alt={title} style={{ width: '100%' }} />
                </div>
                <div className="product__details">
                    <Typography component="h6">{title}</Typography>
                    <Typography
                        component="p"
                        variant="caption"
                        color="textSecondary"
                    >
                        {unit}
                    </Typography>
                    <div className="product__bottombar">
                        <Grid
                            container
                            justify="space-between"
                            alignItems="center"
                        >
                            <Grid item>
                                <div>
                                    {salePrice > 0 ? (
                                        <div className="product__sale">
                                            <Typography
                                                component="p"
                                                color="textSecondary"
                                            >
                                                ${price}
                                            </Typography>
                                        </div>
                                    ) : null}
                                    <Typography component="p">
                                        ${salePrice > 0 ? salePrice : price}
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item>
                                <ToggleCartButton
                                    {...{ cart, setCart, product }}
                                />
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Paper>
        </Grid>
    );
}

export default Product;
