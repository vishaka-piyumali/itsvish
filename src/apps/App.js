import React, { Component } from 'react';

import './normalize.css';
import '../styles/foundation.6.4.css';
import './App.css';

import { Route, Switch  } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import Icon from '../components/UI/Icon';
import { SOCIALLINKS } from '../utils/Constants';
import { Row, Column } from 'react-foundation';

import DemoList from '../containers/DemoList';
import Skills from '../containers/SkillsList';
import Home from '../containers/Home';

import logo from './logo.png';

const SiteLogo = props => (
	<NavLink exact to="/" activeClassName="selected" >
		<img className="logo" src={logo} width="100px" alt="Vishaka Wele Uhulangage - Sydney based web developer" />
	</NavLink>
);

const SiteNav = props => (
	<ul className="menu align-right">
		<li>
			<NavLink exact to="/" activeClassName="selected" >Home</NavLink>
		</li>
		<li>
			<NavLink to="/showcase" activeClassName="selected" >Showcase</NavLink>
		</li>
		<li>
			<a href="//github.com/vishaka-piyumali" rel="noopener noreferrer" target="_blank" >GitHub</a>
		</li>
		<li>
			<NavLink to="/skills" activeClassName="selected" >Skills</NavLink>
		</li>
	</ul>
);

const Header = props => (
	<header>
		<Row>
			<Column small={2}>
				<SiteLogo />
			</Column>
			<Column small={10}>
				<SiteNav />
			</Column>
		</Row>
	</header>
);

const SocialLinks = props => (
	<ul className="menu align-center">
		{SOCIALLINKS.map((social) => {
			return (
					<li key={social.link}>
						<a href={social.link} rel="noopener noreferrer" target="_blank">
							<Icon name={social.icon}/>
						</a>
					</li>
			)
		})}
	</ul>
);

const Footer = props => (
	<footer>
		<SocialLinks />
	</footer>
)

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<main>
					<Switch>
						<Route exact path='/' component={Home}/>
						<Route path='/skills' component={Skills}/>
						<Route path='/showcase' component={DemoList}/>
					</Switch>
				</main>
				<Footer />
			</div>
		);
	}
}

export default App;
