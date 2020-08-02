
import React from 'react';
import {Colors, DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import Home from "./pages/Home";
import Login from "./pages/Login";




const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#013531',
        accent: '#1261C7',
        text:'black'
    },
};




export default function App() {


  return (
      <PaperProvider theme={theme}>
          <Login/>
      </PaperProvider>
  );
}



