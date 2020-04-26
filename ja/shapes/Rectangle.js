import Shape from "../../ja/shapes/Shape.js";

class Rectangle extends Shape{
    constructor(w, h, fillColor = "white", strokeColor = "red", lineWidth = 1, isFill = true, isStroke = false) {
        super(w, h, fillColor, strokeColor, lineWidth, isFill, isStroke);
    }
}
export default Rectangle;