import React, { useEffect, useState } from 'react'
import { Board } from '../../models/Board';
import { Cell } from '../../models/Cell';
import { Player } from '../../models/Player';
import CellComponent from '../CellComponent/CellComponent';

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
    currentPlayer: Player;
    swapPlayer: () => void;
}

const BoardComponent: React.FC<BoardProps> = ({board , setBoard, swapPlayer, currentPlayer}) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

    function moveHandler(cell: Cell) {
        if(selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell);
            setSelectedCell(null);
            swapPlayer();
        }
    }

    function selectHandler(cell: Cell) {
        if(cell.figure?.color === currentPlayer.color) setSelectedCell(cell);
    }

    function highLightCells() {
        board.highLightCells(selectedCell);
        updateBoard();
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }

    useEffect(() => {
        highLightCells()
    },[selectedCell])

    return (
        <div className="board">
            {board.cells.map((row, index) => 
                <React.Fragment key={index}>
                    {row.map(cell => 
                        <CellComponent 
                            cell={cell}
                            select={selectHandler}
                            move={moveHandler}
                            selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                            key={cell.id}
                        />
                    )}
                </React.Fragment>
            )}
        </div>
        
    );
};

export default BoardComponent;
  
  