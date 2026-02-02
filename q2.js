//write a function prints"Hello World"5 times at intervals of 2s each
let id=setInterval(()=>{
    console.log("Hello World");

},2000);
setTimeout(()=>{
    clearInterval(id);
    console.log("clear interval ran")
},10000);