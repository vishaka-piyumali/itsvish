import React, { Component } from 'react';
import { URLS } from '../../../utils/Constants';
import classnames from 'classnames';

import './index.css';

class Kudos extends Component {

	constructor (props) {
		super(props);
		this.state = {
			kudos: 0,
			pageName: props.pageName,
			liked: false
		};
		this.sendKudos = this.sendKudos.bind(this);
	}
	componentDidMount () {
		this.getKudos();
		this.getLocalStatus();
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
				<div>{this.state.kudos} Kudos</div>
			</div>
		)}
}

export default Kudos;