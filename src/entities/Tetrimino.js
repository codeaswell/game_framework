import Container from "../../ja/Container";
import Rectangle from "../../ja/shapes/Rectangle";

const TILE_WIDTH = 30;
let currentTime = 0;
const speed = 0.5;

class Tetrimino extends Container {
  constructor(id, name, grid, color, parentX, parentY) {
    super();

    this.id = id;
    this.name = name;
    this.color = color;
    this.grid = grid;
    this.parentX = parentX;
    this.parentY = parentY;
    this.setSquares();
  }

  update(dt) {
    super.update(dt);
    // currentTime += dt;
    
    // if (Math.floor(currentTime) > speed) {
    //   this.pos.y += 30;
    //   currentTime -= speed;
    // }
   
  }

  setSquares() {
    const { grid, parentX, parentY } = this;
    for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[0].length; c++) {
        if (grid[r][c] === 1) {
          const square = new Rectangle(TILE_WIDTH, TILE_WIDTH, this.color, this.color, 1, true, false);
          square.pos.x = c * TILE_WIDTH / 2 + parentX;
          square.pos.y = r * TILE_WIDTH / 2 + parentY;
          this.add(square);
        }
      }
    }
  }
}
export default Tetrimino;