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
					<Column small={2}>
						<img src={logo} width="100px" alt="Vishaka Wele Uhulangage - Sydney based web developer" />
					</Column>
					<Column small={10}>
						<ul className="menu align-right">
							<li>
								<NavLink exact to="/" activeClassName="selected" >Home</NavLink>
							</li>
							<li>
								<NavLink to="/work" activeClassName="selected" >Work</NavLink>
							</li>
							<li>
								<NavLink to="/skills" activeClassName="selected" >Skills</NavLink>
							</li>
							<li>
								<NavLink to="/contact" activeClassName="selected" >Contact</NavLink>
							</li>
						</ul>
					</Column>
				</Row>
			</header>
		)}
}

export default Main;