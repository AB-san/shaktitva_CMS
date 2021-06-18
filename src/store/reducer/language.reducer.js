import {CHANGE_LANG} from '../action/language.actions';

const initialState = "en";

export default function (state = initialState, action) {
    if(action.type === CHANGE_LANG){
        return state=action.payload;
    }
    else return state;
}