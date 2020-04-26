import React, {Component} from 'react';
import styled from 'styled-components';
import {gridWidth,gridHeight,rows,columns,colors} from '../assets/helpervariables.js'


const Boxedi = styled.div`
  cursor: pointer;
  background-color: ${props => (props.value === 1 ? props.color : 'white')};
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
                    <Boxedi key={`${y},${x}`} value={this.props.grid[y][x]} onClick={() => this.props.onClick(y,x)}
                    color={this.props.colorMode ? colors[Math.floor(Math.random()*9)] : "#430547"}
                    >
                    </Boxedi>
                    )
                )}

            </div>
        )

        }

}
export default Grid