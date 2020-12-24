import React, { useState, useRef } from 'react'
import {
  Text, 
  View, 
  StyleSheet, 
  Image, 
  Dimensions,
  StatusBar,
} from 'react-native'

import CardsCarousel from '../components/CardsCarousel'
import SendMoney from '../components/SendMoney'
import TransactionsPanel from '../components/TransactionsPanel'

import { user } from '../data/homeData'

export default () => {

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      {/** header welcome text & profile image */}
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeTxt}>Bienvenido de vuelta,</Text>
          <Text style={styles.nameTxt}>{`${user.firstname} ${user.lastname}`}</Text>
        </View>  
        <View>
          <Image source={{ uri: user.img }} style={styles.profileImg} />
          <View style={styles.profileImgNotification}></View>
        </View>
      </View>

      <CardsCarousel />

      <SendMoney />

      <TransactionsPanel />
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 14,
  },  
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 40, 
  },
  welcomeTxt: {
    fontSize: 22,
    color: "#fff"
  },
  nameTxt: {
    fontSize: 22,
    color: "#fff",
    opacity: 0.5,
  },
  profileImgNotification: {
    height: 12,
    width: 12,
    backgroundColor: "red",
    borderRadius: 6,
    position: 'absolute',
    right: 6,
    borderWidth: 2,
    borderColor: '#000',
  },
  
})