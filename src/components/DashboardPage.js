import React, {Component} from 'react';
import FlowView from './FlowView';

class DashboardPage extends Component {
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
      const flowview = this.state.fileLoaded ? (<FlowView diagram={this.state.fileContent} containerId="canvas"/>) : (<p></p>);
      
      return (
      <div className="container">
        <div className="jumbotron center">
          <h1 className="display-4 text-center font-weight-bold pb-3">TRAMODANA</h1>
          <h3 className="text-center font-weight-light pb-5">The monitoring platform for your business processes.</h3>
            <div className="row justify-content-md-center">
              <div className="col-2">
                <img className="icon-checkmark" src="/images/check.png" />
                <p className="text-center font-weight-bold">Model</p>
              </div>
              <div className="col-2">
                <img className="icon-checkmark" src="/images/check.png" />
                <p className="text-center font-weight-bold">Measure</p>
              </div>
              <div className="col-2">
                <img className="icon-checkmark" src="/images/check.png" />
                <p className="text-center font-weight-bold">Improve</p>
              </div>
            </div>
        </div>
        <div className="row justify-content-md-center">
          <label for="file">Choose a File
            <input type="file" name="file" className="inputfile" id="file_opener" ref="fileOpener" onChange={this.openFile}/>
          </label>
        </div>
        <div className="row justify-content-md-center">{flowview}</div>
      </div>
    );
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



export default DashboardPage;
