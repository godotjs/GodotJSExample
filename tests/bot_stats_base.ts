import { Resource, Variant } from "godot";
import { export_ } from "godot.annotations";

export default class BotStatsBase extends Resource {
    @export_(Variant.Type.TYPE_INT)
    legs = 0
}
