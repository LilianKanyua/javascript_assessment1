// function reverse(myString){
    
//     return food.reversed;
// }
// let food="eat";
// console.log(reverse());
  
// question two


function merge(num){
    if(num.length<=1){
        return num
    }
    let middle=Math.floor(num.length/2);
    let left=num.slice(0,middle);
    let right=num.slice(middle);
    return(merging(merge(left),merge(right)));
}
function merging(left,right){
    let emptyArr=[];
    while(left.length && right.length){
        if(left[0]<right[0]){
            emptyArr.push(left.shift());
        }
        else{
            emptyArr.push(right.shift());
        }
        
    }
    return [...emptyArr,...left,...right];
}

let num=[2,8,0,23,5,45,76];
console.log(merge(num));
// finding the target
let num2=[0,2,5,8,23,45,76]
let target=23;

function locateTarget(num2,target){
    let leftSide=0;
    let rightSide=num2.length -1;
    let midArr=Math.floor((left+right/2));
 
}

function multiply(arrNum){
   
    for(let i=0; i<arrNum.length; i++){
        
        console.log(arrNum[i]*4);
    }
}
let arrNum=[12,87,45,75,23,64,73];

multiply(arrNum);

// question six

function turnToNumbers(nums){
    
}
let nums=["10","24","45","56","67"];