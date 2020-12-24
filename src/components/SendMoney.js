import React, { useRef } from 'react'
import {
  Text, 
  View, 
  StyleSheet, 
  Image, 
  TouchableOpacity,  
  FlatList,
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

import { users } from '../data/homeData'

export default () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enviar Dinero</Text>
      <View style={styles.carouselContainer}>

        {/** add user btn */}
        <TouchableOpacity style={styles.addUser}>
          <View style={styles.addUserIconBg}>
            <Icon name="ios-add" size={28} color={"white"} style={styles.iconAdd} />
          </View>
          <Text style={styles.addUserTxt}>Agregar</Text>
        </TouchableOpacity>

        {/** users flatlist */}
        <FlatList 
          horizontal
          data={users}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <View style={styles.addUser}>
              <Image source={{ uri: item.userImage }} style={styles.addUserIconBg} />
              <Text style={styles.userName}>{item.userName}</Text>
            </View>
          )}
        />

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
  },
  title: {
    fontSize: 16,
    color: "#fff",
    opacity: 0.6,
    marginBottom: 10,
  },
  carouselContainer: {
    flexDirection: 'row',
  },
  addUser: {
    height: 140,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#141414",
    borderRadius: 10,
    marginRight: 12,
  },
  addUserIconBg: {
    width: 60,
    height: 60,
    backgroundColor: "#000",
    borderRadius: 10,
    marginBottom: 12,
    justifyContent: 'center',
  },
  iconAdd: {
    alignSelf: 'center',
  },
  addUserTxt: {
    color: '#fff',
  },
  userName: {
    color: '#fff',

  }
})