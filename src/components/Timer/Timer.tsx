import React, { FC, useEffect, useRef, useState } from 'react';
import { Colors } from '../../models/Colors';
import { Player } from '../../models/Player';

interface TimerProps {
    currentPlayer: Player;
    restart: () => void;
}

const Timer: FC<TimerProps> = ({currentPlayer, restart}) => {

    const [blackTime, setBlackTime] = useState<number>(5);
    const [whiteTime, setWhiteTime] = useState<number>(5);
    const timer = useRef<null | ReturnType<typeof setInterval>>(null);

    useEffect(() => {
        startTimer();
    }, [currentPlayer])

    useEffect(() => {
        if (blackTime === 0 || whiteTime === 0) winGame(currentPlayer.color === Colors.WHITE ? Colors.BLACK : Colors.WHITE);
    }, [blackTime, whiteTime])

    function startTimer() {
        if(timer.current) {
            clearInterval(timer.current);
        }
        const callback = currentPlayer?.color === Colors.BLACK ? decrementBlackTimer : decrementWhiteTimer;
        timer.current = setInterval(callback, 1000)
    }

    function handleRestart() {
        setBlackTime(5);
        setWhiteTime(5);
        restart();
    }
    
    function decrementBlackTimer() {
        setBlackTime(prev => prev - 1);
    }

    function decrementWhiteTimer() {
        setWhiteTime(prev => prev - 1);   
    }

    function winGame(color : Colors) {
        console.log(`${color} выйграл`);
        handleRestart();
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