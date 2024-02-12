let prom1 = new Promise((resolve,reject)=> {
    let n = Math.random();
    if(n<0.5) {
        reject("Promis has been rejected");
    }else {
        setTimeout(()=>{
            console.log('I am done');
            resolve("Done");   
        },3000);
    }
})

let prom2 = new Promise((resolve,reject)=> {
    let n = Math.random();
    if(n<0.5) {
        reject("Promis has been rejected 2");
    }else {
        setTimeout(()=>{
            console.log('I am done 2');
            resolve("Done 2");   
        },3000);
    }
})

let prom3 = Promise.allSettled([prom1,prom2]);

prom3.then((a)=>{
    console.log(a);
}).catch((err)=> {
    console.log(err);
})