const arrowFunction=(arr)=>{
let sum=0;

for(let i=0;i<=arr.length-1;i++){
    // console.log(i)
    const Number=arr[i];
const square=Number**2;
sum=sum+square;
}
const average=sum / arr.length;
return average;

}

const array=[1,2,3,4,5,6,7,8,9];
console.log(arrowFunction(array))
