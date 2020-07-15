import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Platform } from 'react-native';
import { MainScreen } from './../screens/MainScreen';
import { PhotoScreen } from './../screens/PhotoScreen';


const Stack = createStackNavigator()

export const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Main"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? '#4839D3' : '#fff'
                      },
                      headerTintColor: Platform.OS === 'android' ? '#fff' : '#4839D3'
                }}
            >
                <Stack.Screen 
                    name="Main"
                    component={MainScreen}
                    options={{
                        title:'Мир фото'
                    }}
                />
                <Stack.Screen 
                    name="Photo"
                    component={PhotoScreen}
                    options={{
                        title:'Фотоснимок'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}