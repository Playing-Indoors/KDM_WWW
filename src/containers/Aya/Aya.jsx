import React, { Component } from "react";
import { Link } from "react-router";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  ButtonGroup,
  Row,
  Col
} from "reactstrap";
import AyaColor from "./Aya-Color";
import Stat from "../../components/Stats/Stats";
import DataList from "../../components/DataList/DataList";
import CardList from "../../components/CardList/CardList";
import NumberIncrement from "../../components/NumberIncrement/NumberIncrement";
import SurvivalManage from "../../containers/Survivor/_Survival";
import StatSurvival from "../../containers/StatWidget/StatWidget-Example";
import SurvivalLimit from "../../containers/Settlement/_SurvivalLimit";
import Milestone from "../../components/Milestone/Milestone";
import MilestoneDots from "../../components/MilestoneDots/MilestoneDots";
import Icon from "../../components/Icon/Icon";
import Toggle from "../../components/Toggle/Toggle";
import Widget from "../../components/Widget/Widget";

class Aya extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ayaData: null,
      modal: false,
      activeTab: "1",
      listMeta: [
        {
          name: "Lantern Year",
          value: "5"
        },
        {
          name: "Population",
          value: "15"
        },
        {
          name: "Players",
          value: "3"
        }
      ],
      statXP: {
        name: "Hunt XP",
        amount: 8,
        max: 16,
        min: 0,
        milestones: [
          {
            at: 2,
            name: "Age 1",
            type: "story"
          },
          {
            at: 6,
            name: "Age 2",
            type: "story"
          },
          {
            at: 10,
            name: "Age 3",
            type: "story"
          },
          {
            at: 15,
            name: "Age 4",
            type: "story"
          },
          {
            at: 16,
            name: "Retired",
            type: "story"
          }
        ]
      },
      dataList: ["a", "b", "c"],
      dataList2: ["a", "b", "c"],
      milestone1: [
        {
          handle: "core_bold",
          values: [3]
        },
        {
          handle: "core_see_the_truth",
          values: [9]
        }
      ],
      milestone2: [
        {
          handle: "core_age",
          values: [2, 6, 10, 15]
        }
      ]
    };
    this.toggle = this.toggle.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }
  updateDataList2(list) {
    this.setState({
      dataList2: list
    });
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (
      <div className="page-aya">
        <h1>Style Guide</h1>
        <MilestoneDots />
        <MilestoneDots current={3} count={5} mini />
        <MilestoneDots
          current={0}
          count={9}
          milestones={this.state.milestone1}
        />
        <MilestoneDots
          current={0}
          count={16}
          milestones={this.state.milestone2}
          onlyMilestones
        />
        <h3>DataList</h3>
        <p>Simple list to show data.</p>
        <DataList list={this.state.dataList} />
        <p>With removal</p>
        <DataList
          list={this.state.dataList2}
          updateList={this.updateDataList2}
        />
        <SurvivalLimit amount={5} id={"12345"} />
        <SurvivalManage
          amount={5}
          oid={"5681fa9a421aa939c05496e7"}
          limit={7}
          actions={[{ handle: "dodge", available: true, name: "Dodge" }]}
        />
        {/* <Survival
					amount={5}
					id={this.state.survivor.sheet._id.$oid}
					limit={this.state.settlementData.sheet.survival_limit}
					actions={this.state.survivor.survival_actions}
				/> */}
        <br />
        <h3>Fonts</h3>
        <p>
          We use <a href="https://fonts.google.com/specimen/Ruda">Ruda</a> font
          with a base fontsize of 16px
        </p>
        <h1 className="ayah1">h1</h1>
        <p>Used at the top of pages in the title bar pattern.</p>
        <h2 className="ayah2">h2</h2>
        <p>Used as the heading of the boxes and widgets patterns.</p>
        <br />
        <h3>Colors</h3>
        <br />
        <h4>Brand Colors</h4>
        <AyaColor name="brand-primary" />
        <AyaColor name="body-color" />
        <br />
        <h4>Grays</h4>
        <AyaColor name="gray-dark" />
        <AyaColor name="gray-900" />
        <AyaColor name="gray" />
        <AyaColor name="gray-light" />
        <AyaColor name="gray-lighter" />
        <AyaColor name="gray-lightest" />
        <br />
        <h4>UI</h4>
        <p>
          These are bootstrap default styles. We&lsquo;ll probably use some of
          them but currently there&lsquo;s no place in the ui for them.
        </p>
        <AyaColor name="brand-success" />
        <AyaColor name="brand-info" />
        <AyaColor name="brand-warning" />
        <AyaColor name="brand-danger" />
        <br />
        <br />
        <h3>Buttons</h3>
        <Button color="primary">primary</Button>{" "}
        <Button color="secondary">secondary</Button>{" "}
        <Button color="success">success</Button>{" "}
        <Button color="info">info</Button>{" "}
        <Button color="warning">warning</Button>{" "}
        <Button color="danger">danger</Button>{" "}
        <Button color="link">link</Button>
        <br />
        <br />
        <h3>Icons</h3>
        <Icon name="logo" />
        <Icon name="settlement" />
        <Icon name="faq" />
        <Icon name="log" />
        <Icon name="storage" />
        <Icon name="survivors" />
        <br />
        <br />
        <h3>Toggle</h3>
        <Widget>
          <Toggle label="Automatically add weapon specilization if Innovations include the mastery" />
          <Toggle label="Automatically add weapon specilization if Innovations include the mastery" />
        </Widget>
        <br /> <br />
        <h3>Modal</h3>
        <Button onClick={this.toggleModal}>Toggle Modal</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
          <ModalHeader>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleModal}>
              Do Something
            </Button>
            <Button color="light" onClick={this.toggleModal}>
              Do Something
            </Button>
            <Button color="link" onClick={this.toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <br />
        <br />
        <h2>Patterns</h2>
        <h3>Widget</h3>
        <Widget>A Widget is a container to put things in.</Widget>
        <Widget title="I have a title">
          A Widget is a container to put things in.
        </Widget>
        <Widget title="I am clickable" event="test">
          A Widget is a container to put things in. You can make it into a
          button with the event flag.
        </Widget>
        {/*
				<div className="box">
					<header className="box-header">
						<div className="box-header-title">Box</div>
					</header>
					<div className="box-content">
						A box is a container to put things in
					</div>
				</div>
				<br />

				<div className="box">
					<header className="box-header">
						<div className="box-header-title">Box</div>
					</header>
					<button className="box-content">
						You can make me clickable
					</button>
				</div>*/}
        <br />
        <br />
        <h3>CardList</h3>
        <CardList
          name="Name"
          desc="Description"
          meta={["Lantern Year 4", "Population 15", "Players 3"]}
        />
        <br />
        <br />
        <h3>Stats</h3>
        <p>
          Shows data, supports <em>amount</em>, <em>max</em>, <em>min</em>,{" "}
          <em>milestones</em>, <em>title</em>
        </p>
        <div style={{ width: "200px" }}>
          <Stat
            name={this.state.statXP.name}
            amount={this.state.statXP.amount}
            max={this.state.statXP.max}
            min={this.state.statXP.min}
            milestone={this.state.statXP.milestones}
          />
        </div>
        <br />
        <h4>NumberIncrement</h4>
        <p>Default settings</p>
        <div style={{ width: "200px" }}>
          <NumberIncrement />
        </div>
        <p>Custom name, amount, min(0), max(6)</p>
        <div style={{ width: "200px" }}>
          <NumberIncrement name={"Movement"} amount={5} min={0} max={5} />
        </div>
        <p>Custom display (for armor H and L)</p>
        <div style={{ width: "200px" }}>
          <em>coming soon</em>
        </div>
        <h4>MilestoneDots</h4>
        {/* <MilestoneDots />
        <MilestoneDots current={3} count={5} />
        <MilestoneDots current={3} count={10} milestones={[1, 3, 5, 7, 10]} /> */}
        <h2>Components</h2>
        <h3>Milestones</h3>
        <Milestone /> &lt;Milestone /&gt;<br />
        <Milestone type="default" /> &lt;Milestone type=&quot;default&quot;
        /&gt;<br />
        <Milestone type="defaultEvent" /> &lt;Milestone
        type=&quot;defaultEvent&quot; /&gt;<br />
        <Milestone type="active" /> &lt;Milestone type=&quot;active&quot; /&gt;<br />
        <Milestone type="activeEvent" /> &lt;Milestone
        type=&quot;activeEvent&quot; /&gt;
        <br />
        <br />
        <h3>Stat Box</h3>
        <StatSurvival title="Survival" />
        <br />
        <h4>Survival</h4>
        <div className="survivor">
          {/* <SurvivorSurvival amount={5} max={7} />
          <SurvivorXP amount={5} max={7} />
          <SurvivorStats
            movement={4}
            accuracy={4}
            strength={4}
            evasion={4}
            luck={4}
            speed={4}
          />
          <SurvivorArmor amount={5} max={7} />
          <SurvivorFightArts amount={5} max={7} />
          <SurvivorDisorders amount={5} max={7} />
          <SurvivorAbilities amount={5} max={7} />
          <SurvivorImpairments amount={5} max={7} />
          <SurvivorNotes amount={5} max={7} /> */}
        </div>
      </div>
    );
  }
}

export default Aya;
