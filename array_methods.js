//array literal
var array = [8, 5, 3, 4, 2, 6, 7, 1, 9, 10];

//sort by alphabetic or numerical order
var new_array_sorted = array.sort((a,b) => a - b);
 
console.log(new_array_sorted);
//console.log(array.reverse());

//to add items to the end of an array 
array.push(11);
console.log(array); //output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11

//remove the last element of an array
array.pop();
console.log(array); //output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 

//check if there is at least item in an array that matches our criteria
console.log(array.some(num => num == 1)); //output: true

//check if all the items in an array match a certain condition
console.log(array.every(num => num > 0)); //output: true

//reduces all items to one
console.log(array.reduce((a, b) => a + b)); //output: 55

//what if I want to join an array to an array
console.log(array.concat(array2)); //output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17 

//if we want to joint individual strings together into a single string, using a specific delimiter
let words = ["hello", "world", "!"]
let sentence = words.join(' ');
console.log(sentence); //output:  hello world !