import * as React from "react";
import GridListTileBarM from "../../GridListTileBar/GridListTileBar";

const GridListTileBar = props => <GridListTileBarM {...props} />;

export default (
  <GridListTileBar
    title="Gdynia"
    titlePosition="top"
    actionIcon={`<Icon>star_border</Icon>`}
    actionPosition="left"
  />
);
