import React from "react";
import {
  Button,
  Input,
  FormGroup,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap";
import { Link } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createSettlement } from "../../actions/getSettlement.js";
import { createSurvivor } from "../../actions/getSurvivor.js";
import Header from "../../components/Header/Header";
import Icon from "../../components/Icon/Icon";
import Widget from "../../components/Widget/Widget";
import WidgetFooter from "../../components/Widget/WidgetFooter";
import { browserHistory } from "react-router";

class Settlements extends React.Component {
  constructor(props) {
    super(props);

    this.handleCreate = this.handleCreate.bind(this);
    this.randomName = this.randomName.bind(this);
    this.state = {
      name: "",
      gender: "F"
    };
  }
  randomName() {
    const names = ["Petra", "Palenque", "Teotihuacan", "Tiwanaku", "Timgad"];
    const random = names[Math.floor(Math.random() * names.length)];
    this.setState({
      name: random
    });
  }
  handleCreate(e) {
    e.preventDefault();
    let settlementId = window.location.pathname.split("/")[2];
    createSurvivor(settlementId, this.state)
      .then(res => {
        browserHistory.goBack();
      })
      .catch(err => {
        console.warn("err", err);
      });
  }
  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }
  handleGenderChange(e) {
    this.setState({
      gender: e.target.value
    });
  }
  renderCreate() {
    if (this.state.name.length > 0) {
      return (
        <Link to={"./"} onClick={this.handleCreate} className="header-action">
          <Icon name={"check"} color="yellow" />
        </Link>
      );
    }
    return (
      <span className="header-action">
        <Icon name={"check"} />
      </span>
    );
  }
  render() {
    return (
      <div>
        <Header name={"Create Survivor"} showBack>
          {this.renderCreate()}
        </Header>
        <div className="layout">
          <form onSubmit={this.handleCreate}>
            <legend>Create Survivor</legend>
            <Widget>
              <Input
                value={this.state.name}
                type="text"
                name="name"
                placeholder="Enter survivor name..."
                size="sm"
                autoFocus
                required
                onChange={this.handleNameChange.bind(this)}
              />
              <WidgetFooter>
                <Button color="gray" size="sm" onClick={this.randomName}>
                  Randomize Name
                </Button>
                <Input
                  type="select"
                  value={this.state.gender}
                  size="sm"
                  onChange={this.handleGenderChange.bind(this)}
                >
                  <option value="F">Female</option>
                  <option value="M">Male</option>
                </Input>
              </WidgetFooter>
            </Widget>
          </form>
        </div>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return { homeData: state.homeData };
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      createSettlement: createSettlement
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(Settlements);
