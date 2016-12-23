import React, { Component } from 'react';
// http://v4-alpha.getbootstrap.com/components/buttons/

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: props.style || 'primary',  // primary, secondary, success, info, warning, danger, link
      size: props.size || '', // lg, sm, block
      disabled: props.disabled || false,
      href: props.href || '#',
      text: props.text || '',
    }
  }
  render() {
    return (
      <a
        href={this.state.id} className={`btn btn-${this.state.style}` +
        (this.state.size ? `btn-${this.state.size}` : '') +
        (this.state.disabled ? ' disabled' : '')}
      >{this.state.text}</a>
    );
  }
}

export default Button;
