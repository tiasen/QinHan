/**
 * Created by 365969 on 2017/4/7.
 */
import {ADD_MENU_ITEM,GET_MENU_LIST} from '../consts';

export const addMenuItem = (path,data) => {
    return {
        type:ADD_MENU_ITEM,
        path,
        data
    }
}
 const getMenuList = path => {
    return {
        type:GET_MENU_LIST,
        path
    }
}
const shouldGetMenuList = (state,path) => {
    const post = state.menuList[path];
    if(post){
        return false;
    } else{
        return true;
    }

}
export const ifShouldGetMenuList = path => (dispatch,getState) =>{
    if(shouldGetMenuList(getState(),path)){
       return  dispatch(getMenuList(path))
    }
}