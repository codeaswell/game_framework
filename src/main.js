import Game from "../ja/Game.js";
import Board from "./entities/Board.js";

const game = new Game(innerWidth, innerHeight);
const { scene } = game;

const board = new Board();

scene.add(board);

game.run((dt, t) => {
  
});

