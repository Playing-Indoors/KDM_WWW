import React from "react";
import { Button, Col, Row } from "reactstrap";
import Widget from "../../components/Widget/Widget";

class Gear extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <Button color="light" block>
              Add Gear
            </Button>
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <Widget title="Starting Gear">
              <ul>
                <li>Founding Stone x3</li>
              </ul>
            </Widget>
          </Col>
          <Col>
            <Widget title="Bone Smith">
              <ul>
                <li>Bone Dagger x1</li>
              </ul>
            </Widget>
          </Col>
          <Col>
            <Widget title="Organ Grinder">
              <ul>
                <li>Monster Grease x4</li>
              </ul>
            </Widget>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button color="danger" block>
              Archive Gear
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Gear;
