let arr = ["a", "b", "c", "d", "e", 1,2,3,4,5];
arr.pop();
arr.push("new");
arr.shift();
arr.unshift("a1");

for(var i in arr) {
    // console.log(arr[i]);
}
console.log("Index of c: ",arr.indexOf("c"));
let newarr = arr.slice(1, 3);
console.log(newarr);

arr.splice(4,5,'bb','cc');
// console.log(arr);
let arr2  = ['x','y'];
let arr3 = arr.concat(arr2);
console.log(arr);
console.log(console.log());