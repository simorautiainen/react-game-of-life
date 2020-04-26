import React, {Component} from 'react';
import {Button, Container,Row,Col,ToggleButton,ButtonGroup,ToggleButtonGroup} from 'react-bootstrap';
import styled from 'styled-components';
import swal from 'sweetalert';
import {spaceships,oscillators,gliderGun} from '../assets/presets.js'

const gridWidth = 1000;
const gridHeight = 650;

const rows = 50;
const columns = Math.round(rows * (gridWidth/gridHeight));

const Boxedi = styled.div`
  cursor: pointer;
  background-color: ${props => (props.value === 1 ? '#430547' : 'white')};
  width: ${gridWidth/columns}px;
  height: ${gridHeight/rows}px;
  border: 1px solid #504E4E;
  padding: 0px;
  margin: 0px;

`;

class Grid extends Component {
    render(){
        return(
            <div style={{
                //makes the squares be in a grid
                display: "grid",
                gridTemplateColumns: `repeat(${columns}, ${gridWidth/columns}px)`
            }}>
                {this.props.grid.map((rows, y) =>
                    rows.map((columns, x) =>
                    <Boxedi key={`${y},${x}`} value={this.props.grid[y][x]} onClick={() => this.props.onClick(y,x)}>
                    </Boxedi>
                    )
                )}

            </div>
        )

        }

}
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

            <Col style={{paddingBottom: "2vh"}} xs={3} sm={3}>
            <ButtonGroup className="mb-2">
            <Button variant="outline-dark" onClick={() => this.props.nextGeneration()}>Next Step</Button>
            <Button variant="outline-dark" onClick={() => this.props.clearGrid()}>Clear</Button>
            </ButtonGroup>
            </Col>

            <Col xs={3} sm={3}>
            <ToggleButtonGroup type="checkbox" >
            <ToggleButton value={1} variant="outline-dark" toggle="true" onChange={() => this.props.automaticGrid()}>Auto</ToggleButton>
            </ToggleButtonGroup>
            </Col>

            <Col xs={3} sm={3}>
            <div className="dropdown">
            <button className="dropbtn">Presets</button>
            <div className="dropdown-content">
            <a onClick={() => this.props.onGliderPreset("GliderGun")}>GliderGun</a>
            <a onClick={() => this.props.onGliderPreset("Oscillators")}>Oscillators</a>
             <a onClick={() => this.props.onGliderPreset("Spaceships")}>Spaceships</a>
            </div>
            </div>
            </Col>

            <Col className="text-right" xs={3} sm={3} style={{paddingBottom: "2vh"}}>
            <Button variant="outline-dark" onClick={() => this.props.onRules()}>Info</Button>
            </Col>
            </Row>
            </>
        )
    }
}
class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            //Creation of 2D array
            grid: Array.from(Array(rows), () =>
            new Array(columns).fill(0)),

            //Switch for automatic grid
            autoSwitch: false,

        }
    }

    intervalID = 0;

    handleClick(y,x){
        let newGrid = [...this.state.grid];
        newGrid[y][x] === 0 ? newGrid[y][x] = 1 : newGrid[y][x] = 0;
        this.setState({grid : newGrid})
    }
    nextGeneration(){
        let copy = [...this.state.grid]
        this.setState({grid : calculateNextGeneration(copy)})
    }
    clearGrid(){
        const clearedGrid = Array.from(Array(rows), () =>
        new Array(columns).fill(0))
        this.setState({grid: clearedGrid})
    }
    automaticGrid(){
        if(!this.state.autoSwitch){
        this.intervalID = setInterval(() =>{
            let copy = [...this.state.grid]
            this.setState({
                grid : calculateNextGeneration(copy)
            })
        },50)
        this.setState({autoSwitch: true})
    }else{
        clearInterval(this.intervalID)
        this.setState({autoSwitch: false})
    }
    }
    onRules(){
        swal({

            button: false,
            text: `
            There are only 4 rules in this game\n
            1. Any live cell with fewer than two live neighbours dies, as if by underpopulation\n
            2. Any live cell with two or three live neighbours lives on to the next generation.\n
            3. Any live cell with more than three live neighbours dies, as if by overpopulation.\n
            4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.\n
            \nUnlike in normal game of life, this version has borders.
            \nYou can modify the presets or make your own shapes just by clicking the squares
            `,
            icon: "info",
        });
    }
    onGliderPreset(preset){
        const newGrid = presetGrid(preset);
        this.setState({grid: newGrid})
    }
    render(){
        return(
            <Container style={{width: gridWidth,marginLeft: "20vw", marginTop: "1vh",fontFamily: "Inconsolata", fontWeight: "900", justifyContent: "center"}}>
            <ButtonBar
            automaticGrid={() => this.automaticGrid()}
            clearGrid={() => this.clearGrid()}
            onRules={() => this.onRules()}
            onGliderPreset={(preset) => this.onGliderPreset(preset)} 
            nextGeneration={() => this.nextGeneration()}
            />
            <Row>
            <Col>
            <Grid
            grid={this.state.grid} onClick={(y,x) => this.handleClick(y,x)}
                />
            </Col>
            </Row>
            </Container>
        )
        }

}

export default Game


function calculateNextGeneration(givengrid){
    let newGrid = Array.from(Array(rows), () =>
    new Array(columns).fill(0))

    for(let y=0;y<rows;y++){
        for(let x=0;x<columns;x++){
            //Now we have every single cell and we start counting next phase
            //Variable in which we count the amount of neighbours of the examined dot
            let neighbourAmount = 0;

            for(let neighbourY=y-1;neighbourY <= y+1;neighbourY++){
                for(let neighbourX = x-1;neighbourX <= x+1;neighbourX++){
                    /*
                    If the neighbour coordinates are the same as the examined dots coordinates we skip the neighbourcheck.
                    We also skip the check if we go overbounds in our 2D Array
                    */
                    if(((neighbourY === y && neighbourX === x)) || neighbourY < 0 || neighbourY > (rows-1) || neighbourX < 0 || neighbourX > (columns-1)){
                        continue;
                    }
                    else if(givengrid[neighbourY][neighbourX] === 1){
                        neighbourAmount++;
                    };
                    
                }
            }
            
            if ((neighbourAmount === 2 || neighbourAmount === 3) && (givengrid[y][x] === 1)){
                newGrid[y][x] = 1
                
            }else if ((neighbourAmount===3) && givengrid[y][x] === 0){
                newGrid[y][x] = 1
            }else{
                newGrid[y][x] = 0
            }
        }
    }
    return newGrid;
}

function presetGrid(wantedPreset){
    //We get gliderGun, oscillators and spaceships from file presets.js which is imported above.
    let newGrid = Array.from(Array(rows), () =>
    new Array(columns).fill(0))

    if(wantedPreset === "GliderGun"){
    for(let i = 0;i<gliderGun.length;i++){
        let dot = gliderGun[i];
        let dotY = dot[0];
        let dotX = dot[1];
        newGrid[dotY][dotX] = 1
    }}else if(wantedPreset === "Oscillators"){
        for(let i = 0;i<oscillators.length;i++){
            let dot = oscillators[i];
            let dotY = dot[0];
            let dotX = dot[1];
            newGrid[dotY][dotX] = 1
        }
    }else if(wantedPreset === "Spaceships"){
        for(let i = 0;i<spaceships.length;i++){
            let dot = spaceships[i];
            let dotY = dot[0];
            let dotX = dot[1];
            newGrid[dotY][dotX] = 1
        }
    }
    return newGrid;
}