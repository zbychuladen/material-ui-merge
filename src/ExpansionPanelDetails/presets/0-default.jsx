import * as React from "react";
import ExpansionPanelDetailsM from "../../ExpansionPanelDetails/ExpansionPanelDetails";
import TypographyM from "../../Typography/Typography";

const ExpansionPanelDetails = (props) => <ExpansionPanelDetailsM {...props}>{props.children}</ExpansionPanelDetailsM>;
const Typography = (props) => <TypographyM {...props}>{props.children}</TypographyM>;

export default (
    <ExpansionPanelDetails key="4">
      <Typography key="5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </Typography>
    </ExpansionPanelDetails>
);
