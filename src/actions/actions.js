import {URL,REQUEST_GETS,RECEIVE_GETS,SELECT_TAB} from '../consts';

export const selectTab = tab => ({
    type:SELECT_TAB,
    tab
});

export const requestGets = tab => ({
    type:REQUEST_GETS,
    tab
});

export const receiveGets = (tab,json) => ({
    type:RECEIVE_GETS,
    tab,
    data:json.result,
    receivedAt:Date.now()
});

const fetchGets = tab => dispatch => {
    dispatch(requestGets(tab));
    return (
        $.get({
            url:`${URL}/api/${tab}`
        })
        .done((data)=>{
            if(data.success){
                dispatch(receiveGets(tab,data))
            }else{
                dispatch(receiveGets(tab,data))
            }
        })
        .fail((err) => {
            dispatch(receiveGets(tab,data))
        })
    )

};

const shouldFetchGets = (state,tab) => {
    const posts = state.getsList[tab];
    if(!posts) {
        return true;
    }
    if(posts.isFetching){
        return false;
    }
    return posts.didInvalidate;
}

export const fetchGetsIfNeed = tab => (dispatch,getState) => {
    if(shouldFetchGets(getState(),tab)){
        return dispatch(fetchGets(tab));
    }
}
