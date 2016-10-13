import React, { Component } from 'react';

const icons = {
  'flag': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.43 45.88" className="svg-flag"><title>flag</title><rect x="2.36" y="3.38" width="12.79" height="20.19" fill="#fff" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/><polygon points="23.93 29.57 11.9 29.57 13.47 29.13 11.9 9.37 23.93 9.37 23.93 29.57" fill="#fff" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/><path d="M15,28.07a1.5,1.5,0,0,0,0-3H10.4v4.5Z" fill="#77787b"/><path d="M15,31.07a1.5,1.5,0,0,0,0-3H11.9a1.5,1.5,0,1,0,0,3Z" fill="#fff"/><line x1="1.5" y1="1.5" x2="1.5" y2="44.38" fill="none" stroke="#231f20" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3"/></svg>'
}

class Icon extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>{prop.icon.flag}</div>
    )
  }
}

export default Icon;
