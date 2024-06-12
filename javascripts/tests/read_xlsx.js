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
const jsb = __importStar(require("godot-jsb"));
const godot_1 = require("godot");
console.log("please run 'npm install' in the './typescripts' directory at first if 'xlsx' module can not be resolved");
//NOTE xlsx requires 'stream' module if 'require' exists
//     but, actually, this module is not utilized by xlsx in practice, 
//     pretending it exists helps avoid errors as a workaround.
jsb.internal.add_module("stream", {});
const xlsx = __importStar(require("xlsx"));
let filename = "res://test.xlsx";
let wb = xlsx.read(jsb.to_array_buffer(godot_1.FileAccess.get_file_as_bytes(filename)), { type: "buffer" });
console.log("read excel:", filename);
for (let sheetIndex in wb.SheetNames) {
    let sheetName = wb.SheetNames[sheetIndex];
    console.log(`read sheet: ${sheetName}`);
    let sheet = wb.Sheets[sheetName];
    let csv = xlsx.utils.sheet_to_csv(sheet);
    console.log("to_csv:", csv);
    let range = xlsx.utils.decode_range(sheet["!ref"]);
    for (let row = range.s.r; row <= range.e.r; row++) {
        for (let col = range.s.c; col <= range.e.c; col++) {
            let cell = sheet[xlsx.utils.encode_cell({ c: col, r: row })];
            if (cell) {
                console.log(cell.v);
            }
        }
    }
}
//# sourceMappingURL=read_xlsx.js.map