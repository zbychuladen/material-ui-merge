import * as React from 'react';
import ListItemM from '../ListItem';
import AvatarM from '../../Avatar/Avatar';
import ListItemTextM from '../../ListItemText/ListItemText';
import IconM from '../../Icon/Icon';

const ListItem = (props) => <ListItemM {...props}>{props.children}</ListItemM>;
const Avatar = (props) => <AvatarM {...props}>{props.children}</AvatarM>;
const Icon = (props) => <IconM {...props}>{props.children}</IconM>;
const ListItemText = (props) => <ListItemTextM {...props}>{props.children}</ListItemTextM>

export default (
  <ListItem label="Active" key="1">
    <Avatar key="1.1">
      <Icon key="1.1.1">work</Icon>  
    </Avatar>
    <ListItemText primary="Work" secondary="Jan 7, 2014" key="1.2" />
  </ListItem>
);