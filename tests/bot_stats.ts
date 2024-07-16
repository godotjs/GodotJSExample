import { PackedStringArray, Resource, Variant } from "godot";
import { export_ } from "../jsb/jsb.core";

export default class BotStats extends Resource {
    @export_(Variant.Type.TYPE_INT)
    health = 0

    @export_(Variant.Type.TYPE_PACKED_STRING_ARRAY)
    strings = new PackedStringArray()

    //TODO how to keep the similar style of the gdscript: BotStats.new(xxx)
}