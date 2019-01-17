import * as React from 'react';
import ListItem from '../ListItem';
import Avatar from '../../Avatar/Avatar';
import ListItemText from '../../ListItemText/ListItemText';
import Icon from '../../Icon/Icon';

export default (
  <ListItem label="Active" key="1">
    <Avatar key="1.1">
      <Icon key="1.1.1">work</Icon>  
    </Avatar>
    <ListItemText primary="Work" secondary="Jan 7, 2014" key="1.2" />
  </ListItem>
);