import React from 'react';
import BpmnModdle from 'bpmn-moddle';
import FlowView from './FlowView';

class BpmnValidator extends React.Component {

    render() {
        let parsedContent = <h1> No file loaded </h1>;
        const fileContent = this.props.fileContent;
        if(!fileContent)
        {

        }
        const moddle = new BpmnModdle();


        moddle.fromXML(fileContent, (err) => {
            if (err) {
                console.error('Cannot parse content to BPMN 2.0: ', err);
                parsedContent = <p> Not a BPMN diagram </p>;
            } else {

                console.log('success, sending content over to flowview');
                console.log(fileContent.substring(0, 200) + '...');
                parsedContent = <FlowView diagram={fileContent} containerId={this.props.containerId}/>;
            }
        });

        return parsedContent;
    }
}

export default BpmnValidator;