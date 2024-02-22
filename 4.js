const arrowFunction=(arr1,arr2)=>{

    const newArray=[...arr1,...arr2];
const MaxNumber=Math.max(...newArray);
return MaxNumber;

};

const array1=[10,20,30,40,50,60,70,80,90];
const array2=[1,2,3,4,5,6,7,8,9];
const MaxNumberAns=arrowFunction(array1,array2);
console.log(MaxNumberAns)