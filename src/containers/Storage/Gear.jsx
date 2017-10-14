import React from "react";
import { Button } from "reactstrap";
import Widget from "../../components/Widget/Widget";

class Gear extends React.Component {
  render() {
    return (
      <div className="layout layout--gear">
        <Button color="light" block>
          Add Gear
        </Button>
        <Button color="danger" block>
          Archive Gear
        </Button>
        <Widget title="Starting Gear" className="grid-2">
          <ul>
            <li>Founding Stone x3</li>
          </ul>
        </Widget>
        <Widget title="Bone Smith" className="grid-2">
          <ul>
            <li>Bone Dagger x1</li>
          </ul>
        </Widget>
        <Widget title="Organ Grinder" className="grid-2">
          <ul>
            <li>Monster Grease x4</li>
          </ul>
        </Widget>
      </div>
    );
  }
}

export default Gear;
