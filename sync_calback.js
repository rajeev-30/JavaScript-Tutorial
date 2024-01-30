function parentFunction(name, callback) {
    callback();
    console.log("Hey "+name);
}
function randomFunction() {
    console.log("Hey I am callBackFunction");
}
parentFunction("Rnadom string ",randomFunction);