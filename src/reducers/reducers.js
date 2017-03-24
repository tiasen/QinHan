import {combineReducers} from 'redux';
import {TABS_CHANGED} from '../consts';

function tabsChanged(state = 1,action){
    switch(action.type){
        case TABS_CHANGED:
            return action.index;
        default:
            return state;    
    }
}

const mealApp = combineReducers({
    tabsChanged
});
export default mealApp;