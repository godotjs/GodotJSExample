"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const godot_1 = require("godot");
const jsb = __importStar(require("godot-jsb"));
class Wolf extends godot_1.Node2D {
    _ready() {
        console.log("wolf.ready");
        try {
            let balloon = this.get_node(new godot_1.NodePath("Area2D"));
            console.log(typeof balloon.area_shape_entered);
            balloon.area_shape_entered.connect(jsb.callable(this, this.on_balloon_collision));
            console.log("wolf.ready area");
            // console.log(balloon);
        }
        catch (err) {
            console.error(err);
        }
    }
    on_balloon_collision() {
        console.log("die");
        //TODO die
        this.queue_free();
    }
}
exports.default = Wolf;
//# sourceMappingURL=wolf.js.map