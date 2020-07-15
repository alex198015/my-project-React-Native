import React,{useState, useEffect} from "react"
import {View, StyleSheet, Text, Image, Dimensions, ActivityIndicator} from 'react-native'
import {useSelector, useDispatch} from "react-redux";
import {getFullPhoto} from "../store/actions/photo";


export const PhotoScreen = ({route, navigation}) => {
    const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width)
    const dispatch = useDispatch()
    const loading = useSelector(state => state.photo.loading)

    const fullPhotoId = route.params.photoId
    
    const fullPhoto = useSelector(state => state.photo.photo)

   
    
    useEffect(() => {

        dispatch(getFullPhoto(fullPhotoId))

    },[dispatch,fullPhotoId])

    

    useEffect(() => {
        const update = () => {
            const width = Dimensions.get('window').width

            setDeviceWidth(width)
          
        }
        Dimensions.addEventListener('change', update)

        return () => {
            
            Dimensions.removeEventListener('change', update)
            
        }
    })

    if(loading){
        return <View style={styles.center}>
            <ActivityIndicator size="large" color="blue"/>
        </View>
    }

   
    if(!fullPhoto){
        return <View style={styles.center}>
        <Text style={styles.text}> 
            Превышен лимит запросов! Попробуйте позже!
        </Text>
        </View>
    }


    return (
        <View style={styles.wrapper}>
                <View style={{width: deviceWidth, paddingHorizontal: 5}}>
                    {fullPhoto.full && <Image style={styles.photo} source={{uri: fullPhoto.full}}/>}
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    photo: {
        width: '100%',
        height: '99%',
        resizeMode: 'contain',
    },
    center:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        color: 'red',
        textAlign:'center'
    }
})