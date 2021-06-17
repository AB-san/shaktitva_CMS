import {CHANGE_LANG} from '../action/story.actions';

const initialState = {
    lang:"en",
};

export default function (state = initialState, action) {
    if(action.type === CHANGE_LANG){
        return {
            ...state,
            lang:state.lang==="en"?"hi":"en"
        }
    }
    else return state;
}