import React, { Component } from 'react';
import classnames from 'classnames';

import { connect } from 'react-redux';

import { selectDemo, fetchKudos } from '../../actions';
import { bindActionCreators } from 'redux';

import { Row, Column } from 'react-foundation';

import './index.css';

import DemoDetail from '../DemoDetail';
import UICard from '../../components/UI/Card';

class DemoList extends Component {

	constructor (props) {
		super(props);
		this.getDemoDetails = this.getDemoDetails.bind(this);
	}

	getDemoDetails (demo) {
		//this.props.activeDemo(demo);
		//this.props.fetchKudos(demo.id);
		return (
				<div>
					<h6>Tech Stack</h6>
				<ul>
				{demo.techStack.map((skill) => {
					return <li>{skill}</li>;
				})}
				</ul>
				</div>
		)
	}

	renderDemoList (demo) {
		return (
			<Column key={demo.title} onClick={()=>{this.showDemoDetails(demo)}} >
				<section className={classnames({'demo-item':true, 'active': this.props.selectedDemo.title === demo.title})} >
					<Row>
						<Column medium={12}>
							<UICard
								title={demo.title}
								description={this.getDemoDetails(demo)}
								date={demo.date}
								headerBadge={demo.heroTechImage}
								headerBadgeText={demo.heroTechText}
								thumbnail={demo.thumbnail}
								kudos={demo.id}
								footerLinks={[
									{
										icon: 'fi-heart icon small',
										label: 'Source Code',
										link: demo.sourceCode
									},
									{
										icon: 'fi-social-github icon small',
										label: 'Source Code',
										link: demo.sourceCode
									},
									{
										icon: 'fi-web icon small',
										label: 'Live Demo',
										link: demo.link
									}
									]
								}
							    secondaryContent={demo.description}
							/>
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
					<Row className="collapse medium-up-3 demo-list-container">
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
export default connect(mapStateToProps, mapDispatchToProps)(DemoList);