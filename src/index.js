import React from 'react'
import ReactDOM from 'react-dom'
import Node from './components/Node'
import './Index.css'
import { makepuzzle, solvepuzzle} from "sudoku";

var puzzl = makepuzzle()

const puzzleReplaceNull = (puzzle) => {
    const kuzzle = []
    for(let i=0; i<puzzle.length; i++) {
        if(puzzle[i] === null) {
            kuzzle.push(puzzle[i])
        }else {
            kuzzle.push(puzzle[i]+1)
        }
    }
    return kuzzle
}

var puzzle = puzzleReplaceNull(puzzl)
console.log(puzzl)
console.log(puzzle)

var solvedpuzzl = solvepuzzle(puzzl)
var solvedpuzzle = puzzleReplaceNull(solvedpuzzl)
const serializePuzzle= (arr) => {
    console.log(arr)
    const newArr = [];
    while(arr.length) newArr.push(arr.splice(0,9));
    // console.log(newArr)
    return newArr
}

var convertedSolvedPuzzle = serializePuzzle(solvedpuzzle)

const workingArr = serializePuzzle(puzzle)

console.log(workingArr)
const getGrid = (wa) => {
    const grid = [
    for(let i=0; i<9; i++) {
        const currentRow = []
        for(let j=0; j<9; j++) {
            currentRow.push({i, j, isRight: j === 2 || j === 5, term: wa[i][j], isInput: wa[i][j] === null})
        }
        grid.push(currentRow)
    }
    return grid
}
const grid = getGrid(workingArr);

class App extends React.Component {
    
    state = {
            grid: [],
        }
    changeGrid = () => {
    this.setState({grid: getGrid(convertedSolvedPuzzle)})
    }   
    resetGrid = () => {
        this.setState({grid: grid})
    }
    render() {
        const {grid} = this.state
        
        return (
            <div className={`grid`}>
                <h1>SuDoKu by Srikanth</h1>
                {grid.map((row, rowIdx) => {
                    const l = (rowIdx+1)%3 === 0
                    const term = l ? 'last' : ''
                    return (
                        <div key={rowIdx} className={`${term}`}>
                            {row.map((node, nodeIdx) => {
                                const {isRight, term} = node;
                                return <Node num='1' isRight={isRight} term={term} key={nodeIdx}/>
                            })}
                        </div>
                    )
                })}
                <div className='buttons'>
                    <button className='green' onClick={this.changeGrid}>Solve</button>
                    <button className='reset' onClick={this.resetGrid}>Reset</button>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.setState({grid})

    }
}

ReactDOM.render(<App />, document.getElementById('root'))