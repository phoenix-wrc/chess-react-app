import {Colors} from "../Colors";
import logo from "../../assets/14i8erjjtk5p0p217bb9hjjig2-642401a5747c751d9061ef22ea136be4.png";
import {Cell} from "../Cell";

export enum FigureNames {
    FIGURE= 'Фигура',
    KING = 'Король',
    KNIGHT = 'Конь',
    PAWN = 'Пешка',
    QUEEN = 'Ферзь',
    ROOK = 'Ладья',
    BISHOP = 'Слон'
}

export class Figure {
    color: Colors;
    logo: typeof logo | null;
    cell: Cell;
    name: FigureNames;
    id: number;

    constructor(color: Colors, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = null;
        this.name = FigureNames.FIGURE;
        this.id = Math.random();
    }

    canMove(target: Cell) : boolean {
        if (target.figure?.color === this.color) {
            return false;
        }
        if (target.figure?.name === FigureNames.KING) {
            return false
        }
        return true;
    }

    moveFigure(target: Cell) {

    }
}