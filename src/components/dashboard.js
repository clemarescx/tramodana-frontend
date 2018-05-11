import React, {Component} from 'react';
import FlowView from './flowView';

class Dashboard extends Component {
  constructor() {
    super();
    this.openFile = this.openFile.bind(this);
    this.state ={
      fileContent: 'nothing here'
    };
  }

  renderFlowView(){
    if(this.state.fileContent != 'nothing here'){
      return <FlowView diagramXML={this.state.fileContent} containerId="canvas"/>
    }else return <p>Select a file</p>
  }

  render() {
      return (
      <div className="dashboard-container">
        <div className="row justify-content-md-center">
          <label className="choose-file-label" htmlFor="file">Choose a File
            <input type="file" name="file" className="choose-file-btn" id="file_opener" ref="fileOpener" onChange={this.openFile}/>
          </label>
        </div>
        <div className="row justify-content-md-center">{this.renderFlowView()}</div>
      </div>
    );
  }

  openFile(e) {
    //This is fucked up yooo
    const reader = new FileReader();

    reader.onload = () => {
      const text = reader.result;
      this.setState({
        fileContent : text,
      })
    };

    reader.readAsText(e.target.files[0]);
    console.log("this is the state from dashboard: " + this.state.fileContent)
    this.renderFlowView();
  }

}



export default Dashboard;
