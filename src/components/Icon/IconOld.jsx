import React, { Component } from 'react';

class Icon extends Component {
	constructor(props) {
		super(props);
		// default colors and flag
		this.state = {
			icon: props.icon || 'flag',
			color: props.color || '#fff',
			secondary: props.secondary || '#fff',
		};
	}
	renderIcon() {
		switch (this.state.icon) {
		case 'settlement':
			return (
				<svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.14 28.91"><g><rect className="cls-1" y="20.77" width="8.14" height="8.14" rx="2" ry="2"/><rect className="cls-1" y="10.33" width="8.14" height="8.14" rx="2" ry="2"/><rect className="cls-1" width="8.14" height="8.14" rx="2" ry="2" /></g></svg>
			);
		case 'flag':
			return (
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.43 45.88" className="svg-flag">
					<title>flag</title>
					<rect x="2.36" y="3.38" width="12.79" height="20.19" fill={this.state.color} stroke={this.state.secondary} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
					<polygon points="23.93 29.57 11.9 29.57 13.47 29.13 11.9 9.37 23.93 9.37 23.93 29.57" fill="#fff" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
					<path d="M15,28.07a1.5,1.5,0,0,0,0-3H10.4v4.5Z" fill="#77787b" /><path d="M15,31.07a1.5,1.5,0,0,0,0-3H11.9a1.5,1.5,0,1,0,0,3Z" fill="#fff" />
					<line x1="1.5" y1="1.5" x2="1.5" y2="44.38" fill="none" stroke="#231f20" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" />
				</svg>
			);
		case 'logo-mark':
			return (
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.84 50.79"><title>logo-mark</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="_Group_" data-name="&lt;Group&gt;"><path id="_Compound_Path_" data-name="&lt;Compound Path&gt;" d="M39.71,14.58a20.73,20.73,0,0,0-39.59,0L0,15l.13.41A20.56,20.56,0,0,0,11.9,28.32h-.12a2.39,2.39,0,0,1,1,1.94v5.21A1.24,1.24,0,0,0,14,36.71h.27a1.25,1.25,0,0,0,1.25-1.25V32.74a.49.49,0,0,1,.49-.47c.23,0,.5.12.5.58v11.4a1.24,1.24,0,0,0,1.24,1.24h.27a1.25,1.25,0,0,0,1.25-1.25V33.43a.5.5,0,0,1,1,0V49.54a1.25,1.25,0,0,0,1.25,1.25h.27a1.24,1.24,0,0,0,1.24-1.24V34.07c0-.47.27-.58.5-.58a.49.49,0,0,1,.49.47V40.4a1.25,1.25,0,0,0,1.25,1.25h.27a1.24,1.24,0,0,0,1.24-1.24V30.28a2.39,2.39,0,0,1,1-1.92,20.55,20.55,0,0,0,11.86-13l.13-.41ZM19.92,25.81c-7.8,0-14-3.58-17.07-10.85A18,18,0,0,1,37,15C34,22.23,27.72,25.81,19.92,25.81Z" fill="#dcddde" /><circle id="_Path_" data-name="&lt;Path&gt;" cx="19.84" cy="13.99" r="5.9" fill="#dcddde" /></g></g></g></svg>
			);
		case 'survivors':
			return (
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.21 29.89"><title>survivors</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path id="_Rectangle_" data-name="&lt;Rectangle&gt;" d="M1.06,6.63h4A1.06,1.06,0,0,1,6.12,7.69v12a.36.36,0,0,1-.36.36H.36A.36.36,0,0,1,0,19.66v-12A1.06,1.06,0,0,1,1.06,6.63Z" fill="#414042" /><rect id="_Rectangle_2" data-name="&lt;Rectangle&gt;" x="1.71" y="18.26" width="2.69" height="11.63" rx="0.38" ry="0.38" fill="#414042" /><circle id="_Path_" data-name="&lt;Path&gt;" cx="3.06" cy="2.54" r="2.55" fill="#414042" /><path id="_Rectangle_3" data-name="&lt;Rectangle&gt;" d="M10.11,6.63h4a1.06,1.06,0,0,1,1.06,1.06v12a.36.36,0,0,1-.36.36H9.41A.36.36,0,0,1,9,19.66v-12A1.06,1.06,0,0,1,10.11,6.63Z" fill="#414042" /><rect id="_Rectangle_4" data-name="&lt;Rectangle&gt;" x="10.76" y="18.26" width="2.69" height="11.63" rx="0.38" ry="0.38" fill="#414042" /><circle id="_Path_2" data-name="&lt;Path&gt;" cx="12.11" cy="2.54" r="2.54" fill="#414042" /><path id="_Rectangle_5" data-name="&lt;Rectangle&gt;" d="M19.16,6.63h4a1.06,1.06,0,0,1,1.06,1.06v12a.36.36,0,0,1-.36.36h-5.4a.36.36,0,0,1-.36-.36v-12A1.06,1.06,0,0,1,19.16,6.63Z" fill="#414042" /><rect id="_Rectangle_6" data-name="&lt;Rectangle&gt;" x="19.81" y="18.26" width="2.69" height="11.63" rx="0.38" ry="0.38" fill="#414042" /><circle id="_Path_3" data-name="&lt;Path&gt;" cx="21.16" cy="2.54" r="2.54" fill="#414042" /></g></g></svg>
			);
		case 'storage':
			return (
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.21 27.27"><title>storage</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path id="_Path_" data-name="&lt;Path&gt;" d="M18.12.19a.61.61,0,0,0-.85,0A7.11,7.11,0,0,1,12.45,2,7.11,7.11,0,0,1,8.78,1,.64.64,0,0,0,8,1.09L.18,8.86a.63.63,0,0,0,0,.88l6.4,6.43a.63.63,0,0,0,.88,0L20.37,3.34a.63.63,0,0,0,0-.88Z" fill="#414042" /><path id="_Path_2" data-name="&lt;Path&gt;" d="M31,22.75,17.06,10.5a.65.65,0,0,0-.9,0l-2.11,2.06a.65.65,0,0,0,0,.9l12.6,13.59a.65.65,0,0,0,.95,0L31,23.69A.65.65,0,0,0,31,22.75Z" fill="#414042" /></g></g></svg>
			);
		case 'log':
			return (
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.35 20.35"><title>log</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect id="_Rectangle_" data-name="&lt;Rectangle&gt;" x="15.03" y="8.03" width="4.12" height="20.52" rx="1.06" ry="1.06" transform="translate(35.37 1.2) rotate(90)" fill="#414042" /><rect id="_Rectangle_2" data-name="&lt;Rectangle&gt;" x="-0.15" y="16.38" width="4.12" height="3.82" rx="1.06" ry="1.06" transform="translate(20.2 16.38) rotate(90)" fill="#414042" /><rect id="_Rectangle_3" data-name="&lt;Rectangle&gt;" x="15.03" y="-0.09" width="4.12" height="20.52" rx="1.06" ry="1.06" transform="translate(27.26 -6.91) rotate(90)" fill="#414042" /><rect id="_Rectangle_4" data-name="&lt;Rectangle&gt;" x="-0.15" y="8.26" width="4.12" height="3.82" rx="1.06" ry="1.06" transform="translate(12.08 8.26) rotate(90)" fill="#414042" /><rect id="_Rectangle_5" data-name="&lt;Rectangle&gt;" x="15.03" y="-8.2" width="4.12" height="20.52" rx="1.06" ry="1.06" transform="translate(19.14 -15.03) rotate(90)" fill="#414042" /><rect id="_Rectangle_6" data-name="&lt;Rectangle&gt;" x="-0.15" y="0.15" width="4.12" height="3.82" rx="1.06" ry="1.06" transform="translate(3.97 0.15) rotate(90)" fill="#414042" /></g></g></svg>
			);
		case 'faq':
			return (
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.93 23.67"><title>faq</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon points="16.46 20.35 14.02 19 2.25 19 2.25 10.12 2.25 1.25 14.02 1.25 16.46 2.61 16.46 11.48 16.46 20.35" fill="none" stroke="#414042" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" /><polygon points="16.46 20.35 18.91 19 30.68 19 30.68 10.12 30.68 1.25 18.91 1.25 16.46 2.61 16.46 11.48 16.46 20.35" fill="none" stroke="#414042" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" /><polyline points="2.25 16.93 2.25 20.43 14.02 20.43 16.46 21.78" fill="none" stroke="#414042" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" /><polyline points="16.46 21.78 18.91 20.43 30.68 20.43 30.68 16.93" fill="none" stroke="#414042" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" /><polygon points="15.46 20.35 13.02 19 1.25 19 1.25 10.12 1.25 1.25 13.02 1.25 15.46 2.61 15.46 11.48 15.46 20.35" fill="none" stroke="#414042" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" /><polygon points="15.46 20.35 17.91 19 29.68 19 29.68 10.12 29.68 1.25 17.91 1.25 15.46 2.61 15.46 11.48 15.46 20.35" fill="none" stroke="#414042" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" /><polyline points="1.25 16.93 1.25 20.43 13.02 20.43 15.46 21.78" fill="none" stroke="#414042" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" /><polyline points="15.46 21.78 17.91 20.43 29.68 20.43 29.68 16.93" fill="none" stroke="#414042" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" /><polygon points="16.46 20.35 14.02 19 2.25 19 2.25 10.12 2.25 1.25 14.02 1.25 16.46 2.61 16.46 11.48 16.46 20.35" fill="none" stroke="#414042" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" /><polygon points="16.46 20.35 18.91 19 30.68 19 30.68 10.12 30.68 1.25 18.91 1.25 16.46 2.61 16.46 11.48 16.46 20.35" fill="none" stroke="#414042" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" /><polyline points="2.25 16.93 2.25 21.06 14.02 21.06 16.46 22.42" fill="none" stroke="#414042" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" /><polyline points="16.46 22.42 18.91 21.06 30.68 21.06 30.68 16.93" fill="none" stroke="#414042" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" /></g></g></svg>
			);
		default:
			return (
				<svg><title>no icon</title></svg>
			);
		}
	}
	render() {
		return (
			<div>
				{this.renderIcon()}
			</div>
		);
	}
}

export default Icon;
