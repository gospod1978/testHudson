import React, { Component } from 'react'
import { Text, View, SafeAreaView, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getDataList, setDataDisable } from '../Action/Action'

class HomeScreen extends Component {
    logo = require("../icons/Group.png")

    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
        console.log(this.props)
    //    const list = this.props.getDataList()
    //     console.log(list)
    }

    render () {
        return (
            <View style={styles.container}>
              <Text style={styles.text}>Home Screen</Text>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('Login')}>
              </TouchableOpacity>
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

const mapStateToProps = ({ Reducer }) => {
    const {dataList, dataListLoad, dataModalType, dataModalTypeText, dataModalInfo, dataVisible } = Reducer
    return {
        dataList, dataListLoad, dataModalType, dataModalTypeText, dataModalInfo, dataVisible
    }
}

const dispatchToProps = dispatch => {
    return bindActionCreators({
        getDataList,
        setDataDisable
    }, dispatch)
}

export default connect(mapStateToProps, dispatchToProps) (HomeScreen)
