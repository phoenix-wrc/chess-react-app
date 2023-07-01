import {Figure, FigureNames} from "./Figure";
import blackLogo from "../../assets/king-black.png";
import whiteLogo from "../../assets/king-white.png";
import {Colors} from "../Colors";
import {Cell} from "../Cell";

export class King extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KING;
    }

    canMove(target: Cell) : boolean {
        if (!super.canMove(target)) {
            return false;
        }

        // eslint-disable-next-line no-mixed-operators
        if (   (target.y === this.cell.y + 1 && target.x === this.cell.x)
            || (target.y === this.cell.y + 1 && target.x === this.cell.x + 1)
            || (target.y === this.cell.y + 1 && target.x === this.cell.x - 1)
            || (target.y === this.cell.y - 1 && target.x === this.cell.x)
            || (target.y === this.cell.y - 1 && target.x === this.cell.x + 1)
            || (target.y === this.cell.y - 1 && target.x === this.cell.x - 1)
            || (target.y === this.cell.y && target.x === this.cell.x + 1)
            || (target.y === this.cell.y && target.x === this.cell.x - 1)
        ) {
            return true;
        }

        return false;
    }
}