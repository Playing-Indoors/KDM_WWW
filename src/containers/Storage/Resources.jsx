import React from "react";
import { Button, Col, Row } from "reactstrap";
import Widget from "../../components/Widget/Widget";
import Bone from "./_Bone";
import Hide from "./_Hide";
import Organ from "./_Organ";
import Scrap from "./_Scrap";
import Consumable from "./_Consumable";
import Flower from "./_Flower";
import Herb from "./_Herb";
import Iron from "./_Iron";
import Silk from "./_Silk";

class Resources extends React.Component {
  render() {
    return (
      <div className="layout layout--resources">
        <Bone amount={0} />
        <Hide amount={0} />
        <Organ amount={0} />
        <Scrap amount={0} />
        <Consumable amount={0} />
        <Flower amount={0} />
        <Herb amount={0} />
        <Iron amount={0} />
        <Silk amount={0} />
        <div className="grid-3">
          <Widget title="Basic Resources">
            <ul>
              <li>Skull x2</li>
              <li>Organ x3</li>
              <li>Scrap x1</li>
            </ul>
          </Widget>
        </div>
        <div className="grid-3">
          <Widget title="White Lion Resources">
            <ul>
              <li>Testies x1</li>
            </ul>
          </Widget>
        </div>
        <div className="grid-3">
          <Widget title="Strange Resources">
            <ul>
              <li>Iron x2</li>
            </ul>
          </Widget>
        </div>
        <div className="grid-3">
          <Button color="danger" block>
            Archive Resources
          </Button>
        </div>
      </div>
    );
  }
}

export default Resources;
