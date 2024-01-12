/*
let laptop={
    brand:"Mac",
    ram:"16GB",
    isM1:true,
    display:16.2,
    freeStorage:(total,used)=>{
        console.log(total-used);
    }
}

laptop.freeStorage(512,170);
*/


class laptop{

    brand="Apple"
    ram=16
    isM1=true
    display=16.2

    freeStoragename(total,used)=>{
        console.log(total-used);
    }
}

let LaptoObj= new laptop();

LaptoObj.freeStoragename(300-200);
console.log(LaptoObj.brand);