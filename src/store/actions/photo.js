import config from '../../../config'
import {FETCH_ERROR, LOAD_PHOTO, LOAD_PHOTOS, START_LOAD} from "../types";

const CLIENT_ID = config.CLIENT_ID


export const getPhotos = (page) => async dispatch => {

    dispatch(startFetching())
    try{
        const response = await fetch(`https://api.unsplash.com/photos?page=${page}&per_page=10&client_id=${CLIENT_ID}`)

        const photos = await response.json()

        dispatch({
            type: LOAD_PHOTOS,
            payload: photos
        })
    }catch(e){
        dispatch(fetchError(e))
    }

}


export const getFullPhoto = (id) => async dispatch => {
    dispatch(startFetching())
    try{
        const response = await fetch(`https://api.unsplash.com/photos/${id}?client_id=${CLIENT_ID}`)

        const photo = await response.json()
       
        const photoUrl = photo.urls
       
        dispatch({
            type: LOAD_PHOTO,
            payload: photoUrl
        })
    }catch(e){
        dispatch(fetchError(e))
    }

}

export const fetchError = (e) => ({type: FETCH_ERROR, error: e})

export const startFetching = () => ({ type: START_LOAD})

