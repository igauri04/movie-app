import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity,FlatList } from "react-native";
import {Card} from 'react-native-Elements'
import { RFValue } from "react-native-responsive-fontsize";
import axios from "axios";

export default class PopolarMoviesScreens extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.gedata();
  }

  timeConvert(num) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return `${hours} hrs ${minutes} mins`;
  }

  getdata = () => {
    const url = "http://127.0.0.1:5000/Popular-movies";
    axios
      .get(url)
      .then(async response => {
       this.setState({data:response.data.data})
      })

      .catch(error => {
        console.log(error.message);
      });
  };
  keyExtractor = (item,index) =>index.toString()
  renderItems =({item,index})=>{
      return(
          <Card
          key={`card-${index}`} 
          image={{ uri: item.poster_link }} 
          imageProps={{ resizeMode: "cover" }} 
          featuredTitle={item.title} 
          containerStyle={styles.cardContainer} 
          featuredTitleStyle={styles.title} 
          featuredSubtitle={`${ 
              item.release_date.split("-")[0] } | ${this.timeConvert(item.duration)}`} 
          featuredSubtitleStyle={styles.subtitle}></Card>
      )
  } 
  render(){}