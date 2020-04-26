import Container from "../../ja/Container.js";
import Rectangle from "../../ja/shapes/Rectangle.js"
import Tetrimino from "./Tetrimino.js";

const TILE_WIDTH = 30;
const COLOR = "white";
const COL = 10;
const ROW = 22;
const LINE_STROKE = 1;

class Grid extends Rectangle {
  constructor(w, h, fillColor, strokeColor, lineStroke, isFill, isStroke) {
    super(w, h, fillColor, strokeColor, lineStroke, isFill, isStroke);

    this.grid = true;
    this.row = ROW;
    this.col = COL;
    this.gridLineStroke = COLOR;
    this.gridColor = COLOR;
    this.tileWidth = TILE_WIDTH;
    this.pos.y = 10;
    this.pos.x = 10;
  }
}

class Board extends Container {
  constructor() {
    super();

    const grid = new Grid(TILE_WIDTH * COL, TILE_WIDTH * ROW, COLOR, COLOR, LINE_STROKE, false, true);

    const tetriminos = [];
    const tetriminoT = new Tetrimino(1, "T", [[1,1,1],[0, 1, 0]], "purple", grid.pos.x, grid.pos.y);
    tetriminos.push(tetriminoT);

    

    this.add(grid);
    this.add(tetriminos[0]); //for testing purpose
  }
}
export default Board;