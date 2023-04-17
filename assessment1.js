function reverseString(food){
    
   let reverse= food.split("").reverse().join("");
   return reverse;
}
let food="eating";
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

// let num=[2,8,0,23,5,45,76];
// console.log(merge(num));
// finding the target


function locateTarget(num,target){
    let leftSide=0;
    let rightSide=num.length -1;
    while(leftSide<=rightSide){
        let midArr=Math.floor((leftSide+rightSide)/2);
  if(num[midArr]===target){
      return midArr;
  }
  else if(num[midArr]>target){
      rightSide=midArr -1;
  }
  else{
    leftSide= midArr +1;
  }
  
}
return null;
}

let target=23;
let num=merge([2,8,0,23,5,45,76])
console.log(locateTarget(num,target));

// Question three
function leapYears(){
    for(let year=2000;year <2023;year++){
        if(year%4===0){
            console.log(year+" is a leap year")
        }
        else{
            console.log(year+" is not a leap year");
        }
    }
}
leapYears();

// Question four

function myNumbers(){
for(let number=0; number<100; number++){
    if(number%3===0 && number%5===0){
    console.log("FizzBuzz")
    }
    else if(number%3===0){
        console.log("Fizz")
    }
    else if(number%5===0){
        console.log("Buzz")
    }
    else{
    //   console.log(number);
    }
}
    
}
myNumbers();

// question five
let newArr=[];
function multiply(arrNum){
    for(let i=0; i< arrNum.length; i++){
 newArr.push(arrNum[i]*4);
    }
return newArr;
}
let arrNum=[12,87,45,75,23,64,73];
 console.log(multiply(arrNum));




// question six

function turnToNumbers(nums){
    let newArr=[];
for(let i=0; i<nums.length; i++){
    newArr.push(Number(nums[i]));
}
return newArr;
};
let nums=["10","24","45","56","67"];
console.log(turnToNumbers(nums));
// function turnToNumbers(nums){
    
// }

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