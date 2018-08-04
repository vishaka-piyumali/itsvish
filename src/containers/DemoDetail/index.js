import React, { Component } from 'react';
//import Kudos from '../../components/UI/Kudos';
import classnames from 'classnames';
import { fetchKudos } from '../../actions';

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

class DemoDetail extends Component {

	renderKudos () {
		return <div>
			<h3>
				<span className={
				classnames({
					'kudos': true,
					'loading': this.props.kudos === undefined?true: false
				})} > {this.props.kudos}</span> Kudos
			</h3>
		</div>;
	}

	render () {
		if (!this.props.demo) {
			return <div></div>
		}
		return (
			<div className="demo-details">
				<h2>{this.props.demo.title}</h2>
				{this.renderKudos()}
				<div>{this.props.demo.description}</div>
			</div>
		);
	}
}

function mapStateToProps (state) {
	return {
		demo: state.activeDemo,
		kudos: state.kudos
	};
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators ({ fetchKudos }, dispatch)
}
export default connect (mapStateToProps, mapDispatchToProps)(DemoDetail);
