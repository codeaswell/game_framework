class Shape {
    constructor(w, h, fillColor, strokeColor, lineWidth, isFill, isStroke) {
        this.pos = { x: 50, y: 50 }
        this.shapeW = w;
        this.shapeH = h;
        this.fillColor = fillColor;
        this.strokeColor = strokeColor;
        this.lineWidth = lineWidth;
        this.isFill = isFill;
        this.isStroke = isStroke;
    }
}
export default Shape;