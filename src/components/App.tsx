import './app.scss'
import React, { useEffect, useState } from 'react'
import BoardComponent from './BoardComponent/BoardComponent';
import { Board } from '../models/Board';


const App: React.FC = () => {
    const [board, setBoard] = useState(new Board())

    useEffect(() => {
        restart();
    },[])

    function restart() {
        const newBoard = new Board();
        newBoard.initCells();
        newBoard.addFigures()
        setBoard(newBoard);
    }

    return (
        <div className="app">
            <div className="tooltip">
                <button onClick={restart}>Restart</button>
            </div>
            <div className="content">
                <BoardComponent 
                board={board}
                setBoard={setBoard}
                />
            </div>
        </div>
        
        
    );
};

export default App;
  
  