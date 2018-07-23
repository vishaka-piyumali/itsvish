import { combineReducers } from 'redux';
import Skills from './skills';
import Demos from './demos';

export default combineReducers ({
	skills: Skills,
	demos: Demos
})