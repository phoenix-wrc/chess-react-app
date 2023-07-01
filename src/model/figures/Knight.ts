import {Figure, FigureNames} from "./Figure";
import blackLogo from "../../assets/knight-black.png";
import whiteLogo from "../../assets/knight-white.png";
import {Colors} from "../Colors";
import {Cell} from "../Cell";

export class Knight extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KNIGHT;
    }

    canMove(target: Cell) : boolean {
        if (!super.canMove(target)) {
            return false;
        }
        return true;
    }

}