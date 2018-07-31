import React, { Component } from 'react';

import { connect } from 'react-redux';

class DemoDetail extends Component {
	render () {
		if (!this.props.demo) {
			return <div> select a demo you like</div>
		}
		return (
			<div className={this.props.className}> Demo Detail {this.props.demo.title}</div>
		);
	}
}

function mapStateToProps (state) {
	return {
		demo: state.activeDemo
	};
}

export default connect (mapStateToProps)(DemoDetail);