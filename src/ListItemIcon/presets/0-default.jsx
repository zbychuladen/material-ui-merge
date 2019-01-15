import * as React from 'react';
import ListItemIconM from '../ListItemIcon';
import IconM from '../../Icon/Icon';

const ListItemIcon = (props) => <ListItemIconM {...props}>{props.children}</ListItemIconM>;
const Icon = (props) => <IconM {...props}>{props.children}</IconM>;

export default (
  <ListItemIcon key="1">
      <Icon key="1.1">inbox</Icon>  
  </ListItemIcon>
);