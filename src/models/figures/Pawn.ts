import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from '../../assets/bp.png'
import whiteLogo from '../../assets/wp.png'


export class Pawn extends Figure {

    private _isFirstStep: boolean = true;
    private _direction: number = this.cell.figure?.color === Colors.BLACK ? 1 : -1;

	constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.PAWN;
	}

    canMove(target: Cell): boolean {
        if(!super.canMove(target)) return false;

        return this.moveBehaivor(target) || this.attackBehaivor(target);
    }  

    moveBehaivor(target: Cell) : boolean {
        const firstStepDirection = this.cell.figure?.color === Colors.BLACK ? 2 : -2;
        const stepCondition = target.y === this.cell.y + this._direction;
        const firstStepCondition = this._isFirstStep && (target.y === this.cell.y + firstStepDirection);

        if( (stepCondition || firstStepCondition) &&
            target.x === this.cell.x &&
            this.cell.board.getCell(target.x, target.y).isEmpty()) 
                return true;
        return false;
    }

    attackBehaivor(target: Cell) : boolean {
        const stepCondition = target.y === this.cell.y + this._direction;
        const attackCondition = target.x === this.cell.x + 1 || target.x === this.cell.x - 1;

        if( stepCondition && attackCondition && this.cell.isEnemy(target)) 
                return true;
        return false;
    }

    moveFigure(target: Cell): void {
        super.moveFigure(target);
        this._isFirstStep = false;
    }

}