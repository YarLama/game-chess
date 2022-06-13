import './app.scss';
import React, { useEffect, useState } from 'react'
import BoardComponent from './BoardComponent/BoardComponent';
import { Board } from '../models/Board';
import { Player } from '../models/Player';
import { Colors } from '../models/Colors';
import LostFigures from './LostFigures/LostFigures';

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
                <h3>{`Сейчас ходит: ${currentPlayer?.color.toUpperCase()}`}</h3>
            </div>
            <div className="content">
                
                <div>
                    <BoardComponent 
                        board={board}
                        setBoard={setBoard}
                        currentPlayer={currentPlayer}
                        swapPlayer={swapPlayer}
                    />
                </div>
                <div>
                    <LostFigures 
                        title='Белые фигуры'
                        figures={board.lostWhiteFigures}
                    />
                    <LostFigures 
                        title='Черные фигуры'
                        figures={board.lostBlackFigures}
                    />
                </div>
            </div>
            
        </div>
        
        
    );
};

export default App;
  
  