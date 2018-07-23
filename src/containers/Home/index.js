import React, { Component } from 'react';

import UIKudos from '../../components/UI/Kudos/index';

import './index.css';

class Home extends Component {
	render() {
		return (
			<div className="about-section">
				<h1>Hey there!</h1>
				<p>
					I am Vishaka, a front end web developer living in Sydney.
				</p>
				<p>
					I am passionate about creating clean, unique, responsive, accessible and elegant web sites for better user experience.
				</p>
				<UIKudos pageName="itsvish.com:home"/>
			</div>
	)}
}

export default Home;