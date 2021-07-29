import React, { Component } from 'react'
import { Text, View, SafeAreaView, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Icon from 'react-native-vector-icons/AntDesign'
import Lorem from 'react-native-lorem-ipsum'
import { Button, Divider, Input } from 'react-native-elements'

import { getDataList, setDataDisable } from '../Action/Action'

class DetailScreen extends Component {
  logoOne = require("../icons/Group.png")
  logoTwo = require("../icons/Frame.png")

  constructor(props) {
    super(props)
    this.state = {
      string1: '',
      string2: '',
      string3: ''
    }
  }
  async componentDidMount() {
      this.setState({
          string1: <Lorem count={10} generate='words' />,
          string2: <Lorem count={50} generate='words' />,
          string3: <Lorem count={60} generate='words' />,
      })
  }

  render() {
    return (
      <View style={{flex:1, height:600, alignItems:'center'}}>
        <View style={{ flexDirection: 'row', width: 350,marginTop:30, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
          <Icon name='left' color='#767676' size={(40)} onPress={() => this.props.navigation.navigate('Home')} />
          <Text style={{ ...styles.text, marginLeft: 40 }}>Hellow Hudson</Text>
        </View>

        <View style={{ marginTop:100, width: 300, justifyContent: 'flex-start', alignItems: 'center', height: 500,  borderTopColor: 'green', borderTopWidth: 2, borderBottomColor: 'green', borderBottomWidth: 2  }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', marginBottom:10 }}>Lorem Ipsum</Text>
            <Divider style={{ backgroundColor: 'transparent', height: 20 }} />
            <Text style={{justifyContent:'flex-start', textTransform: 'capitalize'}}>{this.state.string1}</Text>
            <Divider style={{ backgroundColor: 'transparent', height: 20 }} />
            <Text style={{justifyContent:'flex-start', textTransform: 'capitalize'}}>{this.state.string2}</Text>
            <Divider style={{ backgroundColor: 'transparent', height: 20 }} />
            <Text style={{justifyContent:'flex-start', textTransform: 'capitalize'}}>{this.state.string3}</Text>
        </View>

          
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  },
  buttonContainer: {
    backgroundColor: '#222',
    borderRadius: 5,
    padding: 10,
    margin: 20
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  }
})


export default (DetailScreen)

