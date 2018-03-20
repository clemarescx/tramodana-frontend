import React from 'react'
import BpmnViewer from 'bpmn-js'


/**
 * Integration of BPMN-JS viewer into ReactJS
 * Credit: user 'diegochavez'
 * Source: https://stackoverflow.com/questions/42708361/integrating-bpmn-js-to-modeler-the-react-component
 */
class FlowView extends React.Component {
    constructor(props) {
        super(props);
        this.viewer = new BpmnViewer();
        this.generateId= props.containerId;
        this.state = {
            diagramXML: props.diagram
        };
    }

    render() {
        return <div id={this.generateId}></div>;
    }

    componentWillReceiveProps(nextProps) {
        //if (this.diagramXML !== nextProps.diagramXML) {
        this.setState({diagramXML: nextProps.diagramXML});
        if (this.state.diagramXML)
        {
            console.log('diagram not null!');
            this.viewer.destroy();
            this.viewer = new BpmnViewer({container: '#'+this.generateId});
            this.importXML(this.state.diagramXML, this.viewer);
        }
        //}
    }

    componentDidMount() {
        this.viewer.attachTo('#' + this.generateId);
        // import xml
        this.importXML(this.state.diagramXML, this.viewer);
    }

    // import function
    importXML(xml, _viewer) {

        let generateId = this.generateId;
        // import diagram
        _viewer.importXML(xml, function (err) {
            if (err) {
                return console.error('could not import BPMN 2.0 diagram', err);
            }

            console.log('generateId: ' + generateId);
            const canvas = _viewer.get(generateId);

            // zoom to fit full viewport
            canvas.zoom('fit-viewport');
        });
    }

}

export default FlowView;