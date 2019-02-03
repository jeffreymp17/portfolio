import React, { Component } from 'react';
import './App.css';
import  Header from './components/Header/header';
import  Menu from './components/menu/menu';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
   palette: {
        primary: {
        main: '#009688',
        },
        secondary: {
          main:'#e64344',
        }
      }
    });
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <div className="App">
        <Header/>
        <Menu />
      </div>
      </MuiThemeProvider>
    );
  }
}
export default App;
