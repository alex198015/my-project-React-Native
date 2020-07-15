import {createStore, combineReducers, applyMiddleware} from 'redux'
import { photoReducer } from './reducers/photo';
import thunkMiddleware from 'redux-thunk';


const rootReducer = combineReducers({
    photo: photoReducer
})

export default createStore(rootReducer, applyMiddleware(thunkMiddleware))