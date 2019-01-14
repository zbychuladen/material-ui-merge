import * as React from "react";
import RadioGroupM from "../RadioGroup";
import FormControlM from "../../FormControl/FormControl";
import FormControlLabelM from "../../FormControlLabel/FormControlLabel";
import FormLabelM from "../../FormLabel/FormLabel";

const RadioGroup = (props) => <RadioGroupM {...props}>{props.children}</RadioGroupM>;
const FormControl = (props) => <FormControlM {...props}>{props.children}</FormControlM>;
const FormControlLabel = (props) => <FormControlLabelM {...props}>{props.children}</FormControlLabelM>;
const FormLabel = (props) => <FormLabelM {...props}>{props.children}</FormLabelM>;


export default (
  <FormControl component="fieldset" key="1">
    <FormLabel component="legend" key="2">Favorite Band</FormLabel>
    <RadioGroup key="3">
      <FormControlLabel value="black sabbath" control={`<Radio />`} label="Black Sabbath" key="4" />
      <FormControlLabel value="led zeppelin" control={`<Radio />`} label="Led Zeppelin" key="5" />
      <FormControlLabel value="pink floyd" control={`<Radio />`} label="Pink Floyd" key="6" />
    </RadioGroup>
  </FormControl>
);
