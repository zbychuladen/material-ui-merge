import * as React from 'react';
import ListItemTextM from '../ListItemText';

const ListItemText = (props) => <ListItemTextM {...props}>{props.children}</ListItemTextM>;

export default (
  <ListItemText key="1" primary="Brunch this weekend?" />
);