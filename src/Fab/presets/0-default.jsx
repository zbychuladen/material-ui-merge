import * as React from 'react';
import FabM from '../Fab';
import IconM from '../../Icon/Icon';

const Fab = (props) => <FabM {...props}>{props.children}</FabM>;
const Icon = (props) => <IconM {...props}>{props.children}</IconM>;

export default (
  <Fab key="1">
    <Icon>navigation</Icon>
    Extended
  </Fab>
);