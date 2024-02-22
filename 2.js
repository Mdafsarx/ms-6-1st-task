const emptyArray=[];

const arrowFunction=(arrayNames)=>{

    arrayNames.forEach(arr => {
        
const NamesLength=arr.length;
// console.log(NamesLength)
if(NamesLength % 2 ===0){
    emptyArray.unshift(arr,NamesLength);
}

    });
    
    return emptyArray

}



const array=['sakib','ahnaf','afsar','abir','ruhit','saif','ajhar'];

const evenName=arrowFunction(array);
console.log(evenName)