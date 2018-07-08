import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../Home';
import DemoList from '../../DemoList';
import Work from '../../Work';
import Skills from '../../Skills';
import Contact from '../../Contact';


import './index.css';

class Main extends Component {
	render() {
		return (
			<main>
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route exact path='/work' component={Work}/>
					<Route exact path='/skills' component={Skills}/>
					<Route exact path='/contact' component={Contact}/>
					<Route exact path='/demos' component={DemoList}/>
				</Switch>
			</main>
		)}
}

export default Main;