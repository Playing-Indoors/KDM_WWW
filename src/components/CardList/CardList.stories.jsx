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

const campaignObj = [
  { label: "Year", value: 5 },
  { label: "Population", value: 10 },
  { label: "Expansions", value: 0 }
];

stories.add("Campaign", () => (
  <CardList
    name={text("Label", "Oxodus")}
    desc={text("Description", "Dragon King")}
    action={() => {}}
    meta={object("Meta", campaignObj)}
  />
));

const sex = ["male", "female"];

const survivorObj = [
  { label: "Survival", value: 5 },
  { label: "Hunt XP", value: 10 },
  { label: "Courage", value: 0 },
  { label: "Understanding", value: 0 }
];

stories.add("Survivor", () => (
  <CardList
    name={text("Label", "Aya")}
    href="#route"
    iconLeft={select("Sex", sex, "female")}
    iconRight={boolean("Favorite", true) ? "star" : ""}
    meta={object("Meta", survivorObj)}
  />
));
