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
					link: '/campaigns',
					icon: 'logo',
					children: [
						{
							title: 'Campaigns',
							link: '/campaigns',
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
					link: '/settlement/',
					children: [
						{
							title: 'Settlement',
							link: '/settlement/',
						}
					],
				},
				{
					title: 'Survivors',
					icon: 'survivors',
					link: '/survivors',
					children: [
						{
							title: 'Survivors',
							link: '/survivors',
						},
					],
				},
				{
					title: 'Storage',
					icon: 'storage',
					link: '/storage',
					children: [
						{
							title: 'Resources',
							link: '/storage/resources',
						},
						{
							title: 'Gear',
							link: '/storage/gear',
						},
					],
				},
				{
					title: 'Campaign Log',
					icon: 'log',
					link: '/log',
					children: [
						{
							title: 'Campaign Log',
							link: '/log',
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
							link: '/glossary',
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
