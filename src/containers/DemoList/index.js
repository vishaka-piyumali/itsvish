import React, { Component } from 'react';
import classnames from 'classnames';

import { connect } from 'react-redux';

import { selectDemo, fetchKudos } from '../../actions';
import { bindActionCreators } from 'redux';

import { Row, Column } from 'react-foundation';

import './index.css';

import DemoDetail from '../DemoDetail';

class DemoList extends Component {

	constructor (props) {
		super(props);
		this.showDemoDetails = this.showDemoDetails.bind(this);
	}

	showDemoDetails (demo) {
		this.props.activeDemo(demo);
		this.props.fetchKudos(demo.id);
	}

	renderDemoList (demo) {
		return (
			<Column key={demo.title} large={4} onClick={()=>{this.showDemoDetails(demo)}} >
				<section className={classnames({'demo-item':true, 'active': this.props.selectedDemo.title === demo.title})} >
					<Row>
						<Column medium={12}>
							<img width="400px" src={demo.thumbnail} alt={demo.title} />
						</Column>
					</Row>
				</section>
			</Column>
		)
	}
	render () {
		return (
			<Row>
				<Column>
					<Row className="demo-list-container">
						{this.props.demos.map((demo) => {
							return this.renderDemoList(demo);
						})}
					</Row>
					<Row>
						<Column>
							<DemoDetail />
						</Column>
					</Row>
				</Column>
			</Row>
		)}
}

function mapStateToProps (state) {
	return {
		demos: state.demos,
		kudos: state.kudos,
		selectedDemo: state.activeDemo || {}
	}
}

/*
activeDemo will be added to the props
 */
function mapDispatchToProps (dispatch) {
	return bindActionCreators (
		{
			activeDemo: selectDemo,
			fetchKudos
		}, dispatch)
}
export default  connect(mapStateToProps, mapDispatchToProps)(DemoList);