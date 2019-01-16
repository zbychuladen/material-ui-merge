import * as React from "react";
import GridListM from "../GridList";
import GridListTileM from "../../GridListTile/GridListTile";
import GridListTileBarM from "../../GridListTileBar/GridListTileBar";
import Image from "../../Image/Image";

const GridList = props => <GridListM {...props}>{props.children}</GridListM>;
const GridListTile = props => (
  <GridListTileM {...props}>{props.children}</GridListTileM>
);
const GridListTileBar = props => <GridListTileBarM {...props} />;

export default (
  <GridList cellHeight={160} cols={3} key="1">
    <GridListTile cols={1} key="1.1">
      <Image src="http://uxpin.com/images/homepage/about-us/location-gdynia.jpg" alt="Gdynia" key="1.1.1" />
      <GridListTileBar
        key="1.1.2"
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
    <GridListTile cols={2} key="1.2">
      <Image src="http://uxpin.com/images/homepage/jobs/bg-gdansk.jpg" alt="Gdansk" key="1.2.1" />
      <GridListTileBar
        key="1.2.2"
        title="Gdansk"
        titlePosition="top"
        actionIcon={
          `<Icon>
           star_border
          </Icon>`
        }
        actionPosition="left"
      />
    </GridListTile>
    <GridListTile cols={3} key="1.3">
      <Image key="1.3.1" src="http://uxpin.com/images/homepage/about-us/location-mountain-view.jpg" alt="Mountain View" />
      <GridListTileBar
        key="1.3.2"
        title="Mountain View"
        titlePosition="top"
        actionIcon={
          `<Icon>
           star_border
          </Icon>`
        }
        actionPosition="left"
      />
    </GridListTile>
  </GridList>
);
