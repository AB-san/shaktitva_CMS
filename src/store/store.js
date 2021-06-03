import{ createStore } from "redux";

const httpReducer = (state={moviesFetched:[],isLoading:false},action) =>{
    if(action.type==='moviesRequestSent'){
        return{moviesFetched:action.movies,isLoading:false};
    }
    if(action.type==='moviesRequestRecived'){
        return{moviesFetched:state.moviesFetched,isLoading:true};
    }
    else return state;
};

const store = createStore(httpReducer);

export default store;