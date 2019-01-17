import * as React from "react";
import FormGroup from "../FormGroup";
import FormControlLabel from "../../FormControlLabel/FormControlLabel";
import FormControl from "../../FormControl/FormControl";
import FormLabel from "../../FormLabel/FormLabel";

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
