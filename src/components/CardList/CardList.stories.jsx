import React from "react";
import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  boolean,
  number,
  object,
  text
} from "@storybook/addon-knobs";
import CardList from "./CardList";
import CardListMeta from "./CardListMeta";

const stories = storiesOf("CardList", module);

stories.addDecorator(withKnobs);

stories.add("Card List", () => (
  // <MilestoneDots
  //   milestones={object("Milestone object", defaultMilestone)}
  //   current={number("Current", 3)}
  //   count={number("Count", 16)}
  //   mini={boolean("Mini", false)}
  //   onlyMilestones={boolean("Show Only Milestones", false)}
  // />

  <CardList
    name={text("Label", "Label")}
    desc={text("Description", "Description")}
    href="#route"
  >
    <CardListMeta value={number("Value", 3)} />
    <CardListMeta value={number("Value 2", 3)} />
  </CardList>
));

stories.add("Survivor", () => (
  // <MilestoneDots
  //   milestones={object("Milestone object", defaultMilestone)}
  //   current={number("Current", 3)}
  //   count={number("Count", 16)}
  //   mini={boolean("Mini", false)}
  //   onlyMilestones={boolean("Show Only Milestones", false)}
  // />

  <CardList name={text("Label", "Label")} href="#route">
    <CardListMeta label={"Survivor"} value={number("Survior", 0)} />
    <CardListMeta label={"Hunt XP"} value={number("Hunt XP", 0)} />
    <CardListMeta label={"Courage"} value={number("Courage", 0)} />
    <CardListMeta label={"Understanding"} value={number("Understanding", 0)} />
  </CardList>
));
