import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Row, Column } from 'react-foundation';

import './index.css';

class DemoList extends Component {
	render() {
		return (
			<div>
				{this.props.demos.map((demo) => {
					return (
						<section key={demo.title} className="demo-item">
							<a href={demo.link} alt={demo.title}>
								<Row>
									<Column medium={4} className="medium-push-2">
										<img width="400px" src={demo.thumbnail} alt={demo.title} />
									</Column>
									<Column medium={4} className="medium-pull-2">
										<h2>{demo.title}</h2>
										<p>{demo.description}</p>
									</Column>
								</Row>
							</a>
						</section>
					)
				})}
			</div>
		)}
}

function mapStateToProps (state) {
	return {
		demos: state.demos
	}
}
export default  connect(mapStateToProps)(DemoList);