import React, {Component} from 'react';
import FlowView from './FlowView';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.openFile = this.openFile.bind(this);
        this.state ={
            changeCount: 0,
            fileLoaded: false,
            fileContent: null
        };
    }


    render() {
        console.log(`fileLoaded:${this.state.fileLoaded} `);
        const flowview = this.state.fileLoaded ?
            (<FlowView diagram={this.state.fileContent} containerId="canvas"/>):
            (<p>No file loaded</p>);

        return (<div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <input type="file" id="file_opener" ref="fileOpener" onChange={this.openFile}/>
            {flowview}
        </div>);
    }

    openFile(e) {

        const reader = new FileReader();

        reader.onload = () => {
            let newState = this.state;
            const text = reader.result;
           if(text){
            console.log('File content loaded: ');
            console.log( text.substring(0, 50) );
            newState.fileContent = text;
            newState.fileLoaded = true;
           } else {
               newState.fileLoaded = false;
           }

           newState.changeCount++;
            this.setState(newState);
        };

        reader.readAsText(e.target.files[0]);
        console.log('changed!' + this.state.changeCount);
    }
}

export default App;
