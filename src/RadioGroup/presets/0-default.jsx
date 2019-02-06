import * as React from "react";
import RadioGroup from "../RadioGroup";
import FormControl from "../../FormControl/FormControl";
import FormControlLabel from "../../FormControlLabel/FormControlLabel";
import FormLabel from "../../FormLabel/FormLabel";

export default (
  <FormControl component="fieldset" uxpId="1">
    <FormLabel component="legend" uxpId="2">Favorite Band</FormLabel>
    <RadioGroup uxpId="3">
      <FormControlLabel value="black sabbath" control={`<Radio />`} label="Black Sabbath" uxpId="4" />
      <FormControlLabel value="led zeppelin" control={`<Radio />`} label="Led Zeppelin" uxpId="5" />
      <FormControlLabel value="pink floyd" control={`<Radio />`} label="Pink Floyd" uxpId="6" />
    </RadioGroup>
  </FormControl>
);