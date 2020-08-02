import React from 'react';
import {Avatar, Headline, Paragraph, useTheme} from "react-native-paper";
import {View,StyleSheet} from "react-native";
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function LoginHeader() {

    const { colors } = useTheme();
    const styles = StyleSheet.create({
        headerArea: {
            height: 300,
            backgroundColor: colors.primary,
            paddingTop: 30,

            flexDirection: 'column'
        },
        headerCaption: {
            fontSize: 16,
            color: 'white',
            opacity:0.6,
            marginLeft: 30
        },
        headerMain:{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'white',
            marginLeft: 30
        },
        addCurve: {
            height: 50,
            width: '100%',
            position: 'absolute',
            bottom: 0,
            backgroundColor: '#fafafa',
            borderTopLeftRadius: 200,
            borderTopRightRadius: 200
        }
    });

    return (
        <View style={styles.headerArea}>
            {/*<FontAwesome size={125} name="inbox" style={{color: 'white',backgr}}/>*/}
            <FontAwesome name="envelope" size={100} style={{ color: 'white',marginLeft:30,marginTop:20 }} />
            <Paragraph style={styles.headerCaption}>Welcome back</Paragraph>
            <Headline style={styles.headerMain}>Sign in</Headline>
            <View style={styles.addCurve}/>
        </View>
    )
}
