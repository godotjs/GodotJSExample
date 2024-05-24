import { CyclicClass1 } from "./cyclic_import_1";

export class CyclicClass2 {
    static call2() {
        console.log("call2");
        CyclicClass1.call3();
    }
}
