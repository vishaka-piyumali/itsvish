import React, { Component } from 'react';

import UIKudos from '../../components/UI/Kudos/index';

import { connect } from 'react-redux';

import { fetchKudos } from '../../actions';
import { bindActionCreators } from 'redux';
import './index.css';

class Home extends Component {
	constructor (props) {
		super(props);
		this.props.fetchKudos('itsvish.com:home');
	}

	render () {
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

function mapStateToProps (state) {
	return {
		kudos: state.kudos
	}
}

/*
 activeDemo will be added to the props
 */
function mapDispatchToProps (dispatch) {
	return bindActionCreators (
			{
				fetchKudos
			}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);