import { combineReducers } from 'redux';

//import reducers here
import story from './story.reducer';
import NGO from './NGO.reducer';
import legal from './legal.reducer';
import category from './category.reducer';
import lang from './language.reducer';
import states from './states.reducer'
import profilePic from './profilePic.reducer'

//call combine reducer function and pass all imported reducers as function in it, and then export that combined Reducer;
const allReducers = combineReducers({
    story,
    NGO,
    legal,
    lang,
    category,
    states,
    profilePic,
});

const rootReducer = (state, action) => {
    return allReducers(state, action);
}

export default rootReducer;