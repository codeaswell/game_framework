import Game from "../ja/Game.js";
import Squizz from "./entities/Squizz.js";

const game = new Game(800, 400);
const hero = new Squizz();
game.scene.add(hero);

game.run((dt, t) => {
    
});