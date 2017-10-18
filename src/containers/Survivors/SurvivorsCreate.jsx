import React from "react";
import {
  Button,
  Input,
  FormGroup,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  ButtonGroup
} from "reactstrap";
import { Link } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getSettlement } from "../../actions/getSettlement.js";
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
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.state = {
      name: "",
      gender: "F"
    };
  }
  randomName() {
    const names = [
      "Livio",
      "Skrolan",
      "Stone",
      "Stanwick",
      "Deston",
      "Severinus",
      "Tedric",
      "Trent",
      "Marsdon",
      "Casey",
      "Red",
      "Matze",
      "Marlow",
      "Pirmin",
      "Asterios",
      "Whitby",
      "Arden",
      "Launcelot",
      "Donald",
      "Edo",
      "Asteria",
      "Evelia",
      "Serilda",
      "Binia",
      "Mechthilde",
      "Marvelle",
      "Poppy",
      "Kyla",
      "Nikki",
      "Manuella"
    ];
    const random = names[Math.floor(Math.random() * names.length)];
    this.setState({
      name: random
    });
  }
  handleCreate(e) {
    e.preventDefault();
    const settlementId = window.location.pathname.split("/")[2];
    createSurvivor(settlementId, this.state)
      .then(() => {
        this.props.getSettlement();
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
  // renderCreate() {
  //   if (this.state.name.length > 0) {
  //     return (
  //       <Link to={"./"} onClick={this.handleCreate} className="header-action">
  //         <Icon name={"check"} color="yellow" />
  //       </Link>
  //     );
  //   }
  //   return (
  //     <span className="header-action">
  //       <Icon name={"check"} />
  //     </span>
  //   );
  // }
  render() {
    return (
      <div>
        <Header name={"Create Survivor"} />
        <form className="layout" onSubmit={this.handleCreate}>
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
              onChange={this.handleNameChange}
            />
            <WidgetFooter>
              <Button color="gray" size="sm" onClick={this.randomName}>
                Randomize Name
              </Button>
              <Input
                type="select"
                value={this.state.gender}
                size="sm"
                onChange={this.handleGenderChange}
              >
                <option value="F">Female</option>
                <option value="M">Male</option>
              </Input>
            </WidgetFooter>
          </Widget>
          <Widget>
            <ButtonGroup className="btn-group--full">
              <Button color="gray" block>
                Cancel
              </Button>
              <Button color="primary" block type="submit">
                Create
              </Button>
            </ButtonGroup>
          </Widget>
        </form>
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
      getSettlement: getSettlement
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(Settlements);
