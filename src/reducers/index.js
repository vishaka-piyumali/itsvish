import { combineReducers } from 'redux';
import Skills from './skills';
import Demos from './demos';
import ActiveDemo from './demo_active';

export default combineReducers ({
	skills: Skills,
	demos: Demos,
	activeDemo: ActiveDemo
})