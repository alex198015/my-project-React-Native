import {FETCH_ERROR, LOAD_PHOTO, LOAD_PHOTOS, START_LOAD} from './../types';

const initialState = {
    photos: [],
    photo:{},
    loading: false,
    error: null
}

export const photoReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_PHOTOS:
            return{
                ...state,
                photos: action.payload,
                loading: false,
            }
        case  FETCH_ERROR:
            return{
                ...state,
                loading: false,
                error: action.error
            }
        case START_LOAD:
            return {
                ...state,
                loading: true
            }
        case LOAD_PHOTO:
            return {
                ...state,
                photo: action.payload,
                loading: false,
        }
        default : return state
    }
}

