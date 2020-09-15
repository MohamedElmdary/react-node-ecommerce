import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import useFormInput from '../../hooks/useFormInput';
import Button from '@material-ui/core/Button';

import { NAME_REGEX, EMAIL_REGEX } from '../../configs/constants';

function ContactUs() {
    const name = useFormInput(
        'name',
        (value) => NAME_REGEX.test(value),
        'Name is not valid.'
    );

    const email = useFormInput(
        'email',
        (value) => EMAIL_REGEX.test(value),
        'Invalid email format.'
    );

    const msg = useFormInput(
        'message',
        (value) => value.trim().length > 0,
        'Message is required'
    );

    const onSubmit = (e) => {
        e.preventDefault();
        const inputs = [name, email, msg];
        const valid = inputs.reduce((res, { error }) => res && !error, true);
        if (valid) {
            alert('form is valid ... please check data in console');
            const data = inputs.map(({ value }) => value);
            console.log('data', data);
        }
    };

    return (
        <div className="landing__contactus">
            <Typography component="h2" variant="h3">
                Contact Us
            </Typography>
            <Paper variant="outlined" style={{ padding: '15px' }}>
                <form {...{ onSubmit }}>
                    <TextField
                        type="text"
                        className="form-control-item"
                        variant="outlined"
                        label="Your Name"
                        required
                        {...name}
                    />
                    <div style={{ margin: '20px 0' }}>
                        <TextField
                            type="email"
                            className="form-control-item"
                            variant="outlined"
                            label="Email Address"
                            required
                            {...email}
                        />
                    </div>
                    <TextField
                        type="text"
                        className="form-control-item"
                        variant="outlined"
                        label="Message"
                        required
                        multiline
                        rows={5}
                        rowsMax={8}
                        {...msg}
                    />
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '30px',
                        }}
                    >
                        <Button
                            type="submit"
                            color="primary"
                            size="large"
                            variant="outlined"
                        >
                            Send Message
                        </Button>
                    </div>
                </form>
            </Paper>
        </div>
    );
}

export default ContactUs;
