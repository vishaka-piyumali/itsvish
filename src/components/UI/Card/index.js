import React, { Component } from 'react';
import { Row, Column } from 'react-foundation';

import './index.css';

const CardHeader = props => (
	<div className="card-header">
		<div className="header-left">
			<div className="card-icon" aria-label="card"><img src={props.icon} alt={props.iconText} title={props.iconText}  width="100%" height="100%"/></div>
		</div>
		<div className="header-middle">
			<span className="title">{props.title}</span>
			<span className="subtitle">{props.date}</span>
		</div>
		<div className="header-right">
			<button onClick={props.headerClickAction} >
				<span className={props.active?'active icon small fi-heart':'icon small fi-heart'} rel="noopener noreferrer" aria-hidden="true"></span>
			</button>
		</div>
	</div>
);

const CardBody = props => (
	<div className="card-desc">
		<div className="main-content">
			<Row>
				<Column mediumn={6} large={6}>
					{props.secondaryContent}
				</Column>
				<Column mediumn={6} large={6}>
					<img className="card-image" src={props.thumbnail} title={props.shortDesc} alt={props.shortDesc} />
				</Column>
			</Row>
		</div>
		<div className="support-content">
			{props.content}
		</div>
	</div>
);

const CardFooter = props => (
	<div className="card-footer">
			<ul className="footer-left menu">
				{props.items.map((links, index) => {
					return (
						<li className="footer-left " key={index}>
							<a href={links.link} title={links.label} alt={links.label} rel="noopener noreferrer" target="_blank">
								<span className={links.icon} rel="noopener noreferrer" aria-hidden="true"></span>
							</a>
						</li>
					)
				})}
			</ul>
			<div className="footer-middle"></div>
			<div className="footer-right sticky-link">
				<span>{props.stickyContent}</span>
			</div>
	</div>
);


export default class Card extends Component {

	render () {
		return (
			<div className="card">
				<CardHeader
					title={this.props.title}
					icon={this.props.headerBadge}
					iconText={this.props.headerBadgeText}
					date={this.props.date}
					active={this.props.active}
					headerClickAction={this.props.headerClickAction} />
				<a href={this.props.link} title={this.props.label} alt={this.props.label} rel="noopener noreferrer" target="_blank">
					<CardBody thumbnail={this.props.thumbnail}
						shortDesc={this.props.title}
						content={this.props.description}
						secondaryContent={this.props.secondaryContent} >
					</CardBody>
				</a>
				<CardFooter items={this.props.footerLinks} stickyContent={this.props.footerStickyContent} />
			</div>
		)}
}

