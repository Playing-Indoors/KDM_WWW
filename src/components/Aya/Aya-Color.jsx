import React, { Component } from 'react';

class AyaColor extends Component {
  render() {
    return (
      <div className="ayaColors">
        <span className={`ayaColors-color ayaColors-color--${this.props.name}`} />
        <span className="ayaColors-name">${this.props.name}</span>
      </div>
    );
  }
}

AyaColor.propTypes = {
  name: React.PropTypes.string,
};

export default AyaColor;
