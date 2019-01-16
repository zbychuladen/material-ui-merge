import * as React from "react";
import GridListTileM from "../GridListTile";
import GridListTileBarM from "../../GridListTileBar/GridListTileBar";
import Image from "../../Image/Image";

const GridListTile = props => (
  <GridListTileM {...props}>{props.children}</GridListTileM>
);
const GridListTileBar = props => <GridListTileBarM {...props} />;

export default (
    <GridListTile cols={1} key="1">
      <Image src="http://uxpin.com/images/homepage/about-us/location-gdynia.jpg" alt="Gdynia" key="1.1" />
      <GridListTileBar
        key="2"
        title="Gdynia"
        titlePosition="top"
        actionIcon={
          `<Icon>
           star_border
          </Icon>`
        }
        actionPosition="left"
      />
    </GridListTile>
);
