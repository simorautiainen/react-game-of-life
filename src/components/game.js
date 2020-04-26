import React, {Component} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import swal from 'sweetalert';
import ButtonBar from './buttonbar.js'
import Grid from './grid.js'
import {columns, rows,gridWidth} from '../assets/helpervariables.js'
import {presetGrid,calculateNextGeneration,psykosisMaker} from '../assets/helperfunctions.js'

class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            //Creation of 2D array
            grid: Array.from(Array(rows), () =>
            new Array(columns).fill(0)),

            //Switch for automatic grid
            autoSwitch: false,
            colorMode: false,

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
    setColorMode(){
        this.state.colorMode ? this.setState({colorMode:false}) : this.setState({colorMode:true})
    }
    setPsykosisGrid(){
        this.setState({grid: psykosisMaker()})
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
            <Container className="justify-content-md-center" style={{width: gridWidth, marginTop: "1vh",fontFamily: "Inconsolata", fontWeight: "900"}}>
            <ButtonBar
            automaticGrid={() => this.automaticGrid()}
            clearGrid={() => this.clearGrid()}
            onRules={() => this.onRules()}
            onGliderPreset={(preset) => this.onGliderPreset(preset)} 
            nextGeneration={() => this.nextGeneration()}
            setColorMode={() => this.setColorMode()}
            setPsykosisGrid={() => this.setPsykosisGrid()}
            />
            <Row>
            <Col>
            <Grid
            grid={this.state.grid} onClick={(y,x) => this.handleClick(y,x)}
            colorMode={this.state.colorMode}
                />
            </Col>
            </Row>
            </Container>
        )
        }

}

export default Game

