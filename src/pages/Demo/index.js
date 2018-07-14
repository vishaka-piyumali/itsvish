import React, { Component } from 'react';

import './index.css';

class Demo extends Component {
	render() {
		return (
				<div>
					<iframe width="100%" height="800px" title={this.props.match.params.id} src={'https://www.itsvish.com/demos/' + this.props.match.params.id}></iframe>
				</div>
		)}
}

export default Demo;