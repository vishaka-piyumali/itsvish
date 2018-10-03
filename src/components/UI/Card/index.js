import React, { Component } from 'react';

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

const FlipContent = props => (
	<div className="flip-container">
		<div className="flipper">
			<div className="front">
				<img className="card-image" src={props.thumbnail} title={props.shortDesc} alt={props.shortDesc} />
			</div>
			<div className="back">
				{props.secondaryContent}
			</div>
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
				<FlipContent
					thumbnail={this.props.thumbnail}
					shortDesc={this.props.title}
					secondaryContent={this.props.secondaryContent} />
				<div className="card-desc">
					<div>{this.props.description}</div>
				</div>
				<CardFooter items={this.props.footerLinks} stickyContent={this.props.footerStickyContent} />
			</div>
		)}
}

