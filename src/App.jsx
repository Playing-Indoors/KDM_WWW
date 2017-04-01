import React, { Component } from 'react';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pageName: 'Page Name',
			nav: [
				{
					title: 'Dashboard',
					link: '/settlements',
					icon: 'logo',
					children: [
						{
							title: 'Settlements',
							link: '/settlements',
						},
						{
							title: 'System',
							link: '/system',
						},
						{
							title: 'World Stats',
							link: '/world',
						},
						{
							title: 'About',
							link: '/about',
						},
						{
							title: 'Log Out',
							link: '/log-out',
						},
					],
				},
				{
					title: 'Settlements',
					icon: 'settlement',
					link: '/settlements/1234',
					children: [
						{
							title: 'Dashboard',
							link: '/settlements/1234',
						},
						{
							title: 'Settlement',
							link: '/settlements/1234/settlement',
						}
					],
				},
				{
					title: 'Survivors',
					icon: 'survivors',
					link: '/settlements/1234/survivors',
					children: [
						{
							title: 'Survivors',
							link: '/settlements/1234/survivors',
						},
						{
							title: 'Adam',
							link: '/settlements/1234/survivors/1',
						},
						{
							title: 'Eve',
							link: '/settlements/1234/survivors/2',
						},
					],
				},
				{
					title: 'Storage',
					icon: 'storage',
					link: '/settlements/:oid/resources',
					children: [
						{
							title: 'Resources',
							link: '/settlements/:oid/resources',
						},
						{
							title: 'Gear',
							link: '/settlements/:oid/gear',
						},
					],
				},
				{
					title: 'Campaign Log',
					icon: 'log',
					link: '/settlements/:oid/log',
					children: [
						{
							title: 'Campaign Log',
							link: '/settlements/:oid/log',
						},
					],
				},
				{
					title: 'Glossary/FAQ',
					icon: 'faq',
					link: '/glossary',
					children: [
						{
							title: 'Glossary',
							link: '/glossary',
						},
						{
							title: 'FAQ',
							link: '/faq',
						},
					],
				},
				{
					title: 'Dev',
					icon: 'logo',
					link: '/aya',
					children: [
						{
							title: 'Style Guide',
							link: '/aya',
						},
					],
				},
			],
		};
	}
	render() {
		let subName = this.props.routes[2] ? this.props.routes[2].title : null;
		return (
			<div className="app">
				<Nav data={this.state.nav} />
				<Header name={this.props.routes[1].title} subName={subName} />
				<main className="main">
					{ this.props.children }
				</main>
			</div>
		);
	}
}

App.propTypes = {
	children: React.PropTypes.node,
};


export default App;
