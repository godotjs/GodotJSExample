/**
 * Call `exec` from other modules.
 * Or run this script from command line. 
 *     ./bin/your_godot_binary_file --path "path\to\your_project" --script res://tests/read_xlsx.ts
 */

import * as jsb from "godot-jsb";
import { FileAccess } from "godot";

if (!FileAccess.file_exists("res://node_modules/xlsx/xlsx.js")) {
    console.info("please run 'npm install' in the directory './' at first if 'xlsx' module can not be resolved");
}

//NOTE xlsx requires 'stream' module if 'require' exists
//     but, actually, this module is not utilized by xlsx in practice, 
//     pretending it exists helps avoid errors as a workaround.
jsb.internal.add_module("stream", {});
import * as xlsx from "xlsx";

export function exec() {
    let filename = "res://test.xlsx";
    FileAccess.get_file_as_bytes(filename).to_array_buffer();
    let wb = xlsx.read(FileAccess.get_file_as_bytes(filename).to_array_buffer(), { type: "buffer" });

    console.log("read excel:", filename);
    for (let sheetIndex in wb.SheetNames) {
        let sheetName = wb.SheetNames[sheetIndex]

        console.log(`read sheet: ${sheetName}`);
        let sheet = wb.Sheets[sheetName];
        let csv = xlsx.utils.sheet_to_csv(sheet);
        console.log("to_csv:", csv);
        let range = xlsx.utils.decode_range(sheet["!ref"]!);
        for (let row = range.s.r; row <= range.e.r; row++) {
            for (let col = range.s.c; col <= range.e.c; col++) {
                let cell = sheet[xlsx.utils.encode_cell({ c: col, r: row })];
                if (cell) {
                    console.log(cell.v);
                }
            }
        }
    }
}

// check if this script is running from command line
if (require.main == module) {
    exec();
}
