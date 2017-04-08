/**
 * Created by 365969 on 2017/4/5.
 */
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import {ADD_MENU_ITEM,GET_MENU_LIST } from '../consts'

const getList = (state={
    list:[]
},action) => {
    switch(action.type){
        case GET_MENU_LIST:
            return {
                list:state.list
            }
        default:return state;
    }
}

const addMenuItem = (state = {
    list:[]
},action) => {
    switch (action.type){
        case ADD_MENU_ITEM :
            return {
                list:[...state.list,action.data]
            }
        default :return state;
    }
}

const menuList = (state = {},action) => {
    switch(action.type){
        case ADD_MENU_ITEM:
                console.log(state)
                state[action.path].list.push(action.data)

        case GET_MENU_LIST :
            return {
                ...state,
                [action.path]:getList(state[action.path],action)
            }
        default:return state;
    }
}



const reducer = combineReducers({
    menuList,
    router:routerReducer
})
export default reducer;