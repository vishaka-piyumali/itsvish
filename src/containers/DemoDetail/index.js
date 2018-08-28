import React, { Component } from 'react';
import Kudos from '../../components/UI/Kudos';

import { connect } from 'react-redux';

class DemoDetail extends Component {

	render () {
		if (!this.props.demo) {
			return <div></div>
		}
		return (
			<div className="demo-details">
				<h2>{this.props.demo.title}</h2>
				<Kudos pageName={this.props.demo.id} />
				<div>{this.props.demo.description}</div>
			</div>
		);
	}
}

function mapStateToProps (state) {
	return {
		demo: state.activeDemo
	};
}

export default connect (mapStateToProps)(DemoDetail);
