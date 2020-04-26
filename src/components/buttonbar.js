
import React, {Component} from 'react';
import {Button,Row,Col,ToggleButton,ButtonGroup,ToggleButtonGroup} from 'react-bootstrap';


class ButtonBar extends Component{

    render(){
        return(
            <>
            <Row style={{ paddingBottom: "1vh", textAlign: "center"}}>
                    <Col xs={12} style={{fontSize: "35px"}}>
                        THIS IS THE GAME OF LIFE
                    </Col>
                </Row>
            <Row>

            <Col style={{paddingBottom: "2vh"}} xs={3} sm={3} md={3}>
            <ButtonGroup className="mb-2">
            <Button variant="outline-dark" onClick={() => this.props.nextGeneration()}>Next Step</Button>
            <Button variant="outline-dark" onClick={() => this.props.clearGrid()}>Clear</Button>
            </ButtonGroup>
            </Col>

            <Col xs={3} sm={3} md={3}>
            <ToggleButtonGroup type="checkbox" >
            <ToggleButton value={1} variant="outline-dark" toggle="true" onChange={() => this.props.automaticGrid()}>Auto</ToggleButton>
            <ToggleButton value={2} variant="outline-dark" toggle="true" onChange={() => this.props.setColorMode()}>Color</ToggleButton>
            </ToggleButtonGroup>
            </Col>

            <Col sm={3} md={3} xs={3}>
            <div className="dropdown">
            <button className="dropbtn">Presets</button>
            <div className="dropdown-content">
            <div className="the-content" onClick={() => this.props.onGliderPreset("GliderGun")}>GliderGun</div>
            <div className="the-content" onClick={() => this.props.onGliderPreset("Oscillators")}>Oscillators</div>
             <div className="the-content" onClick={() => this.props.onGliderPreset("Spaceships")}>Spaceships</div>
             <div className="the-content" onClick={() => this.props.setPsykosisGrid()}>Boxes</div>
            </div>
            </div>
            </Col>

            <Col className="text-right"  sm={3} md={3} xs={3} style={{paddingBottom: "2vh"}}>
            <Button variant="outline-dark" onClick={() => this.props.onRules()}>Info</Button>
            </Col>
            </Row>
            </>
        )
    }
}
export default ButtonBar