import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import { Row, Column } from 'react-foundation';
import './index.css';
import logo from './logo.png';

class Main extends Component {
	render() {
		return (
			<header>
				<Row>
					<Column className="hide-for-small-only" small={2}>
						<NavLink exact to="/" activeClassName="selected" >
							<img src={logo} width="100px" alt="Vishaka Wele Uhulangage - Sydney based web developer" />
						</NavLink>
					</Column>
					<Column small={12} medium={10}>
						<ul className="menu align-right">
							<li>
								<NavLink exact to="/" activeClassName="selected" >Home</NavLink>
							</li>
							<li>
								<NavLink to="/showcase" activeClassName="selected" >Showcase</NavLink>
							</li>
							<li>
								<NavLink to="/work" activeClassName="selected" >Work</NavLink>
							</li>
							<li>
								<NavLink to="/skills" activeClassName="selected" >Skills</NavLink>
							</li>
						</ul>
					</Column>
				</Row>
			</header>
		)}
}

export default Main;