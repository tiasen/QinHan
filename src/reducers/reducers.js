import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';

import {REQUEST_GETS,RECEIVE_GETS,SELECT_TAB,RECEIVE_GETS_FAILED,ADD_TOCART,MODIFY_OFCART,DELETE_OFCART} from '../consts';

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

const addToCart = (state = {
    list:[],
    isConfirmed:false,
    sum : 0
    },action) => {
    switch(action.type){
        case MODIFY_OFCART:
            let newSum = 0;
            let newTotal = 0;
            state.list[action.index] = action.data;
            state.list.forEach((item) => {
                newSum += parseInt(item.count)
                newTotal += parseFloat(item.subtotal)
            });
            return {
                ...state,
                sum:newSum,
                total:newTotal
            };
        case ADD_TOCART:
            let sum = 0;
            let total = 0;
            let list = [...state.list,action.data];
            list.forEach((item) => {
                sum += parseInt(item.count)
                total += parseFloat(item.subtotal)
            });
            return {
                ...state,
                list,
                sum,
                total
            };
        case DELETE_OFCART:
            let deleteSum = 0;
            let deleteTotal = 0;
            state.list.splice(action.index,1);
            state.list.forEach((item) => {
                deleteSum += parseInt(item.count)
                deleteTotal += parseFloat(item.subtotal)
            });
            return {
                ...state,
                sum:deleteSum,
                total:deleteTotal
            };
        default:return state;
    }
}

//const addToCartReducer = (state = {},action) => {
//    switch(action.type){
//        case ADD_TOCART :
//            return {
//                ...state,
//                [action.path]:addToCart(state[action.path],action)
//            }
//        default:return state;
//    }
//}
const reducer = combineReducers({
    selectedTab,
    getsList,
    addToCart,
    router:routerReducer
});
export default reducer;