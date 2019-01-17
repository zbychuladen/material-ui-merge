import * as React from "react";
import RadioGroup from "../RadioGroup";
import FormControl from "../../FormControl/FormControl";
import FormControlLabel from "../../FormControlLabel/FormControlLabel";
import FormLabel from "../../FormLabel/FormLabel";

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