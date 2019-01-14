import * as React from 'react';
import IconButtonM from '../IconButton';
import IconM from '../../Icon/Icon';

const Icon = (props) => <IconM {...props}>{props.children}</IconM>;

export default (
  <IconButtonM key="1">
    <Icon key="2">home</Icon>
  </IconButtonM>
);