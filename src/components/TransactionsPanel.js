import React, { useRef, useState } from 'react'
import {
  Text, 
  View, 
  StyleSheet, 
  Image, 
  TouchableWithoutFeedback,
  TouchableOpacity, 
  Animated, 
  FlatList,
  Dimensions,
} from 'react-native'

import SlidingUpPanel from 'rn-sliding-up-panel'
import Icon from 'react-native-vector-icons/Ionicons'

import { users } from '../data/homeData'
const { height } = Dimensions.get('window')

export default () => {
  const [dragRange, setDragRange] = useState({
    top: height - 80,
    bottom: 160
  })  
  const _draggedValue = new Animated.Value(180)
  const ModalRef = useRef(null)

  return (
    <View style={styles.container}>
      <SlidingUpPanel 
        ref={ModalRef}
        draggableRange={dragRange}
        animatedValue={_draggedValue}
        backdropOpacity={0}
        snappingPoints={[360]}
        height={height + 20}
        friction={0.9}
      >
        <View style={styles.panel}>
          <View style={styles.panelHandle}></View>
          <View>
            <Text style={styles.panelTitle}>Transacciones Recientes</Text>
          </View>

          <View style={styles.panelListContainer}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={users}
              keyExtractor={item => item.key}
              renderItem={({ item }) => (
                <View style={styles.panelItemContainer}>
                  <View style={styles.userPanelInfoItem}>
                    <View style={{ marginRight: 10 }}>
                      <Image source={{ uri: item.userImage }} style={styles.panelItemImg} />
                    </View>
                    <View>
                      <Text style={{ fontSize: 16, color: "#fff" }}>
                        {item.userName}
                      </Text>
                      <Text style={{ fontSize: 11, color: "#fff" }}>
                        {item.transactionDate}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.amountItemContainer}>
                      <Text style={styles.amountItem}>{item.amount}</Text>
                      {item.credit ? (
                        <Icon name="ios-caret-up" size={16} color={"green"} />
                      ): (
                        <Icon name="ios-caret-down" size={16} color={"#ff3838"} />
                      )}
                    </View>
                </View>
              )}
            />
          </View>
          <View style={styles.footerContainer}>
            <TouchableOpacity style={styles.panelButton}>
              <Text style={styles.panelButtonText}>Historial Completo</Text>
            </TouchableOpacity>
          </View>

        </View>
      </SlidingUpPanel>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  panel: {
    flex: 1,
    backgroundColor: "#141414",
    borderRadius: 24,
    padding: 14,
  },
  panelHandle: {
    height: 5,
    width: 50,
    backgroundColor: "#333333",
    borderRadius: 6,
    alignSelf: 'center',
    marginTop: 2,
  },
  panelTitle: {
    color: "#fff",
    marginVertical: 16,
    fontSize: 16,
    paddingTop: 10,
  },
  panelListContainer: {
    height: 500,
    paddingBottom: 15,
  },
  panelItemContainer: {
    borderWidth: 0.6,
    borderColor: "#333333",
    padding: 14,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  panelItemImg: {
    width: 32,
    height: 32,
    backgroundColor: "#000",
    borderRadius: 40,
  },
  userPanelInfoItem: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  amountItem: {
    fontSize: 16, 
    color: "#fff",
    marginHorizontal: 5,
  },
  amountItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  panelButton: {
    padding: 14,
    justifyContent: 'center',
    backgroundColor: '#333333',
    borderRadius: 10,
    width: 200,
  },
  panelButtonText: {
    fontSize: 16,
    color: "#fff",
    alignSelf: 'center',
  }
})