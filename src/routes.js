import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";


import Main from "./pages/Main";

const Routes = createAppContainer(

    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: "Busca Clima"
            }
        },
    }, {
        defaultNavigationOptions: {
            headerTintColor: "#FFF",
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: "#7D40E7"

            }
        }
    }
    )
);

export default Routes