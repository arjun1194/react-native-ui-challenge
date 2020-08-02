import { Appbar } from 'react-native-paper';
import * as React from 'react';




export default function NavBar(props){

    return (
        <Appbar.Header>
            <Appbar.Action icon="menu" onPress={props.menuButtonClick} />
            <Appbar.Content title={props.title} subtitle={props.subtitle} />
            <Appbar.Action icon="dots-vertical" onPress={props.moreButtonClick} />
        </Appbar.Header>
    )

}
