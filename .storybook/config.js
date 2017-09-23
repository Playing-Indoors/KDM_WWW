import { configure } from "@storybook/react";

require("../styles/main.scss");

const req = require.context("../src/components", true, /\.stories\.jsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
