import React from 'react'
import BpmnViewer from 'bpmn-js'


/**
 * Integration of BPMN-JS viewer into ReactJS
 * Credit: user 'diegochavez'
 * Source: https://stackoverflow.com/questions/42708361/integrating-bpmn-js-to-modeler-the-react-component
 */
class FlowView extends React.Component{
    constructor(props){
        super(props);
        this.viewer = new BpmnViewer();
        this.generateId = 'canvas';
        this.diagramXML= props.diagram;
    }

    render(){
        return <div id={this.generateId}></div>;
    }

    componentWillReceiveProps(nextProps){
        if(JSON.stringify(this.diagramXML) !== JSON.stringify(nextProps.diagramXML)){
            this.diagramXML = nextProps.diagramXML;
            this.importXML(this.diagramXML, this.viewer);
        }
    }

    componentDidMount (){
        this.viewer.attachTo('#'+ this.generateId);


        // const diagramXML =
        // '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<definitions xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:camunda="http://camunda.org/schema/1.0/bpmn" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="definitions_b24f5ee1-2aac-4506-bc61-b1be2d181f24" targetNamespace="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL">\n    <process id="buybook" isExecutable="true">\n        <startEvent id=" buybookEvent" name="Buy book">\n            <outgoing>sequenceFlow_84585147-8bb9-46ac-86a0-fcbfe9c38b55</outgoing>\n        </startEvent>\n        <parallelGateway id="fork" name="Enough money?">\n            <incoming>sequenceFlow_84585147-8bb9-46ac-86a0-fcbfe9c38b55</incoming>\n            <outgoing>sequenceFlow_a50f8b87-cbd4-4bb9-9ff5-dd89ee4d2e41</outgoing>\n            <outgoing>sequenceFlow_af034428-6259-4429-a9c9-a4158acb9f62</outgoing>\n        </parallelGateway>\n        <sequenceFlow id="sequenceFlow_84585147-8bb9-46ac-86a0-fcbfe9c38b55" sourceRef=" buybookEvent" targetRef="fork"/>\n        <serviceTask id="registerBook" name="Register book order">\n            <incoming>sequenceFlow_a50f8b87-cbd4-4bb9-9ff5-dd89ee4d2e41</incoming>\n            <outgoing>sequenceFlow_8d0fedf9-49d1-4e53-9a49-d49c8b293055</outgoing>\n        </serviceTask>\n        <sequenceFlow id="sequenceFlow_a50f8b87-cbd4-4bb9-9ff5-dd89ee4d2e41" sourceRef="fork" targetRef="registerBook"/>\n        <endEvent id="end-with-book" name="Book ordered">\n            <incoming>sequenceFlow_8d0fedf9-49d1-4e53-9a49-d49c8b293055</incoming>\n        </endEvent>\n        <sequenceFlow id="sequenceFlow_8d0fedf9-49d1-4e53-9a49-d49c8b293055" sourceRef="registerBook" targetRef="end-with-book"/>\n        <userTask id="user-cry" name="*user cries*">\n            <incoming>sequenceFlow_af034428-6259-4429-a9c9-a4158acb9f62</incoming>\n            <outgoing>sequenceFlow_46336b81-f828-4b03-952b-574609f5b708</outgoing>\n        </userTask>\n        <sequenceFlow id="sequenceFlow_af034428-6259-4429-a9c9-a4158acb9f62" sourceRef="fork" targetRef="user-cry"/>\n        <endEvent id="end-without-book" name="No book for you!">\n            <incoming>sequenceFlow_46336b81-f828-4b03-952b-574609f5b708</incoming>\n        </endEvent>\n        <sequenceFlow id="sequenceFlow_46336b81-f828-4b03-952b-574609f5b708" sourceRef="user-cry" targetRef="end-without-book"/>\n    </process>\n    <bpmndi:BPMNDiagram id="BPMNDiagram_2aa020f6-c78c-4e33-b013-45f3f416cb52">\n        <bpmndi:BPMNPlane bpmnElement="buybook" id="BPMNPlane_6ee5d474-2faf-457e-abeb-74abc6664bb0">\n            <bpmndi:BPMNShape bpmnElement=" buybookEvent" id="BPMNShape_061ef0c1-ac5d-478f-afae-f93ad5583cea">\n                <dc:Bounds height="36.0" width="36.0" x="100.0" y="100.0"/>\n            </bpmndi:BPMNShape>\n            <bpmndi:BPMNShape bpmnElement="fork" id="BPMNShape_93563aae-ef9b-437d-9537-0e8c61297070">\n                <dc:Bounds height="50.0" width="50.0" x="186.0" y="93.0"/>\n            </bpmndi:BPMNShape>\n            <bpmndi:BPMNEdge bpmnElement="sequenceFlow_84585147-8bb9-46ac-86a0-fcbfe9c38b55" id="BPMNEdge_f4e90b86-1d7f-4638-9ffc-99db0a63473a">\n                <di:waypoint x="136.0" y="118.0"/>\n                <di:waypoint x="186.0" y="118.0"/>\n            </bpmndi:BPMNEdge>\n            <bpmndi:BPMNShape bpmnElement="registerBook" id="BPMNShape_6b68e751-2ca2-47cb-a9bc-f3489865c1ec">\n                <dc:Bounds height="80.0" width="100.0" x="286.0" y="78.0"/>\n            </bpmndi:BPMNShape>\n            <bpmndi:BPMNEdge bpmnElement="sequenceFlow_a50f8b87-cbd4-4bb9-9ff5-dd89ee4d2e41" id="BPMNEdge_63945b62-3b21-4c45-8462-52d2fdd98e5f">\n                <di:waypoint x="236.0" y="118.0"/>\n                <di:waypoint x="286.0" y="118.0"/>\n            </bpmndi:BPMNEdge>\n            <bpmndi:BPMNShape bpmnElement="end-with-book" id="BPMNShape_060c0c8c-134a-4383-b0ab-7bf47283cdd8">\n                <dc:Bounds height="36.0" width="36.0" x="436.0" y="100.0"/>\n            </bpmndi:BPMNShape>\n            <bpmndi:BPMNEdge bpmnElement="sequenceFlow_8d0fedf9-49d1-4e53-9a49-d49c8b293055" id="BPMNEdge_c5f0eb0a-b452-41ff-bb0f-7e35d6de6738">\n                <di:waypoint x="386.0" y="118.0"/>\n                <di:waypoint x="436.0" y="118.0"/>\n            </bpmndi:BPMNEdge>\n            <bpmndi:BPMNShape bpmnElement="user-cry" id="BPMNShape_4f2a1572-4592-40dc-9b00-19e7c4e648c1">\n                <dc:Bounds height="80.0" width="100.0" x="286.0" y="208.0"/>\n            </bpmndi:BPMNShape>\n            <bpmndi:BPMNEdge bpmnElement="sequenceFlow_af034428-6259-4429-a9c9-a4158acb9f62" id="BPMNEdge_801a8a5a-b500-4ff2-b800-8ba830734224">\n                <di:waypoint x="211.0" y="143.0"/>\n                <di:waypoint x="211.0" y="248.0"/>\n                <di:waypoint x="286.0" y="248.0"/>\n            </bpmndi:BPMNEdge>\n            <bpmndi:BPMNShape bpmnElement="end-without-book" id="BPMNShape_15a783f4-1843-4640-918c-662796bb7686">\n                <dc:Bounds height="36.0" width="36.0" x="436.0" y="230.0"/>\n            </bpmndi:BPMNShape>\n            <bpmndi:BPMNEdge bpmnElement="sequenceFlow_46336b81-f828-4b03-952b-574609f5b708" id="BPMNEdge_bf6a2947-031c-41b1-8601-b69db95116f7">\n                <di:waypoint x="386.0" y="248.0"/>\n                <di:waypoint x="436.0" y="248.0"/>\n            </bpmndi:BPMNEdge>\n        </bpmndi:BPMNPlane>\n    </bpmndi:BPMNDiagram>\n</definitions>\n'

    // import xml
        this.importXML(this.diagramXML, this.viewer);
    }

    // import function
    importXML(xml,Viewer) {

        // import diagram
        Viewer.importXML(xml, function(err) {

            if (err) {
                return console.error('could not import BPMN 2.0 diagram', err);
            }

            console.log('update flowview');

            var canvas = Viewer.get('canvas');


            // zoom to fit full viewport
            canvas.zoom('fit-viewport');

        });
    }

}

export default FlowView;