import React, { Component } from 'react';
import classnames from 'classnames';

import { connect } from 'react-redux';

import { selectDemo, fetchKudosForDemos } from '../../actions';
import { bindActionCreators } from 'redux';

import { Row, Column } from 'react-foundation';

import './index.css';

import DemoDetail from '../DemoDetail';
import UICard from '../../components/UI/Card';

class DemoList extends Component {

	constructor (props) {

		super(props);
		this.props.fetchKudosForDemos();
		this.showDemoDetails = this.showDemoDetails.bind(this);

	}

	showDemoDetails (demo) {
		console.log('placeholder..');
	}

	renderDemoList (demo) {
		//let kudos = this.getKudos(demo.id);
		return (
			<Column key={demo.title} onClick={()=>{this.showDemoDetails(demo)}} >
				<section className={classnames({'demo-item':true, 'active': this.props.selectedDemo.title === demo.title})} >
					<Row>
						<Column medium={12}>
							<UICard
								title={demo.title}
								date={demo.date}
								headerBadge={demo.heroTechImage}
								headerBadgeText={demo.heroTechText}
								thumbnail={demo.thumbnail}
								footerStickyContent={demo.kudos + ' KUDOS'}
								footerLinks={[
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
		if (this.props.demos == null) {
			return <div>demos loading...</div>;
		}
		else {
			return (
					<Row>
						<Column>
							<Row className="collapse medium-up-3 demo-list-container">
								{Object.values(this.props.demos).map((demo) => {
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
			)
		}
	}
}

function mapStateToProps (state) {
	return {
		demos: state.demos,
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
			fetchKudosForDemos
		}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(DemoList);