import React, { Component } from "react";

class CalebComponent extends Component {
  // The constructor is the initial state of the component, pretty much the same as getInititalState
  constructor(props) {
    super(props);
    // you set your initial state like so but this only happens in the constructor
    // usually initial state is the default state of the component
    this.state = {
      calebState: "lame"
    };

    // es6 changes the context of this for inputs so you have to bind the context
    this.handleCalebButtonClick = this.handleCalebButtonClick.bind(this);
  }
  // React has like 8 lifecycle functions, these functions are invoked at different times
  // check out the docs but componentDidMount fires when this component loads in the DOM
  componentDidMount() {
    // stuff fired in here kinda happens onLoad
  }

  // this custom function that triggers when the button is clicked
  handleCalebButtonClick() {
    // This is the only way to change state once it is set in the constructor,
    // DO NOT do this.state = {potato: whatever}
    this.setState({
      calebState: "cool"
    });
  }

  render() {
    return (
      <div>
        <h3 className="example-style">Caleb&lsqu;s Example</h3>
        <p>
          Clicking this button fires an onClick event that triggers the function
          that is in it
        </p>
        <button
          className="btn btn-primary"
          onClick={this.handleCalebButtonClick}
        >
          {" "}
          Press Me!{" "}
        </button>
        <p>Caleb is so {this.state.calebState}</p>
      </div>
    );
  }
}

export default CalebComponent;
