import React, { useState } from 'react'
import { Board } from '../../models/Board';
import { Cell } from '../../models/Cell';
import CellComponent from '../CellComponent/CellComponent';

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
}

const BoardComponent: React.FC<BoardProps> = ({board , setBoard}) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

    function selectHandler(cell: Cell) {
        setSelectedCell(cell);
    }

    return (
        <div className="board">
            {board.cells.map((row, index) => 
                <React.Fragment key={index}>
                    {row.map(cell => 
                        <CellComponent 
                            cell={cell}
                            select={selectHandler}
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
  
  