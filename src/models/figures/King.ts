import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from '../../assets/bk.png'
import whiteLogo from '../../assets/wk.png'


export class King extends Figure {

	constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KING;
	}

    canMove(target: Cell): boolean {
        if(!super.canMove(target)) return false;
        return this.moveBehaivor(target) || this.attackBehaivor(target);
    }  

    moveBehaivor(target: Cell) : boolean {
        const xCondition = (target.x  === this.cell.x + 1) || (target.x  === this.cell.x - 1) || (target.x  === this.cell.x);
        const yCondition = (target.y  === this.cell.y + 1) || (target.y  === this.cell.y - 1) || (target.y  === this.cell.y);
        const emptyCondition = this.cell.board.getCell(target.x, target.y).isEmpty();
        if ( xCondition && yCondition && emptyCondition) return true;
        return false;
    }

    attackBehaivor(target: Cell) : boolean {

        const xCondition = (target.x  === this.cell.x + 1) || (target.x  === this.cell.x - 1) || (target.x  === this.cell.x);
        const yCondition = (target.y  === this.cell.y + 1) || (target.y  === this.cell.y - 1) || (target.y  === this.cell.y);
        const attackCondition = xCondition && yCondition

        if(attackCondition && this.cell.isEnemy(target)) return true;
        return false;
    }

}