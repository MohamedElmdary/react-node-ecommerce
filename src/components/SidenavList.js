import React, { Fragment } from 'react';
import SidenavListItem from './SidenavListItem';

function SidenavList({ links, closeDrawer, level = 0 }) {
    if (!links || !links.length) {
        return null;
    }

    const list = links.map(({ type, title, children, slug }) => {
        return (
            <Fragment key={title}>
                <SidenavListItem
                    {...{ type, title, children, level, slug, closeDrawer }}
                />
            </Fragment>
        );
    });

    return list;
}

export default SidenavList;
