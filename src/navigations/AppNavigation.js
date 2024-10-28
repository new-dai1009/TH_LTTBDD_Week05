import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Screen_Phone from "../screens/Screen_Phone";
import Screen_PhoneDetail from "../screens/Screen_PhoneDetail";


const Stack =  createStackNavigator();

const AppNavigation  = () => {

    return  (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Phone">
                <Stack.Screen  name="Phone" component={Screen_Phone} />
                <Stack.Screen  name="PhoneDetail" component={Screen_PhoneDetail} />
            </Stack.Navigator>

            
        </NavigationContainer>


    )

}
export default AppNavigation;

