class Anim {
  constructor(frames, frameTime) {
    this.frames = frames;
    this.frameTime = frameTime;
    this.reset();
  }

  reset() {
    this.currentTime = 0;
    this.currentFrame = 0;
    this.frame = this.frames[this.currentFrame];
  }

  update(dt, t) {
    this.currentTime += dt;

    if (this.currentTime > this.frameTime) {
      this.currentFrame++;
      this.frame = this.frames[this.currentFrame % this.frames.length];
      this.currentTime = 0;
    }
  }
}

class AnimationManager {
  constructor(entity) {
    this.frame = entity.frame;
    this.anims = {};
    this.current = null;
  }

  add(name, frames, speed) {
    this.anims[name] = new Anim(frames, speed);

    return this.anims[name];
  }

  play(name) {
    const { anims } = this;
    if (name == this.current) {
      return;
    }

    this.current = name;
    anims[this.current].reset();
  }

  update(dt) {
    const { current, anims, frame } = this;

    if (!current)
      return;

    anims[current].update(dt);

    frame.x = anims[current].frame.x;
    frame.y = anims[current].frame.y;
  }

  stop() {
    this.current = null;
  }
}

export default AnimationManager;