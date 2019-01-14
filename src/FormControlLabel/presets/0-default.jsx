import * as React from "react";
import FormControlLabelM from "../../FormControlLabel/FormControlLabel";
import CheckboxM from "../../Checkbox/Checkbox"

const Checkbox = (props) => <CheckboxM {...props} />;

export default (
  <FormControlLabelM
    key="1"
    control={
      `<Checkbox
        value="gilad"
      />`
    }
    label="Gilad Gray"
  />
);
