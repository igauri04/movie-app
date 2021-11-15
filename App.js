import React, { createRef } from "react";
import HomeScreen from "./screens/Home";
import RecommendationMovieScreen from "./screens/Recommendation";
import PopularMovieScreen from "./screens/Popular";

import {createAppContainer}from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createMaterialTopTabNavigator} from 'react-naviation-tabs'
import {RFValue} from 'react-native-responsive-fontsize'

export default function App() {
  return <AppContainer />;
}
const AppTabNavigator = createMaterialTopTabNavigator({
  RecommendedMovies:{
    screens: RecommendationMovieScreen,
    navigationOptions:{
      tabBarLabel:"Recommended",
      tabBarOptions:{
        tabStyle:{backgroundColor:'#fff'},
        labelStyle:{color:"#000"},
        indicatorStyle:{backgroundColor:'#000'}
        

      }
    }
  },
  PopularMovies:{
    screen: PopularMovieScreen,
    navigationOptions:{
      tabBarLabel:"Popular",
      tabBarOptions:{
        tabStyle:{backgroundColor:'#fff'},
        labelStyle:{color:"#000"},
        indicatorStyle:{backgroundColor:'#000'}
  }
    }}

})
const AppStackNavigator = createStackNavigator({
  Home:{
    screen:HomeScreen,
    navigationOptions:{
      HeadersShown: false
    }
  },
  AppTopNav:{
    screen: AppTopNavigation,
    navigationOptions:{
      headerBackTitle: null,
      headerTintColor:'#fff',
      headerTitle:"Recommended Movies",
      headerStyle:{
        backgroundColor:'#d500f9',

      },
      headerTitleStyle:{
        color:'#fff',
        fontWeight:"bold",
        fontSize:RFValue(18)
      }

    }
  }
},
{
  initialRouteName: "Home"

}
)
const AppContainer = creatAppContainer(AppStackNavigator);


