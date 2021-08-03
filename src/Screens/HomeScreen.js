import React, { Component } from 'react'
import { Text, View, SafeAreaView, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Icon from 'react-native-vector-icons/AntDesign'

import { getDataList, setDataList, setDataDisable, setDataVisible } from '../Action/Action'

import Loader from '../Common/Loader'

class HomeScreen extends Component {
  logoOne = require("../icons/Group.png")
  logoTwo = require("../icons/Frame.png")

  constructor(props) {
    super(props)
    this.state = {
      showLoader: true
    }
  }
  componentDidMount() {
    this.props.getDataList()
    console.log(this.props.dataList)
    setTimeout(() => {
      this.setState({ showLoader: false })
    }, 1500)
    
    
  }

  render() {
    if (this.state.showLoader) {
      return (<Loader />)
    }
    if (this.props.dataList.length != 0) {
      return (
        <View style={styles.container}>
          <View style={{ flexDirection: 'row', width: 350, justifyContent: 'flex-start', alignItems: 'center', height: 60 }}>
            <Icon name='left' color='#767676' size={(40)} onPress={() => this.props.navigation.navigate('Login')} />
            <Text style={{ ...styles.text, marginLeft: 40 }}>Welcome Hudson</Text>
          </View>
  
          <View style={styles.container}>
            <FlatList
              data={this.props.dataList}
              extraData={this.state}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) =>
                <View style={{ flexDirection: 'row', width: 330, paddingHorizontal: 5, paddingVertical: 15, marginBottom: 10 }}>
                  {(() => {
                    if (item.id % 2 == 0) {
                      return (
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')}>
                          <View style={{ flexDirection: 'row', width: 300, justifyContent: 'center', alignItems: 'center', height: 50, borderBottomColor: 'grey', borderBottomWidth: 2, borderTopColor: 'grey', borderTopWidth: 2 }}>
                            <Image style={{ width: 30, height: 30 }} source={this.logoOne} resizeMode='contain' />
                            <View style={{ flexDirection: 'column', marginLeft: 5, width: 120, justifyContent: 'center', alignItems: 'center', height: 60 }}>
                              <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Name</Text>
                              <Text style={{ fontSize: 10 }}>{item.name}</Text>
                            </View>
                            <View style={{ flexDirection: 'column', marginLeft: 5, width: 150, justifyContent: 'center', alignItems: 'center', height: 60 }}>
                              <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Email</Text>
                              <Text style={{ fontSize: 10 }}>{item.email}</Text>
                            </View>
                          </View>
                        </TouchableOpacity>
                      )
                    } else {
                      return (
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')}>
                          <View style={{ flexDirection: 'row', width: 300, justifyContent: 'center', alignItems: 'center', height: 50, borderBottomColor: 'green', borderBottomWidth: 2, borderTopColor: 'green', borderTopWidth: 2 }}>
                            <Image style={{ width: 30, height: 30 }} source={this.logoOne} resizeMode='contain' />
                            <View style={{ flexDirection: 'column', marginLeft: 5, width: 120, justifyContent: 'center', alignItems: 'center', height: 60 }}>
                              <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Name</Text>
                              <Text style={{ fontSize: 10 }}>{item.name}</Text>
                            </View>
                            <View style={{ flexDirection: 'column', marginLeft: 5, width: 150, justifyContent: 'center', alignItems: 'center', height: 60 }}>
                              <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Email</Text>
                              <Text style={{ fontSize: 10 }}>{item.email}</Text>
                            </View>
                          </View>
                        </TouchableOpacity>
                      )
                    }
                  })()}
                </View>
              } />
          </View>
        </View>
      )
    } else {
      return (
        <View>
          <Text>Something wrong</Text>
        </View>
      )
    }
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

const mapStateToProps = ({ TestReducer }) => {
  const { dataList, dataListLoad, dataVisible } = TestReducer
  return {
    dataList, dataListLoad, dataVisible
  }
}

const dispatchToProps = dispatch => {
  return bindActionCreators({
    getDataList,
    setDataDisable
  }, dispatch)
}

export default connect(mapStateToProps, dispatchToProps)(HomeScreen)
// export default (HomeScreen)

