class CanvasRenderer {
  constructor(w, h) {
    const canvas = document.createElement("canvas");
    this.w = canvas.width = w;
    this.h = canvas.height = h;
    this.view = canvas;
    this.ctx = canvas.getContext("2d");
    this.ctx.imageSmoothingEnabled = false;
    this.ctx.textBaseline = "top";
  }

  render(container, clear = true) {
    if (container.visible === false) {
      return;
    }
    const { ctx } = this;

    function renderRec(container) {
      container.children.forEach(child => {
        if (child.visible == false) {
          return;
        }
        ctx.save();

        if (child.pos) {
          ctx.translate(Math.round(child.pos.x), Math.round(child.pos.y));
        }

        if (child.scale) ctx.scale(child.scale.x, child.scale.y);

        if (child.anchor) ctx.translate(child.anchor.x, child.anchor.y);

        if (child.rotation) {
          const px = child.pivot ? child.pivot.x : 0;
          const py = child.pivot ? child.pivot.y : 0;
          ctx.translate(px, py);
          ctx.rotate(child.rotation);
          ctx.translate(-px, -py);
        }

        if (child.text) {
          const { font, fill, align } = child.style;
          if (font) ctx.font = font;
          if (fill) ctx.fillStyle = fill;
          if (align) ctx.textAlign = align;
          ctx.fillText(child.text, 0, 0);
        }

        if (child.shapeW) {
          if (child.isFill) {
            if (child.isStroke) {
              ctx.strokeStyle = child.strokeColor;
              ctx.lineWidth = child.lineWidth;
              ctx.rect(child.pos.x, child.pos.y, child.shapeW, child.shapeH);
              ctx.fillStyle = child.fillColor;
              ctx.fill();
              ctx.stroke();
            } else {
              ctx.fillStyle = child.fillColor;
              ctx.fillRect(child.pos.x, child.pos.y, child.shapeW, child.shapeH);
            }
          } else {
            ctx.strokeStyle = child.strokeColor;
            ctx.lineWidth = child.lineWidth;
            ctx.rect(child.pos.x, child.pos.y, child.shapeW, child.shapeH);
            ctx.stroke();
          }
        }

        if (child.texture) {
          const img = child.texture.img;
          if (child.tileW) {
            ctx.drawImage(
              img,
              child.frame.x * child.tileW,
              child.frame.y * child.tileH,
              child.tileW,
              child.tileH,
              0,
              0,
              child.tileW,
              child.tileH
            );
          } else {
            ctx.drawImage(img, 0, 0);
          }
        }

        if (child.children) {
          renderRec(child);
        }
        ctx.restore();
      });
    }

    if (clear) {
      ctx.clearRect(0, 0, this.w, this.h);
    }
    renderRec(container);
  }
}

export default CanvasRenderer;
