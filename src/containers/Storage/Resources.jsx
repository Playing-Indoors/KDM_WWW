import React from "react";
import { Button, Col, Row } from "reactstrap";
import Widget from "../../components/Widget/Widget";

class Resources extends React.Component {
  render() {
    return (
      <div className="layout layout--resources">
        <Widget title="Bone">3</Widget>
        <Widget title="Hide">13</Widget>
        <Widget title="Organ">3</Widget>
        <Widget title="Scrap">3</Widget>
        <Widget title="Consumable">13</Widget>
        <Widget title="Flower">3</Widget>
        <Widget title="Herb">3</Widget>
        <Widget title="Iron">13</Widget>
        <Widget title="Silk">3</Widget>
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
