function reverseString(food){
    
   let reverse= food.split("").reverse().join("");
   return reverse;
}
let food="eat";
console.log(reverseString(food));
  
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


function locateTarget(num2,target){
    let leftSide=0;
    let rightSide=num2.length -1;
    while(leftSide<=rightSide){
        let midArr=Math.floor((leftSide+rightSide)/2);
  if(num2[midArr]===target){
      return midArr;
  }
  else if(num2[midArr]>target){
      rightSide=midArr -1;
  }
  else{
    leftSide= midArr +1;
  }
  
}
return null;
}
let num2=[0,2,5,8,23,45,76]
let target=23;
console.log(locateTarget(num2,target));
// question five
function multiply(arrNum){
   
    for(let i=0; i<arrNum.length; i++){
        
        console.log(arrNum[i]*4);
    }
}
let arrNum=[12,87,45,75,23,64,73];

multiply(arrNum);

// question six

function turnToNumbers(nums){
for(let i=0; i<nums.length; i++){
        
        console.log(Number(nums[i]));
}
}
let nums=["10","24","45","56","67"];
console.log(turnToNumbers(nums));

// function leapYears(years){
//     for(i = 2000;i<=2023;i++){
//   if(i%2==0){
//       console.log(years[i] + " is a leap year.");
//   } 
//   else{
//       console.log(years[i] + " is not a leap year.")
//   }
//     }
// }
// leapYears(years);