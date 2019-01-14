import * as React from 'react';
import FormControlM from '../FormControl';
import SelectM from '../../Select/Select';
import MenuItemM from '../../MenuItem/MenuItem';
import InputLabelM from '../../InputLabel/InputLabel';
import FormHelperTextM from '../../FormHelperText/FormHelperText';

const Select = (props) => <SelectM {...props}>{props.children}</SelectM>;
const MenuItem = (props) => <MenuItemM {...props}>{props.children}</MenuItemM>
const InputLabel = (props) => <InputLabelM {...props}>{props.children}</InputLabelM>
const FormHelperText = (props) => <FormHelperTextM {...props}>{props.children}</FormHelperTextM>

export default (
  <FormControlM key="1" fullWidth>
    <InputLabel htmlFor="age-helper" key="2">Age</InputLabel>
          <Select
            key="3"
          >
            <MenuItem value="" key="3.1.1"><em key="4">None</em></MenuItem>
            <MenuItem value={10} key="3.1.2">Ten</MenuItem>
            <MenuItem value={20} key="3.1.3">Twenty</MenuItem>
            <MenuItem value={30} key="3.1.4">Thirty</MenuItem>
          </Select>
          <FormHelperText key="3.2">Some important helper text</FormHelperText>
  </FormControlM>
);