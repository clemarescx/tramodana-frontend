import React, { Component } from 'react';

//Components
import AppRouter, { history } from '../routers/appRouter';


//Libraries
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component{

    constructor(props){
        super(props)

        this.state = {
            menuIsOpen: false,
            currentView: "greeting"
        }
    }

    /*------HANDLE MENU------*/
        //Close menu
        handleMenuClose = () =>{
            this.setState({menuIsOpen: false})
        }
    
        //Toggle menu open state
        toggleMenu = () =>{
            this.setState({menuIsOpen: !this.state.menuIsOpen})
        }
    /*------HANDLE MENU------*/

    /*------HANDLE CURRENT VIEW------*/

    render(){
        return(
            <MuiThemeProvider>
                <div className="app">    
                    <AppRouter/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;