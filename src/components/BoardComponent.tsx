import React, {FC, useEffect, useState} from 'react';
import {Board} from "../model/Board";
import CellComponent from "./CellComponent";
import {Cell} from "../model/Cell";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
}
const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {
    const [selectedCell, setSelectedCell] =
        useState<Cell | null>(null);
    function click(cell: Cell) {
        if (cell.figure !== null) {
            setSelectedCell(cell);
        }
    }

    useEffect(() => {
        highlightCells()
    }, [selectedCell])

    function highlightCells () {
        board.highlightCells(selectedCell);
        updateBoard();
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard();
        setBoard(newBoard);
    }

    return (
        <div
        className="board"
        >
            {board.cells.map((row, index) =>
                <React.Fragment key={index}>
                    {row.map(cell =>
                        <CellComponent
                            click = {click}
                            cell={cell}
                            key = {cell.id}
                            selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                        />
                    )}
                </React.Fragment>
            )}
        </div>
    );
};

export default BoardComponent;