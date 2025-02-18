import { JSWorkerParent } from "godot.worker";

if (typeof JSWorkerParent !== "undefined") {
    JSWorkerParent.onmessage = function (m: any) {
        console.log("worker: get message", m);
        //@ts-ignore
        JSWorkerParent.postMessage("worker result");
    }
}
