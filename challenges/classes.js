// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
    constructor(atrr) {
        this.length = atrr.length;
        this.width = atrr.width;
        this.height = atrr.height;
    }
    volume() {
        return this.length * this.width * this.height
    }
    surfaceArea() {
        return 2 * this.length * this.width + this.length * this.height + this.width * this.height
    }
}

class CubeMaker extends CuboidMaker {
    constructor(atrr) {
        super(atrr);
        this.color = atrr.color;
    }
}

const jellyCube = new CubeMaker({ length: 3, width: 5, height: 2, color: "red" })


console.log(jellyCube)

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.