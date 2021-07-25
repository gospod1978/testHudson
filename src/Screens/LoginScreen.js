
import React, { Component, Fragment } from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Keyboard,
    Image
} from 'react-native';

import { Button, Divider, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'


class LoginScreen extends Component {
    logo = require("../icons/Frame.png")
    constructor(props) {
        super(props)
        this.state = {
            icon: 'ios-eye-off',
            username: '',
            password: '',
            showPassword: true,
            validate: '',
        }
    }

    showPassword = () => {
        this.setState(
            prevState => ({
                passwordIco: prevState.passwordIco === 'ios-eye' ? 'ios-eye-off' : 'ios-eye',
                showPassword: !prevState.showPassword
            })
        )
    }

    async pressLogin() {
        if (this.state.username == 'Hudson' && this.state.password == 'hudson1234') {
            this.props.navigation.navigate("Home")
        } else {
            this.setState({ validate: 'Username and password aren\'t correct' })
            setTimeout(() => { this.setState({ validate: '', password: '', username: '' }) }, 2000)
        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Fragment>
                    <View style={styles.sectionContainer}>
                        <View style={styles.sectionDescription}>
                            <Image style={{ width: 150, height: 150 }} source={this.logo} resizeMode='contain' />
                            <Divider style={{ backgroundColor: 'transparent', height: 50 }} />
                            <View style={styles.sectionLogin}>
                                <Text style={{ color: 'red' }}>{this.state.validate}</Text>
                                <Input
                                    placeholder={("Username")}
                                    inputStyle={{ height: 70, width: 100 }}
                                    placeholderTextColor='#767676'
                                    textAlign={'center'}
                                    onChangeText={username => this.setState({ username: username })}
                                    keyboardType="email-address"
                                    autoCapitalize='none'
                                    returnKeyType='next'
                                    value={this.state.username}
                                    onSubmitEditing={() => this.passwordInput.focus()}
                                />
                                <Input
                                    ref={ref => { this.passwordInput = ref }}
                                    placeholder={("           Password")}
                                    inputStyle={{ height: 70 }}
                                    placeholderTextColor='#767676'
                                    textAlign={'center'}
                                    rightIcon={<Icon name={this.state.icon} color='#767676' size={(30)} onPress={this.showPassword} />}
                                    rightIconContainerStyle={{ width: 50, height: 50 }}
                                    onChangeText={password => this.setState({ password: password })}
                                    autoCapitalize='none'
                                    returnKeyType="done"
                                    secureTextEntry={this.state.showPassword}
                                    onSubmitEditing={Keyboard.dismiss}
                                />
                            </View>
                            <Divider style={{ backgroundColor: 'transparent', height: 50 }} />
                            <View style={{ height: 50 }}>
                            </View>
                            <Divider style={{ backgroundColor: 'transparent', height: 50 }} />
                            {(() => {
                                if (this.state.username.length > 0 && this.state.password.length > 0) {
                                    return (
                                        <Button
                                            title={"Login"}
                                            buttonStyle={{ width: 300, height: 50 }}
                                            disabled={false}
                                            onPress={() => this.pressLogin()} />
                                    )
                                } else {
                                    return (
                                        <Button
                                            title={"Login"}
                                            buttonStyle={{ width: 300, height: 50 }}
                                            disabled={true}
                                            onPress={() => this.pressLogin()} />
                                    )
                                }
                            })()}
                        </View>
                    </View>
                </Fragment>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    sectionLogin: {
        width: 350,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sectionDescription: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    highlight: {
        fontWeight: '700',
    },
});

LoginScreen.options = {
    topBar: {
        title: {
            text: 'Login',
            color: 'white'
        },
        background: {
            color: '#4d089a'
        }
    }
}

export default LoginScreen;
