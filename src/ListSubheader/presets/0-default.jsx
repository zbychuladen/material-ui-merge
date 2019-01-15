import * as React from 'react';
import ListSubheaderM from '../ListSubheader';

const ListSubheader = (props) => <ListSubheaderM {...props}>{props.children}</ListSubheaderM>;

export default (
  <ListSubheader key="1">Settings</ListSubheader>
);