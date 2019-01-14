import * as React from "react";
import CollapseM from "../Collapse";
import TypographyM from "../../Typography/Typography";

const Typography = (props) => <TypographyM {...props}>{props.children}</TypographyM>;

export default (
  <CollapseM key="1">
    <Typography key="2" paragraph>Method:</Typography>
    <Typography key="3" paragraph>
      Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
      aside for 10 minutes.
    </Typography>
  </CollapseM>
);
