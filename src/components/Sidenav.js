import React from 'react';
import List from '@material-ui/core/List';
import Loading from './Loading';
import SidenavList from './SidenavList';

function Sidenav({ links }) {
    let children = <Loading />;
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
