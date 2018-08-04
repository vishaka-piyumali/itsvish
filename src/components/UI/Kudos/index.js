import React, { Component } from 'react';
import { URLS } from '../../../utils/Constants';
import classnames from 'classnames';

import './index.css';
import { fetchKudos } from '../../../actions';

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

class Kudos extends Component {

	constructor (props) {
		super(props);
		this.state = {
			liked: false
		};
		this.sendKudos = this.sendKudos.bind(this);
	}
	componentDidMount () {
		//this.getKudos();
		//this.getLocalStatus();
		this.props.fetchKudos(this.props.pageName);
	}

	// read local storage to see if user already sent kudos
	getLocalStatus () {
		this.setState({
			liked: window.localStorage.getItem("kudos") || false
		});
	}

	getKudos () {
		const url = URLS.READ_KUDOS_URL;
		const data ={ pageName: this.state.pageName}

		fetch(url, {
			method: 'POST',
			body: JSON.stringify(data)
		})
		.then(response => response.json())
		.then(data => {
			this.setState({
				kudos: data[0].kudos
			})
		});
	}

	sendKudos () {
		const url = URLS.SEND_KUDOS_URL;
		const data ={ pageName: this.state.pageName};

		if (this.state.liked) {
			return false;
		}

		fetch(url, {
			method: 'POST',
			body: JSON.stringify(data)
		})
		.then(response => response.json())
		.then(data => {
			this.setState({
				liked: true
			});
			window.localStorage.setItem("kudos", true);
			this.getKudos();
		});
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
				<div>{this.props.kudos} Kudos</div>
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
export default  connect(mapStateToProps, mapDispatchToProps)(Kudos);