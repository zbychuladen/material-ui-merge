import * as React from "react";
import FormGroupM from "../FormGroup";
import FormControlLabelM from "../../FormControlLabel/FormControlLabel";
import FormControlM from "../../FormControl/FormControl";
import FormLabelM from "../../FormLabel/FormLabel";

const FormControl = (props) => <FormControlM {...props}>{props.children}</FormControlM>;
const FormLabel = (props) => <FormLabelM {...props}>{props.children}</FormLabelM>;
const FormControlLabel = (props) => <FormControlLabelM {...props}>{props.children}</FormControlLabelM>;
const FormGroup = (props) => <FormGroupM {...props}>{props.children}</FormGroupM>;

export default (
  <FormControl component="fieldset" key="1">
    <FormLabel component="legend" key="2">Assign responsibility</FormLabel>
    <FormGroup key="3">
      <FormControlLabel
        key="4"
        control={
          `<Checkbox
            key="5"
            value="gilad"
          />`
        }
        label="Gilad Gray"
      />
      <FormControlLabel
        key="6"
        control={
          `<Checkbox
            key="7"
            value="jason"
          />`
        }
        label="Jason Killian"
      />
      <FormControlLabel
        key="8"
        control={
          `<Checkbox
            key="9"
            value="antoine"
          />`
        }
        label="Antoine Llorca"
      />
    </FormGroup>
  </FormControl>
);
