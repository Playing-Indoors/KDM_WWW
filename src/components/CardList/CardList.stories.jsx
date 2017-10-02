import React from "react";
import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  boolean,
  number,
  object,
  select,
  text
} from "@storybook/addon-knobs";
import CardList from "./CardList";
import CardListMeta from "./CardListMeta";

const stories = storiesOf("CardList", module);

stories.addDecorator(withKnobs);

stories.add("Campaign", () => (
  // <MilestoneDots
  //   milestones={object("Milestone object", defaultMilestone)}
  //   current={number("Current", 3)}
  //   count={number("Count", 16)}
  //   mini={boolean("Mini", false)}
  //   onlyMilestones={boolean("Show Only Milestones", false)}
  // />

  <CardList
    name={text("Label", "Oxodus")}
    desc={text("Description", "Dragon King")}
    href="#route"
  >
    <CardListMeta label={"Year"} value={number("Year", 3)} />
    <CardListMeta label={"Population"} value={number("Population", 12)} />
    <CardListMeta label={"Expansions"} value={number("Expansions", 8)} />
  </CardList>
));

const sex = ["male", "female"];

stories.add("Survivor", () => (
  // <MilestoneDots
  //   milestones={object("Milestone object", defaultMilestone)}
  //   current={number("Current", 3)}
  //   count={number("Count", 16)}
  //   mini={boolean("Mini", false)}
  //   onlyMilestones={boolean("Show Only Milestones", false)}
  // />

  <CardList
    name={text("Label", "Aya")}
    href="#route"
    iconLeft={select("Sex", sex, "female")}
    iconRight={boolean("Favorite", true) ? "star" : ""}
  >
    <CardListMeta label={"Survivor"} value={number("Survior", 0)} />
    <CardListMeta label={"Hunt XP"} value={number("Hunt XP", 0)} />
    <CardListMeta label={"Courage"} value={number("Courage", 0)} />
    <CardListMeta label={"Understanding"} value={number("Understanding", 0)} />
  </CardList>
));
