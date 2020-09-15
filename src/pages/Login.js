import React, { useState, useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import './Login.scss';
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
            alert('data submited please check console logs');
            console.log('Login Data', { email, password });
        },
        [email, password]
    );

    return (
        <Grid container spacing={3} justify="center">
            <Grid item lg={6} md={8} sm={10} xs={12} className="login">
                <Card className="login__container">
                    <div className="login__title">
                        <Typography component="h1" variant="h3">
                            Login
                        </Typography>
                    </div>
                    <form {...{ onSubmit }}>
                        <TextField
                            type="email"
                            className="form-control-item"
                            variant="outlined"
                            label="Email Address"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            type="password"
                            className="form-control-item"
                            variant="outlined"
                            label="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="login__actions">
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Login
                            </Button>
                        </div>
                    </form>
                    <br />
                    <Divider />
                    <div>
                        <Link to="/register" className="login__register">
                            Not yet registered ?
                        </Link>
                    </div>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Login;
