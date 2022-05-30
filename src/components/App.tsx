import './app.scss'
import React, { useEffect, useState } from 'react'
import BoardComponent from './BoardComponent/BoardComponent';
import { Board } from '../models/Board';
import { Player } from '../models/Player';
import { Colors } from '../models/Colors';


const App: React.FC = () => {
    const [board, setBoard] = useState(new Board())
    const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE))
    const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
    const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

    useEffect(() => {
        restart();
    },[])

    function restart() {
        const newBoard = new Board();
        newBoard.initCells();
        newBoard.addFigures();
        setCurrentPlayer(whitePlayer);
        setBoard(newBoard);
    }

    function swapPlayer() {
        setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
    }

    return (
        <div className="app">
            <div className="tooltip">
                <button onClick={restart}>Restart</button>
            </div>
            <div className="content">
                <div>
                    <h3>{`Сейчас ходит: ${currentPlayer?.color.toUpperCase()}`}</h3>
                    <BoardComponent 
                        board={board}
                        setBoard={setBoard}
                        currentPlayer={currentPlayer}
                        swapPlayer={swapPlayer}
                    />
                </div>
            </div>
        </div>
        
        
    );
};

export default App;
  
  