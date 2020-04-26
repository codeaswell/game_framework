import Texture from "../../ja/Texture.js"
import TileSprite from "../../ja/TileSprite.js"
import KeyControls from "../../ja/controls/KeyControls.js"
import AnimManager from "../../ja/AnimManager.js"

const controls = new KeyControls();
const texture = new Texture("res/images/player.png");

class Squizz extends TileSprite {
  constructor() {
    super(texture, 32, 32);

    this.anim = new AnimManager(this);

    this.anim.add("walk", [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 3, y: 0 },
    ], 0.2);

    this.anim.add("idle", [
      { x: 4, y: 0 },
      { x: 4, y: 1 },
    ], 0.2);

    this.anim.play("idle");
  }

  update(dt, t) {
    this.anim.update(dt);
  }

}

export default Squizz;
