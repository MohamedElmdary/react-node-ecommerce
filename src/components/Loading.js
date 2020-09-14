import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

function Loading() {
    return (
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
}

export default Loading;
