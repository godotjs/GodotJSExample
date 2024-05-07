"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kHeight = exports.kWidth = exports.kBlockSize = exports.SnakeDirection = void 0;
var SnakeDirection;
(function (SnakeDirection) {
    SnakeDirection[SnakeDirection["UP"] = 0] = "UP";
    SnakeDirection[SnakeDirection["DOWN"] = 1] = "DOWN";
    SnakeDirection[SnakeDirection["RIGHT"] = 2] = "RIGHT";
    SnakeDirection[SnakeDirection["LEFT"] = 3] = "LEFT";
})(SnakeDirection || (exports.SnakeDirection = SnakeDirection = {}));
exports.kBlockSize = 16;
exports.kWidth = 30;
exports.kHeight = 20;
//# sourceMappingURL=constants.js.map