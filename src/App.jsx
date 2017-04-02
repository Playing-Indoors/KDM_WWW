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
					link: '/',
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
					link: '/settlements/1234/settlement/',
					children: [
						{
							title: 'Dashboard',
							link: '/settlements/1234/settlement/dashboard',
						},
						{
							title: 'Settlement',
							link: '/settlements/1234/settlement/records',
						}
					],
				},
				{
					title: 'Survivors',
					icon: 'survivors',
					link: '/settlements/1234/survivors',
					children: [
						{
							title: 'All',
							link: '/settlements/1234/survivors/all',
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
					link: '/settlements/1234/storage',
					children: [
						{
							title: 'Resources',
							link: '/settlements/1234/storage/resources',
						},
						{
							title: 'Gear',
							link: '/settlements/1234/storage/gear',
						},
					],
				},
				{
					title: 'Campaign Log',
					icon: 'log',
					link: '/settlements/1234/log',
					children: [
						{
							title: 'Campaign Log',
							link: '/settlements/1234/log',
						},
					],
				},
				{
					title: 'Resources',
					icon: 'faq',
					link: '/resources',
					children: [
						{
							title: 'Glossary',
							link: '/resources/glossary',
						},
						{
							title: 'FAQ',
							link: '/resources/faq',
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
