const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
    var str=await new Promise(res=>rl.once("line",res));
    console.log("getA:"+str);
    str=await new Promise(res=>rl.once("line",res));
    console.log("getB:"+str);
    str=await new Promise(res=>rl.once("line",res));
    console.log("getC:"+str);
    console.log("end");

    //関数化
    const gets=()=>new Promise(res=>rl.once("line",res))
    str=await gets();
    console.log("getA:"+str);
    str=await gets();
    console.log("getB:"+str);
    str=await gets();
    console.log("getC:"+str);
    console.log("end");

    process.exit();
})();