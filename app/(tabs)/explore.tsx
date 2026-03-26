import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Explore = () => {
  return (
    <View style={styles.container}>
      <Text>Find your own recipes</Text>
    </View>
  )
}

export default Explore

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})