import React, { Component} from 'react';
import {StyleSheet, View, Text,TouchableOpacity,Platform,ImageBackground} from 'react-native';
import { DrawerItems} from 'react-navigation-drawer'
import {Avatar} from  'react-native-elements';
import firebase from 'firebase';
// import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import db from '../config'

export default class CustomSideBarMenu extends Component{
  constructor(){
    super();
    this.state = {
      name:'',
      image:'#',
      docId:'',
      userId:firebase.auth().currentUser.email
    }
  }
  // selectPicture=async()=>{
  //   const {cancelled,uri}=await ImagePicker.
  // }
  render(){
    return(
      <View style={{flex:1}}>
        <View style = {{flex:0.5,alignItems:'center',backgroundColor:'orange'}}>
          <Avatar
            rounded 
            source = {{
              uri:this.state.image
            }}
            size = {'medium'}
            onPress = {()=>{
              this.selectPicture()
            }}
            containerStyle = {styles.imageContainer}
            showEditButton 
          />
          <Text style = {{fontWeight:'100',fontSize:20,paddingTop:10}}> 
            {this.state.name}
          </Text>
        </View>
        
        <View style={styles.drawerItemsContainer}>
          <DrawerItems {...this.props}/>
        </View>
        <View style={styles.logOutContainer}>
          <TouchableOpacity style={styles.logOutButton}
          onPress = {() => {
              this.props.navigation.navigate('WelcomeScreen')
              firebase.auth().signOut()
          }}>
            <Text style = {styles.logOutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container : {
    flex:1
  },
  drawerItemsContainer:{
    flex:0.8
  },
  logOutContainer : {
    flex:0.2,
    justifyContent:'flex-end',
    paddingBottom:30
  },
  logOutButton : {
    height:30,
    width:'100%',
    justifyContent:'center',
    padding:10
  },
  logOutText:{
    fontSize: 30,
    fontWeight:'bold'
  }
})
