import {rows, columns} from './helpervariables.js'
import {spaceships, oscillators, gliderGun} from './presets'

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

function psykosisMaker(){
    let newGrid = Array.from(Array(rows), () =>
    new Array(columns).fill(1))

    for(let y=0;y<rows;y++){
        for(let x=0;x<columns;x++){
            if((y+1)%3==0 || (x+1)%3==0){
                newGrid[y][x]=0;
            }
    }
    }
    return newGrid;
}

export {presetGrid,calculateNextGeneration,psykosisMaker}