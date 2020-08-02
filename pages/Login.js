import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StatusBar} from "expo-status-bar";
import {TextInput, Headline, Paragraph, Avatar, Caption,Button,Colors} from "react-native-paper";
import LoginHeader from "../components/Login/LoginHeader";
import {KeyboardAvoidingView} from "react-native";


export default function Login() {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const showAlert = () => {
        alert('hello world')
    };
    const styles = StyleSheet.create({
        main: {
            backgroundColor: '#fafafa', height: '100%',padding:20
        },
    });

    return (
        <View>
            <StatusBar style="auto"/>
            <LoginHeader/>

                <View style={styles.main}>
                    <Caption style={{opacity:0.5}}>Email</Caption>
                    <TextInput
                        mode='outlined'
                        dense
                        value={email}
                        onChangeText={text => setEmail(text)}/>
                    <Caption style={{marginTop:10,opacity:0.5}}>Password</Caption>
                    <TextInput
                        mode='outlined'
                        dense
                        value={password}
                        onChangeText={text => setPassword(text)}/>
                    <View style={{justifyContent:'center'}}>
                        <Button mode="text" color='grey' style={{marginTop:10}} onPress={() => console.log('Pressed')}>
                            Forgot Password?
                        </Button>
                    </View>
                    <Button  mode="contained" style={{padding:10,borderRadius:20,marginTop:25}} onPress={() => console.log('Pressed')}>
                        Sign in
                    </Button>
                    <View style={{flexDirection:'row',padding:20,justifyContent:'center'}}>
                        <View style={{width:'20%',height:1,backgroundColor:Colors.black,marginTop:12,opacity:0.4}}/>
                        <Caption style={{paddingLeft:10,paddingRight:10}}>OR</Caption>
                        <View style={{height:1,width:'20%',backgroundColor:Colors.black,marginTop:12,opacity:0.4}}/>
                    </View>
                </View>
        </View>


    );

}





