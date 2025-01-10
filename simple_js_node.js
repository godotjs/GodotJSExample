"use strict";

/**
 * It's not recommended but better to support directly writing scripts in JavaScript.
 */

// CommonJS is the only supported module system for now.
// `tsc` will handle these stuff for you if you are using TypeScript.
// In manually written javascript source, use `require` to import modules.

const { Node, Variant } = require('godot');
const jc = require("jsb.core");

// declare your script class
class SimpleJSNode extends Node {
    speed = 0;

    _ready() {
        console.log("SimpleJSNode _ready");
    }
}

// export a property to Godot 
jc.export_(Variant.Type.TYPE_FLOAT)(SimpleJSNode.prototype, "speed");

// DO NOT FORGET TO EXPORT YOUR SCRIPT CLASS AS DEFAULT
exports.default = SimpleJSNode;
