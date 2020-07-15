import React from "react"
import {View, FlatList} from 'react-native'
import {Photo} from "./Photo";

export const Photolist = ({data = [], onOpen}) => {


    return (
        <View >
            <FlatList
                keyExtractor={item => item.id.toString()}
                data={data}
                renderItem={({item}) => <Photo item={item} onOpen={onOpen}/>}
            />
            </View>

    )
}


