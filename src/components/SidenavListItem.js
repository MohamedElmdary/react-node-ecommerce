import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import SidenavList from './SidenavList';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';

function SidenavListItem({ type, title, slug, children, level }) {
    const [open, setOpen] = useState(false);
    const button = !!(children && children.length);
    const onClick = button
        ? () => {
              setOpen(!open);
          }
        : undefined;
    // () => {
    //       console.log(type, slug);
    //   };

    return (
        <>
            <ListItem
                {...{ button: true, onClick }}
                style={{
                    paddingLeft: `${20 * (level + 1)}px`,
                }}
            >
                <ListItemText
                    primary={title}
                    style={{
                        textTransform: level === 0 ? 'uppercase' : 'none',
                    }}
                />
                {button ? open ? <ExpandLess /> : <ExpandMore /> : null}
            </ListItem>
            <Collapse in={open}>
                <List>
                    <SidenavList
                        links={(children || []).map((link) => {
                            link.type = type;
                            return link;
                        })}
                        level={level + 1}
                    />
                </List>
            </Collapse>
            {level === 0 ? <Divider /> : null}
        </>
    );
}

export default SidenavListItem;
