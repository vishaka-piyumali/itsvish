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
	<ul className="menu site-nav vertical align-left">
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


const SocialLinks = props => (
	<ul className="menu social align-center hide-for-small-only">
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

const QuickLinks = props => (
		<div className="quick-links">
			<SiteNav />
			<SocialLinks/>
		</div>
)

class App extends Component {
	render() {
		return (
			<div>
				<main>
					<Row>
						<Column large={3} medium={3} small={12}>
							<QuickLinks />
						</Column>
						<Column large={9} medium={9} small={12}>
							<Switch>
								<Route exact path='/' component={Home}/>
								<Route path='/skills' component={Skills}/>
								<Route path='/showcase' component={DemoList}/>
							</Switch>
						</Column>
					</Row>
				</main>
			</div>
		);
	}
}

export default App;
