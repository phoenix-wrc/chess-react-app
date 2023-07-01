import React, {FC, useState} from 'react';
import {Player} from "../model/Player";

interface TimerProps {
    currentPlayer: Player;
    restart: () => void;
}
const Timer : FC<TimerProps> = ({currentPlayer, restart}) => {
    const [blackTime, setBlackTime] = useState(300);
    const [whiteTime, setWhiteTime] = useState(300);
    return (
        <div>
            <div>
                <button onClick={restart}>Перезапустить игру</button>
            </div>
            <h2>Черные - {blackTime}</h2>
            <h2>Черные - {blackTime}</h2>
        </div>
    );
};

export default Timer;