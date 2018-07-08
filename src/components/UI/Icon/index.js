import React from 'react';

import PropTypes from 'prop-types';

import './index.css';

const Icon = props => (
	<span className={props.name + ' icon large'} rel="noopener noreferrer" aria-hidden="true"></span>
);

Icon.prop = {
	name: PropTypes.string.isRequired,
};

export default Icon;