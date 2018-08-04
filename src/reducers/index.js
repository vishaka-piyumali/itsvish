import { combineReducers } from 'redux';
import Skills from './skills';
import Demos from './demos';
import Kudos from './kudos';

import ActiveDemo from './demo_active';


export default combineReducers ({
	skills: Skills,
	demos: Demos,
	kudos: Kudos,
	activeDemo: ActiveDemo
})