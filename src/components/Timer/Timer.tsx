import React, { FC, useEffect, useRef, useState } from 'react';
import { Colors } from '../../models/Colors';
import { Player } from '../../models/Player';

interface TimerProps {
    currentPlayer: Player;
    restart: () => void;
}

const Timer: FC<TimerProps> = ({currentPlayer, restart}) => {

    const [blackTime, setBlackTime] = useState<number>(300);
    const [whiteTime, setWhiteTime] = useState<number>(300);
    const timer = useRef<null | ReturnType<typeof setInterval>>(null);

    useEffect(() => {
        startTimer();
    }, [currentPlayer])

    function startTimer() {
        if(timer.current) {
            clearInterval(timer.current);
        }
        const callback = currentPlayer?.color === Colors.BLACK ? decrementBlackTimer : decrementWhiteTimer;
        timer.current = setInterval(callback, 1000)
    }

    function handleRestart() {
        setBlackTime(300);
        setWhiteTime(300);
        restart();
    }
    
    function decrementBlackTimer() {
        setBlackTime(prev => prev - 1);
    }

    function decrementWhiteTimer() {
        setWhiteTime(prev => prev - 1);
    }

    return (
        <>
            <button onClick={handleRestart}>Restart</button>
            <h2>{`Сейчас ходит: ${currentPlayer?.color.toUpperCase()}`}</h2>
            <div className='tooltip-timer'>
                <h3>{`W:${whiteTime} B:${blackTime}`}</h3>
            </div>
            
        </>
    );
};

export default Timer;