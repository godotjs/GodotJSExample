
onmessage = function (m: any) {
    console.log("worker: get message", m);
    postMessage("worker result");
}
