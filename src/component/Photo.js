import React from "react"
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native'


export const Photo = ({item, onOpen}) => {

    return (
        <TouchableOpacity activeOpacity={0.5} onPress={() => onOpen(item.id)}>
            <View style={styles.wrapper}>
                <Image style={styles.photo} source={{uri: item.urls.small}}/>
                <View>
                    {item.description && <Text style={styles.text}>{item.description}</Text>}
                    {item.user.name && <Text style={styles.text}>{item.user.name}</Text>}
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
    },
    photo: {
        width: '100%',
        height: 200,
    },
    text: {
        textAlign: 'center'
    }
})