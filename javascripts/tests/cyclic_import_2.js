"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CyclicClass2 = void 0;
const cyclic_import_1_1 = require("./cyclic_import_1");
class CyclicClass2 {
    static call2() {
        console.log("call2");
        cyclic_import_1_1.CyclicClass1.call3();
    }
}
exports.CyclicClass2 = CyclicClass2;
//# sourceMappingURL=cyclic_import_2.js.map