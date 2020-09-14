import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import SidenavList from './SidenavList';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import { useHistory, useLocation } from 'react-router-dom';
import './SidenavListItem.scss';

function SidenavListItem({ type, title, slug, children, level }) {
    const history = useHistory();
    const location = useLocation();

    const [open, setOpen] = useState(false);
    const button = !!(children && children.length);
    const onClick = button
        ? () => {
              setOpen(!open);
          }
        : () => {
              history.push(`/${type}/${slug}`);
          };

    console.log(location.pathname === `/${type}/${slug}`);
    return (
        <>
            <ListItem
                {...{ button: true, onClick }}
                style={{
                    paddingLeft: `${20 * (level + 1)}px`,
                }}
                className={
                    button
                        ? undefined
                        : location.pathname === `/${type}/${slug}`
                        ? 'active__list__item'
                        : undefined
                }
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
