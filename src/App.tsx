import React, {useEffect, useState} from 'react';
import "./App.css"
import BoardComponent from "./components/BoardComponent";
import {Board} from "./model/Board";
import {Player} from "./model/Player";
import {Colors} from "./model/Colors";
import LostFigures from "./components/LostFigures";
import Timer from "./components/Timer";

const App = () => {
    const [board, setBoard] = useState(new Board());
    const [whitePlayer
        // , setWhitePlayer
    ] = useState(new Player(Colors.WHITE));
    const [blackPlayer
        // , setBlackPlayer
    ] = useState(new Player(Colors.BLACK));
    const [currentPlayer, setCurrentPlayer] =
        useState<Player | null>(null);

    useEffect(() => {
        restart();
        setCurrentPlayer(whitePlayer);
    }, [])

    function restart() {
        const newBoard  = new Board();
        newBoard.initCells();
        newBoard.addFigures();
        setBoard(newBoard);
        setCurrentPlayer(whitePlayer);
    }

    function swapPlayer() {
        setCurrentPlayer(
            currentPlayer?.color === Colors.BLACK ? whitePlayer : blackPlayer);
    }
  return (
      <div className="app">
        <Timer currentPlayer={currentPlayer} restart={restart} />
        <BoardComponent
            board={board}
            setBoard={setBoard}
            currentPlayer = {currentPlayer}
            swapPlayer = {swapPlayer}
          />
          <div>
              <LostFigures title="Белые фигуры" figures={board.lostWhiteFigures} />
              <LostFigures title="Черные фигуры" figures={board.lostBlackFigures} />
          </div>
      </div>
  );
}

export default App;
