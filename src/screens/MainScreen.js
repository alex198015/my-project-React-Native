import React, { useEffect, useState } from "react"
import { View, StyleSheet, ActivityIndicator, Button, TextInput, KeyboardAvoidingView, Platform, Text } from 'react-native'
import { Photolist } from '../component/Photolist'
import { useDispatch, useSelector } from 'react-redux'
import { getPhotos } from './../store/actions/photo'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const MainScreen = ({ navigation }) => {
    const [page, setPage] = useState(1)
    const [value, setValue] = useState('')


    const dispatch = useDispatch()

    const findPage = () => {

        if (value.trim()) {
            setPage(value.trim())
            dispatch(getPhotos(value.trim()))
            setValue('')
        }
    }

    useEffect(() => {

        dispatch(getPhotos(page))

    }, [dispatch, page])



    const allPhotos = useSelector(state => state.photo.photos)
    const loading = useSelector(state => state.photo.loading)



    if (loading) {
        return <View style={styles.center}>
            <ActivityIndicator size="large" color="blue" />
        </View>
    }

    const openPhotoHandler = (id) => {

        navigation.navigate('Photo', { photoId: id })
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.items}
            keyboardVerticalOffset={100}
        >
            <View style={{ height: '93%' }}>
                <Photolist data={allPhotos} onOpen={openPhotoHandler} />
            </View>
            <View style={styles.buttons}>
                <Button title="PREV" disabled={page <= 1 ? true : false} onPress={() => setPage(page => +page - 1)} />
                <Text>{page}</Text>
                <Button title="NEXT" onPress={() => setPage(page => +page + 1)} />
                <TextInput keyboardType={'numeric'} style={styles.input}
                    placeholder="Page"
                    value={value}
                    onChangeText={setValue}
                />
                <MaterialCommunityIcons name="search-web" onPress={findPage} size={26} color="blue" />
            </View>
        </KeyboardAvoidingView>

    )
}


const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#ebb0a0'
    },
    items: {
        flex: 1,
        justifyContent: 'space-around',
    },
    input: {
        borderBottomColor: 'blue',
        borderBottomWidth: 2,
        borderStyle: 'solid',
        width: 50,
        textAlign: 'center',

    }
})