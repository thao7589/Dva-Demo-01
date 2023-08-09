import React, { FunctionComponent } from "react";

import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "../screens/Main";

export type RootStackParamList = {
    Welcome: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Main Page"
                    component={Main}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;