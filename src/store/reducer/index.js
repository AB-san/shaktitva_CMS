import { combineReducers } from 'redux';

//import reducers here
import story from './story.reducer';
import lang from './language.reducer'

//call combine reducer function and pass all imported reducers as function in it, and then export that combined Reducer;
const allReducers = combineReducers({
    story,
    lang
});

const rootReducer = (state, action) => {
    return allReducers(state, action);
}

export default rootReducer;