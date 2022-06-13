import React from 'react';
import { Figure } from '../../models/figures/Figure';

interface LostFiguresProps {
    title: string;
    figures: Figure[]
}

const LostFigures: React.FC<LostFiguresProps> = ({title, figures}) => {

    return (
        
        <div className='lost-figures'> 
            <h3>{title}</h3>
            <div className="lost-figures-logo">
                {figures.map(figure => 
                    <div key={figure.id}>
                        {figure.logo && <img src={figure.logo} />}
                    </div>
                )}
            </div>
            <div>
                Всего съеденных фигур:{figures.length}
            </div>
        </div>
        
    );
};

export default LostFigures;
  
  