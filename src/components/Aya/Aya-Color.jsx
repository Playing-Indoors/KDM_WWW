import React, { Component } from 'react';

class AyaColor extends Component {
  render() {
    return (
      <div className={`ayaColor ayaColor--${this.props.name}`}>
        <span className="ayaColor-color" />
        <span className="ayaColor-name"></span>
      </div>
    );
  }
}

AyaColor.propTypes = {
  name: React.PropTypes.string,
};

export default AyaColor;
