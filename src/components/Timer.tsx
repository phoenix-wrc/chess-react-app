import React, {FC, useEffect, useRef, useState} from 'react';
import {Player} from "../model/Player";
import {Colors} from "../model/Colors";

interface TimerProps {
    currentPlayer: Player | null;
    restart: () => void;
}
const Timer : FC<TimerProps> = ({currentPlayer, restart}) => {
    const [blackTime, setBlackTime] = useState(300);
    const [whiteTime, setWhiteTime] = useState(300);
    const timer = useRef<null | ReturnType<typeof setInterval>>(null);

    useEffect(() => {
        startTimer();
    }, [currentPlayer])
    function startTimer() {
        if (timer.current) {
            clearInterval(timer.current)
        }
        const callback = currentPlayer?.color === Colors.WHITE
            ? decrementWhiteTimer
            : decrementBlackTimer
        ;
        timer.current = setInterval(callback, 1000)
    }
    
    const handleRestart = () => {
      setWhiteTime(300);
      setBlackTime(300);
      restart();
    }

    function decrementBlackTimer() {
        setBlackTime(prevState => prevState - 1);
    }
    function decrementWhiteTimer() {
        setWhiteTime(prevState => prevState - 1);
    }
    return (
        <div>
            <div>
                <button onClick={handleRestart}>Перезапустить игру</button>
            </div>
            <h2>Черные - {blackTime}</h2>
            <h2>Белые - {whiteTime}</h2>
        </div>
    );
};

export default Timer;