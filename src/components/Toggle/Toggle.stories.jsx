import React from "react";
import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  boolean,
  number,
  object,
  text
} from "@storybook/addon-knobs";
import Toggle from "./Toggle";

const stories = storiesOf("Toggle", module);

stories.addDecorator(withKnobs);

// storiesOf("Milestones", module).add("Basic", () => <MilestoneDots />);

stories.add("Toggle", () => (
  <Toggle
    label={text("Label", "Toggle Label")}
    active={boolean("Checked", true)}
  />
));

stories.add("Toggles", () => (
  <div>
    <Toggle
      label={text("Label", "Toggle Label")}
      active={boolean("Checked", true)}
    />
    <Toggle
      label={text("Label", "Toggle Label")}
      active={boolean("Checked", true)}
    />
    <Toggle
      label={text("Label", "Toggle Label")}
      active={boolean("Checked", true)}
    />
    <Toggle
      label={text("Label", "Toggle Label")}
      active={boolean("Checked", true)}
    />
  </div>
));
