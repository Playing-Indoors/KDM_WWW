import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, number, object } from "@storybook/addon-knobs";
import MilestoneDots from "./MilestoneDots";

const stories = storiesOf("Milestones", module);

stories.addDecorator(withKnobs);

// storiesOf("Milestones", module).add("Basic", () => <MilestoneDots />);

const defaultMilestone = [
  {
    handle: "core_age",
    values: [2, 6, 10, 15]
  }
];

stories.add("Milestones", () => (
  <MilestoneDots
    milestones={object("Milestone object", defaultMilestone)}
    current={number("Current", 3)}
    count={number("Count", 16)}
    mini={boolean("Mini", false)}
    onlyMilestones={boolean("Show Only Milestones", false)}
  />
));
