import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../../pages/Home';
import DemoList from '../../../pages/DemoList';
import Work from '../../../pages/Work';
import Skills from '../../../pages/Skills';
import Contact from '../../../pages/Contact';
import Demo from '../../../pages/Demo';



import './index.css';

class Main extends Component {
	render() {
		return (
			<main>
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route exact path='/demos' component={DemoList}/>
					<Route exact path='/work' component={Work}/>
					<Route exact path='/skills' component={Skills}/>
					<Route exact path='/contact' component={Contact}/>
					<Route exact path='/showcase' component={DemoList}/>
					<Route exact path='/demo/:id' component={Demo}/>
				</Switch>
			</main>
		)}
}

export default Main;