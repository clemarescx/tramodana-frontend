import React, { Component } from 'react';
import BpmnViewer from 'bpmn-js';

class FlowView extends Component {
  constructor(props) {
    super(props);
    this.viewer = new BpmnViewer(); 
    this.generateId= props.containerId;
}

conponendDidMount(){
  this.renderDiagram();
}

componentWillReceiveProps(){
  this.renderDiagram()
}

renderDiagram(){
  this.viewer.destroy();
  this.viewer = new BpmnViewer({container: '#'+this.generateId});
  this.importXML(this.props.diagramXML, this.viewer);
}

importXML(xml, _viewer) {
  let generateId = this.generateId;

  _viewer.importXML(xml, function (err) {
      if (err) {
        return console.error('could not import BPMN 2.0 diagram', err);
      }
      
      const canvas = _viewer.get(generateId);
      canvas.zoom('fit-viewport');
  });
}

  render() {
    return (
      <div id={this.generateId}></div>
    );
  }
}

export default FlowView;