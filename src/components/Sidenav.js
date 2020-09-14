import React from 'react';
import List from '@material-ui/core/List';
import CircularProgress from '@material-ui/core/CircularProgress';

/* icons */
import SidenavList from './SidenavList';

function Sidenav({ links }) {
    let children = (
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
    if (links) {
        children = (
            <List>
                <SidenavList
                    links={Object.keys(links).map((key) => {
                        return { type: key, title: key, children: links[key] };
                    })}
                />
            </List>
        );
    }

    return children;
}

export default Sidenav;
