import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, number, object } from "@storybook/addon-knobs";
import { Nav, NavItem, NavLink } from "reactstrap";

const stories = storiesOf("Tabs", module);

stories.addDecorator(withKnobs);

stories.add("Tabs", () => (
  <Nav tabs>
    <NavItem>
      <NavLink className="active">Tabs</NavLink>
    </NavItem>
    <NavItem>
      <NavLink>Tab (2)</NavLink>
    </NavItem>
    <NavItem>
      <NavLink>Tab Longer</NavLink>
    </NavItem>
  </Nav>
  // <MilestoneDots
  //   milestones={object("Milestone object", defaultMilestone)}
  //   current={number("Current", 3)}
  //   count={number("Count", 16)}
  //   mini={boolean("Mini", false)}
  //   onlyMilestones={boolean("Show Only Milestones", false)}
  // />
));
