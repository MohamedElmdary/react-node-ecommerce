import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import './Register.scss';
import { Link } from 'react-router-dom';
import useFormInput from '../hooks/useFormInput';
import registerForm from '../configs/registerForm';

function Register() {
    const username = useFormInput(...registerForm.username);
    const email = useFormInput(...registerForm.email);
    const phone = useFormInput(...registerForm.phone);
    const password = useFormInput(...registerForm.password);

    const onSubmit = (e) => {
        e.preventDefault();
        const inputs = [username, email, phone, password];
        for (let i = 0; i < inputs.length; i++) {
            const inp = inputs[i];
            if (inp.error) {
                inp.ref.current.focus();
                return;
            }
        }

        alert('data submited please check console logs');
        const data = inputs.reduce((res, { name, value }) => {
            res[name] = value;
            return res;
        }, {});
        console.log('Register Data', data);
    };

    return (
        <Grid container spacing={3} justify="center">
            <Grid item lg={6} md={8} sm={10} xs={12} className="register">
                <Card className="register__container">
                    <div className="register__title">
                        <Typography component="h1" variant="h3">
                            Register
                        </Typography>
                    </div>
                    <form {...{ onSubmit }}>
                        <TextField
                            type="text"
                            className="form-control-item"
                            variant="outlined"
                            label="Username"
                            required
                            {...username}
                        />
                        <TextField
                            type="email"
                            className="form-control-item"
                            variant="outlined"
                            label="Email Address"
                            required
                            {...email}
                        />
                        <TextField
                            type="text"
                            className="form-control-item"
                            variant="outlined"
                            label="Phone"
                            required
                            {...phone}
                        />
                        <TextField
                            type="password"
                            className="form-control-item"
                            variant="outlined"
                            label="Password"
                            required
                            {...password}
                        />
                        <div className="register__actions">
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Register
                            </Button>
                        </div>
                    </form>
                    <br />
                    <Divider />
                    <div>
                        <Link to="/login" className="register__register">
                            Already registered ?
                        </Link>
                    </div>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Register;
