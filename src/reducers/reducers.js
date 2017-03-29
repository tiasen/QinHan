import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';

import {REQUEST_GETS,RECEIVE_GETS,SELECT_TAB,RECEIVE_GETS_FAILED} from '../consts';

var selectedTab = (state = 'home',action) => {
    switch (action.type){
        case SELECT_TAB:
            return action.tab;

        default: return state;
    }
};

const gets = (state = {
        isFetching:false,
        didInvalidate:false,
        data:[],
        isFailed:false
    },action) => {
        switch(action.type){
            case REQUEST_GETS :
                return {
                    ...state,
                    isFetching:true,
                    didInvalidate:false,
                    isFailed:false
                };
            case RECEIVE_GETS :
                return {
                    ...state,
                    isFetching:false,
                    didInvalidate:false,
                    data:action.data,
                    isFailed:false
                };
            case RECEIVE_GETS_FAILED:
                return {
                    ...state,
                    isFetching:false,
                    didInvalidata:false,
                    data:action.data,
                    isFailed:true
                }
            default: return state;
        }
    }

const getsList = (state = {},action) => {
    switch(action.type){
        case REQUEST_GETS :
        case RECEIVE_GETS :
        case RECEIVE_GETS_FAILED:
            return {
                ...state,
                [action.tab]:gets(state[action.tab],action)
            };
        default : return state;

    }
}

const reducer = combineReducers({
    selectedTab,
    getsList,
    router:routerReducer
});
export default reducer;