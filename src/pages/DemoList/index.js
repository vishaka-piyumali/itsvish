import React, { Component } from 'react';

import { Row, Column } from 'react-foundation';

import weatherWidget from './weatherwidget.png';
import vcard from './vcard.png';

import './index.css';

class DemoList extends Component {
	render() {
		const demoList = [{
			'title': 'Weather Widget',
			'description': 'This is a frontend implementation of openweather api to display the current weather status based on the geo location',
			'link': '/demos/weatherwidget',
			'thumb': weatherWidget,
			'linkDesc': 'click here'
		},{
			'title': 'HCard Builder',
			'description': 'This is a widget to input and preview data for a vcard',
			'link': '/demos/hcardbuilder',
			'thumb': vcard,
			'linkDesc': 'click here'
		}];

		return (
			<div>
				<h1>Showcase</h1>
				{demoList.map((demo) => {
					return (
						<section className="demo-item">
							<a href={demo.link} alt={demo.title}>
								<Row>
									<Column large={4}>
										<img width="400px" src={demo.thumb} alt={demo.title} />
									</Column>
									<Column large={8}>
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

export default DemoList;