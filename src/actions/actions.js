import {TABS_CHANGED} from '../consts';

export function tabsChangedFn(text){
    console.log(text);
    return {
        type:TABS_CHANGED,
        text
    }
}