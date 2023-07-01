import React, {FC} from 'react';
import {Cell} from "../model/Cell";

interface CellProps {
    cell: Cell;
    selected: boolean;
    click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({cell, selected, click}) => {
    return (
        <div
        className={['cell', cell.color, selected ? 'selected': ''].join(' ')}
        onClick={() => click(cell)}
        >
            {cell.figure?.logo && <img src={cell.figure.logo} alt = ''/>}
        </div>
    );
};

export default CellComponent;