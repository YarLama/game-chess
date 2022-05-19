import React from 'react'
import { Cell } from '../../models/Cell';
import logo from '../../assets/black-king.png'

interface CellProps {
    cell: Cell;
}

const CellComponent: React.FC<CellProps> = ({cell}) => {

    return (
        <div className={['cell', cell.color].join(' ')}>
            <img src={logo}/>
        </div>
        
    );
};

export default CellComponent;
  
  