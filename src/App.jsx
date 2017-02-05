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
					link: '/dashboard',
					icon: 'logo-mark',
					'children': [
						{
							title: 'Campaigns',
							link: '#',
						},
						{
							title: 'World Stats',
							link: '#',
						},
						{
							title: 'User Preferences',
							link: '#'
						},
					]
				},
				{
					title: 'Settlements',
					icon: 'settlement',
					link: '/settlement',
				},
				{
					title: 'Survivors',
					icon: 'survivors',
					link: '/survivors',
				},
				{
					title: 'Storage',
					icon: 'storage',
					link: '/storage',
				},
				{
					title: 'Campaign Log',
					icon: 'log',
					link: '/campaign',
				},
				{
					title: 'Glossary/FAQ',
					icon: 'faq',
					link: '/glossary',
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
