import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PRODUCTS_URL } from '../configs/constants';
import CircularProgress from '@material-ui/core/CircularProgress';
import Product from '../components/Product';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function Products({ match: { params } }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const { type, category } = params;

    useEffect(() => {
        setLoading(true);
        axios
            .get(`${PRODUCTS_URL}/${type}/${category}`)
            .then(({ data }) => {
                setProducts(data);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [type, category]);

    let productsResult = (
        <div
            style={{
                display: 'flex',
                height: '100%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <CircularProgress />
        </div>
    );

    if (!loading) {
        if (products.length) {
            productsResult = (
                <>
                    <Typography
                        variant="h4"
                        component="h2"
                        style={{
                            marginBottom: '30px',
                        }}
                    >
                        <span style={{ textTransform: 'uppercase' }}>
                            {type}
                        </span>{' '}
                        &gt;{' '}
                        <span style={{ textTransform: 'capitalize' }}>
                            {category}
                        </span>
                    </Typography>
                    <Grid container spacing={3} alignItems="stretch">
                        {products.map((product) => {
                            return (
                                <Product key={product.id} {...{ product }} />
                            );
                        })}
                    </Grid>
                </>
            );
        } else {
            productsResult = (
                <div>
                    <p>No Products Were Found.</p>
                </div>
            );
        }
    }

    return productsResult;
}

export default Products;
