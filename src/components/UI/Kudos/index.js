import React, { Component } from 'react';

import classnames from 'classnames';

import { fetchKudos, sendKudos } from '../../../actions';

import { bindActionCreators } from 'redux';

import './index.css';

import { connect } from 'react-redux';

class Kudos extends Component {

	constructor (props) {
		super(props);
		this.state = {
			liked: false
		};

		this.props.fetchKudos(this.props.pageName);
		this.getLocalStatus();
		this.sendKudos = this.sendKudos.bind(this);
	}

	// read local storage to see if user already sent kudos
	getLocalStatus () {
		this.setState({
			liked: window.localStorage.getItem(this.props.pageName) === 'true' || false
		});
	}

	sendKudos () {

		const data = { pageName: this.props.pageName };

		if (this.state.liked) {
			return false;
		}

		this.props.sendKudos(data.pageName)
		.then(() => {
			this.setState({
				liked: true
			});
			window.localStorage.setItem(data.pageName, true);
		});
	}

	renderKudos () {

		return <div><span className={
			classnames({
				'status': true,
				'loading': this.props.kudos === null?true: false
				})} > {this.props.kudos}</span> Kudos</div>
	}

	render () {
		return (
			<div className="kudos">
				<a alt={this.state.liked?'Thank you':'Kudos for this portfolio?'} title={this.state.liked?'Thank you':'Kudos for this portfolio?'} onClick={this.sendKudos}>
					<span className={
						classnames({
							'icon': true,
							'fi-like large': true,
							'liked': this.state.liked
						})} >
					</span>
				</a>
				{this.renderKudos()}
			</div>
		)}
}

function mapStateToProps (state) {
	return {
		kudos: state.kudos
	}
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators (
		{
			sendKudos,
			fetchKudos
		}, dispatch)
}

export default  connect(mapStateToProps, mapDispatchToProps)(Kudos);