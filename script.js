function printPro(){
    for(let i=1 ; i<=5 ; i++){
        let row = "";
        for(let j=1; j<=5 ; j++)
            row += ".";
    }
    for(let j = 1; j<=i ; j++){
        row += i;
    }
    console.log(row);
}
printPro();

//Above the question is Q.4.

//Q . 6

function shapeTheArea(n){
    return n * n +(n-1)*(n-1);
}
console.log(shapeTheArea(1));
console.log(shapeTheArea(2));
console.log(shapeTheArea(3));
console.log(shapeTheArea(4));

// Q. 8


function centuryYear(){
    return Math.ceil(year/100);
}
console.log(centuryYear(1905));
console.log(centuryYear(1700));
 
//  Q . 7


function isPalindrome(inputString){
 const reversedString = inputString.split('').reverse().join('');
 return inputString === reversedString;
}
console.log(isPalindrome("aabaa"));
console.log(isPalindrome("abac"));
console.log(isPalindrome("a"));

// Q . 2 


function combineArray(arr1 , arr2) {
    return arr1.concat(arr2);
} 
const firstinput = [1, 2, 3];
const secondinput = [3, 2, 1];
const combineArray = combineArray(firstinput,secondinput);
console.log(combineArray);

// Q . 1


function reverseArray(arr){
let left = 0;
let right = arr.lenght - 1;
while (left<right) {
    [arr[left], arr[right],]=[arr[right],arr[left]]
    left++;
    right--;
}
return arr;
}
const inputArray1  = [1, 2, 3];
const reverseArray = reverseArray(inputArray1);
console.log(reverseArray)

// Q . 5


function adjacentElement(inputArray){
let maxProduct = -Infinity;
for(let i = 0; i<inputArray.lenght-1; i++){
    const product = inputArray[i]* inputArray[i+1];
    if(product>maxProduct){
        maxProduct = product;
    }
}
return maxProduct;
}
const inputArray = [3, 6, -2, -5, 7, 3];
const result = adjacentElement(inputArray);
console.log(result);

// Q . 9


const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple','banana','cherry','orange','fig'];
function countFrequencies(arr){
const frequencies = {};
for(const item of array){
    frequencies[item] = (frequencies[item] || 0) + 1;
}
return frequencies;
}
const result1 = countFrequencies(fruitBasket);
console.log(result);

// Q . 10 


function diagonalDifference(arr){
    const n = arr.lenght;
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    for(let i = 0; i<n; i++){
        primaryDiagonalSum += arr[i][i];
        secondaryDiagonalSum += arr[i][n-1-i];
    }
    return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
}
const matrix = [[11, 2, 4],[4, 5, 6],[10, 8, -12]];
const difference = diagonalDifference(matrix);
console.log(difference);

// Q . 3


function rotateArray(nums, k){
    const n = nums.lenght;
    k %= n;
    const reverse = (arr, start, end) =>{
        while(start < end){
            [arr[start], arr[end]] = [arr[end],arr[start]];
            start++;
            end--;
        }
    };
    reverse(nums, 0, n-1);
    reverse(nums, 0, k-1);
    reverse(nums, k, n-1);
    return nums;
}
const inputArray3 = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
const rotateArray = rotateArray(inputArray, k);
console.log(rotateArray);


// Q . 13


