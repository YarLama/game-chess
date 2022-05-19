import React from 'react'
import { Cell } from '../../models/Cell';

interface CellProps {
    cell: Cell;
    selected: boolean;
    select: (cell: Cell) => void;
}

const CellComponent: React.FC<CellProps> = ({cell, selected, select}) => {

    return (
        <div 
            className={['cell', cell.color, selected ? 'selected' : ''].join(' ')}
            onClick={() => select(cell)}
        >
            {cell.figure?.logo && <img src={cell.figure.logo} alt={cell.figure.name}/>}
        </div>
        
    );
};

export default CellComponent;
  
  