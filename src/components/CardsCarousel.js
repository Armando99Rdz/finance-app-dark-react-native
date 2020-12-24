import React, { useRef } from 'react'
import {
  Text, 
  View, 
  StyleSheet,
  Dimensions, 
  TouchableOpacity,
} from 'react-native'

import Carousel from 'react-native-snap-carousel'
import LinearGradiant from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons'

import { carouselData } from '../data/homeData'

const { width } = Dimensions.get('window')

export default () => {
  const carouselRef = useRef(null);

  /** render item of cards carousel */
  const RenderItem = ({ item }) => (
    <TouchableOpacity>
      <LinearGradiant 
        colors={[...item.colors]}
        style={styles.card}
      >
        <Text style={styles.cardBrand}>{item.brand}</Text>
        <View style={styles.cardDetails}>
          <View style={styles.cardName}>
            <Icon name="ios-wallet" size={24} style={styles.iconWallet} />
            <Text style={styles.cardText}>{item.text}</Text>  
          </View>
          <View styles={styles.cardNumber}>
            <View>
              <Text style={styles.dots}>{`.... .... ....`}</Text>
            </View>
            <View>
              <Text style={styles.cardEnding}>{item.ending}</Text>
            </View>
          </View>
        </View>
      </LinearGradiant>
    </TouchableOpacity>
  )

  return (
    <View style={{ }}>
      <Carousel
        layout={"tinder"}
        ref={carouselRef}
        data={carouselData}
        renderItem={RenderItem}
        sliderWidth={width}
        itemWidth={width - 40}
        swipeThreshold={100}
        layoutCardOffset={-12}
        inactiveSlideOpacity={0.4}
        containerCustomStyle={{
          overflow: 'visible',
          marginVertical: 30,
        }}
        contentContainerCustomStyle={{
          paddingTop: 14,
        }}
        loop={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    height: 200, 
    width: width - 40, 
    borderRadius: 10,
    padding: 20,
  },
  cardBrand: {
    textAlign: 'right',
    fontSize: 29,
    fontWeight: 'bold',
    color: "rgba(255,255,255,0.3)",
  },
  cardDetails: {
    marginTop: 'auto',
    paddingBottom: 15,
  },
  cardName: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 15,
  },
  iconWallet: {
    color: "rgba(255,255,255,0.3)",
  },
  cardText: {
    marginLeft: 10,
    fontSize: 21,
    fontWeight: '700',
    color: "#fff",
    opacity: 0.8,
    letterSpacing: 2,
  },
  cardNumber: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  }, 
  dots: {
    paddingVertical: 0,
    lineHeight: 20,
    fontSize: 56,
    color: '#fff',
    opacity: 0.7,
  },
  cardEnding: {
    marginLeft: 4,
    fontSize: 18,
    color: "#fff",
    fontWeight: '700',
  }
})