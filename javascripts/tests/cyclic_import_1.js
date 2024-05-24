"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CyclicClass1 = void 0;
const cyclic_import_2_1 = require("./cyclic_import_2");
// NOT OK: The behaviour is undefined if anything from cyclic imported modules is referenced in the script compile-run scope
// let a_name = CyclicClass2.something;
// NOT OK: extends a class from cyclic imported modules
// class BehaviorUndefined extends CyclicClass2 {}
// OK: references at runtime if OK
class CyclicClass1 {
    static call1() {
        console.log("call1");
        cyclic_import_2_1.CyclicClass2.call2();
    }
    static call3() {
        console.log("call3");
    }
}
exports.CyclicClass1 = CyclicClass1;
//# sourceMappingURL=cyclic_import_1.js.map