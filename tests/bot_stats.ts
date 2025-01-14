import { PackedStringArray, Variant } from "godot";
import { export_ } from "godot.annotations";
import BotStatsBase from "./bot_stats_base";

export default class BotStats extends BotStatsBase {
    @export_(Variant.Type.TYPE_INT)
    health = 0

    @export_(Variant.Type.TYPE_PACKED_STRING_ARRAY)
    strings = new PackedStringArray()

    //TODO how to keep the similar style of the gdscript: BotStats.new(xxx)
}