import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Nav from "./Nav.jsx";

storiesOf("Button", module)
  .add("nav", () => <Nav />)
  .add("with text", () => (
    <button onClick={action("clicked")}>Hello Button</button>
  ))
  .add("with some emoji", () => (
    <button onClick={action("clicked")}>😀 😎 👍 💯</button>
  ));
