"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const godot_1 = require("godot");
class Map extends godot_1.Node2D {
    constructor() {
        super(...arguments);
        this.width = 0;
        this.height = 0;
    }
    _ready() {
    }
}
exports.default = Map;
//# sourceMappingURL=map.js.map