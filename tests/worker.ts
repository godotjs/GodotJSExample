
//@ts-ignore
onmessage = function (m: any) {
    console.log("worker: get message", m);
    //@ts-ignore
    postMessage("worker result");
}
