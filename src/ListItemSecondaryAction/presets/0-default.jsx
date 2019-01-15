import * as React from 'react';
import ListItemSecondaryActionM from '../ListItemSecondaryAction';
import CheckboxM from '../../Checkbox/Checkbox';

const ListItemSecondaryAction = (props) => <ListItemSecondaryActionM {...props}>{props.children}</ListItemSecondaryActionM>;
const Checkbox = (props) => <CheckboxM {...props} />;

export default (
  <ListItemSecondaryAction key="1">
      <Checkbox key="1.1" />  
  </ListItemSecondaryAction>
);