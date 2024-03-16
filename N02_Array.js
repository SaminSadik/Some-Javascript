var array = [1, 2, 3, "4", "5/6"];
console.log(array);
console.log(array[0]); // accessing elements using index
console.log(array.length); // length of the array

array.push(6); // adding a new element to the end of the array
console.log(array);
array.unshift(0); // adding a new element to the beginning of the array
console.log(array);
array.pop(); // removing the last element of the array
console.log(array);
array.shift(); // removing the first element of the array
console.log(array);

console.log(array.concat(0, '$')); // merging arrays temporarily

//* getting a subarray:
console.log(array.slice(1, 3)); // from the left index to BEFORE the right index

//* combining elements of the array (with the given string as dividers):
console.log(array.join("/")); 

//* getting the index of the given element:
console.log(array.indexOf(2), array.indexOf("5")); // returns -1 if not found

//* checking if the given element is in the array:
console.log(array.includes(2), array.includes("5")); // returns true or false

//* reversing the array:
console.log(array.reverse()); 

//* sorting the array:
array.sort(); 
console.log(array);
array.sort(function(a, b){return b-a}); // sorting the array in descending order
console.log(array);

//* Speard Operator (...):
let array1 = [1, 2, 3, 4, 5];
let array2 = [0, ...array1, 6]; // copying an array into another array
console.log(array2); console.log(...array2);
console.log(Math.max(...array1)); // getting the max element of the array
console.log(Math.min(...array2)); // getting the min element of the array
// Math functions doesn't apply on Array without spearding

//* Destructuring:
let [first] = array;
let [a, b, c, d, e, f] = array;
console.log(first, a, b, c, d, e, f);

//* Map:
let squared = array1.map(num => {
    console.log(num);
    return num * num;
});
console.log(squared);
// (traverse through each element to perform operations and return as a new array)

//* Filter:
let even = array1.filter(num => (num % 2) == 0);
console.log(even);
// (creates a new array with selected elements according to instructions)

//* Find:
let odd1 = array1.find(num => (num % 2) != 0);
console.log(odd1);
// (finds the first element that matches the requirements)

//* ForEach:
let loop = array1.forEach(num => console.log(num));
// (traverse through each element but doesn't return anything)
// (works like a shortcut for loop, can be used for dynamic elements)