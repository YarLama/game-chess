import React from 'react'
import { Cell } from '../../models/Cell';

interface CellProps {
    cell: Cell;
    selected: boolean;
    select: (cell: Cell) => void;
    move: (cell: Cell) => void;
}

const CellComponent: React.FC<CellProps> = ({cell, selected, select, move}) => {


    const clickHadler = (cell: Cell) => {
        select(cell);
        move(cell);
    }

    return (
        <div 
            className={[
                'cell', 
                cell.color, 
                selected ? 'selected' : '', 
                (cell.available && cell.figure) ? 'available_figure' : ''
            ].join(' ')}
            onClick={() => clickHadler(cell)}
        >
            {cell.available && !cell.figure && <div className={'available'} />}
            {cell.figure?.logo && <img src={cell.figure.logo} alt={cell.figure.name}/>}
        </div>
        
    );
};

export default CellComponent;
  
  