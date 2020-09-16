import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PRODUCTS_URL } from '../configs/constants';
import { useLocation, useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Loading from '../components/Loading';
import Divider from '@material-ui/core/Divider';
import GallerySlider from '../components/GallerySlider';
import Grid from '@material-ui/core/Grid';
import ToggleCartButton from '../components/ToggleCartButton';

function ProductDetails({ cart, setCart }) {
    const history = useHistory();
    const { pathname } = useLocation();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(PRODUCTS_URL + pathname)
            .then(({ data }) => {
                if (!data) {
                    console.log('Error', 'Product Not Found!');
                    return history.goBack();
                }
                setProduct(data);
            })
            .catch((err) => {
                console.log('Error', err);
                history.goBack();
            })
            .finally(() => {
                setLoading(false);
            });
        // eslint-disable-next-line
    }, []);

    let productDtails = <Loading />;

    if (!loading) {
        productDtails = (
            <div>
                <Typography component="h1" variant="h3">
                    {product.title}
                </Typography>
                <Typography
                    component="span"
                    variant="subtitle1"
                    color="textSecondary"
                >
                    {product.unit}
                </Typography>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        margin: '20px auto',
                    }}
                >
                    <GallerySlider gallery={product.gallery} />
                </div>
                <div>
                    <Typography component="p">
                        {/* /n */}
                        {product.description}
                    </Typography>
                </div>
                <br />
                <Divider />
                <br />
                <div>
                    <Grid container justify="space-between">
                        <Grid item>
                            <Typography component="p" variant="h6">
                                {/* /n */}
                                Price: {product.salePrice || product.price}$
                            </Typography>
                        </Grid>
                        <Grid item>
                            <ToggleCartButton {...{ cart, setCart, product }} />
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }

    return productDtails;
}

export default ProductDetails;
