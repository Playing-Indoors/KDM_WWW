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
					link: '/campaign',
					icon: 'logo',
					children: [
						{
							title: 'Campaigns',
							link: '/campaign',
						},
						{
							title: 'World Stats',
							link: '#',
						},
						{
							title: 'User Preferences',
							link: '#',
						},
					],
				},
				{
					title: 'Settlements',
					icon: 'settlement',
					link: '/settlement',
					children: [
						{
							title: 'Settlement',
							link: '/settlement',
						},
						{
							title: 'A link',
							link: '#',
						},
						{
							title: 'Another link',
							link: '#',
						},
					],
				},
				{
					title: 'Survivors',
					icon: 'survivors',
					link: '/survivors',
					children: [
						{
							title: 'Survivors',
							link: '/Survivors',
						},
						{
							title: 'A link',
							link: '#',
						},
						{
							title: 'Another link',
							link: '#',
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
							link: '/storage',
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
						{
							title: 'A link',
							link: '#',
						},
						{
							title: 'Another link',
							link: '#',
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
						{
							title: 'Another link',
							link: '#',
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
		return (
			<div className="app">
				<Nav data={this.state.nav} />
				<Header data={this.state.pageName} />
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
