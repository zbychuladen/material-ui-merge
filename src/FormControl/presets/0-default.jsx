import * as React from "react";
import FormControl from "../FormControl";
import Select from "../../Select/Select";
import MenuItem from "../../MenuItem/MenuItem";
import InputLabel from "../../InputLabel/InputLabel";
import FormHelperText from "../../FormHelperText/FormHelperText";

export default (
  <FormControl key="1" fullWidth>
    <InputLabel htmlFor="age-helper" key="2">
      Age
    </InputLabel>
    <Select key="3">
      <MenuItem value="" key="3.1.1">
        <em key="4">None</em>
      </MenuItem>
      <MenuItem value={10} key="3.1.2">
        Ten
      </MenuItem>
      <MenuItem value={20} key="3.1.3">
        Twenty
      </MenuItem>
      <MenuItem value={30} key="3.1.4">
        Thirty
      </MenuItem>
    </Select>
    <FormHelperText key="3.2">Some important helper text</FormHelperText>
  </FormControl>
);
