import React, { Component } from 'react';

import UIKudos from '../../components/UI/Kudos/index';

import { connect } from 'react-redux';

import './index.css';

class Home extends Component {

	render () {
		return (
			<div className="about-section">

				<h1>Hello!</h1>
				<p>
					I am Vishaka, A Sydney based web developer.
				</p>
				<p>
					I am passionate about creating clean, unique, responsive, accessible and elegant web sites for better user experience.
				</p>
				{/*<UIKudos pageName="itsvish.com:demo:itsvish-v2"/>*/}
			</div>
	)}
}

function mapStateToProps (state) {
	return {
		kudos: state.kudos
	}
}

export default connect(mapStateToProps)(Home);