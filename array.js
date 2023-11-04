/* 1. Reverse the array element and assign the value to the `arr` variable.
 So that the array will look like below:
 `["one", "two", "three", "four", "five", "six"]`
 `(hint: use reverse method of array)`
*/

let arr = ["six", "five", "four", "three", "two", "one"];
console.log(1, arr.reverse());

/* 2. Remove 2nd element from the array using splice so that the array looks like the below:
["one", "three", "four", "five", "six"] */

arr.splice(1, 1);
console.log(2, arr);

/* 3. Then add Hello text in the third position by using splice 
so that the array looks like
["one", "three", "four", "Hello", "five", "six"]*/
arr.splice(3, 0, "Hello");
console.log(3, arr);

/* 4. Take a variable called piece and make the value like  
["three", "four", "Hello"] by using slice*/
let piece = arr.slice(1, 4);
console.log(4, piece);

/* 5. print the below array from the arr variable   
["three", "four", "Hello"] by using splice */

arr.splice(0, 1);
arr.splice(3);
console.log(5, arr);




/**
 * 6. What is the difference between the 4 and 5 problems? when should we use slice
and when should we use splice if we need a slice of an array?
The answer should be in text format in VS code.
 */

/* Problem 4:
   In problem 4, we had an array and wanted to extract specific elements from it without modifying the original array. We used the "slice" method to create a new array containing the desired elements. This is the typical use case for "slice" when you want to create a subarray from an existing array without altering the original array.

   Example:
   const arr = [1, 2, 3, 4, 5];
   const subArray = arr.slice(1, 4); // subArray will be [2, 3, 4]
*/

/* Problem 5:
   In problem 5, we had an array and wanted to remove a specific element from it. We used the "splice" method to achieve this, which modifies the original array by removing the specified element. This is the typical use case for "splice" when you need to alter the original array by adding, removing, or replacing elements.

   Example:
   const arr = [1, 2, 3, 4, 5];
   arr.splice(2, 1); // Removes element at index 2, resulting in arr = [1, 2, 4, 5]
*/

/* When to use "slice":
   - When you want to create a new array containing a portion of the original array without altering the original.
   - When you need a subarray for further processing or manipulation.
   - When you want to extract elements based on their indices.

/* When to use "splice":
   - When you need to modify the original array by adding, removing, or replacing elements.
   - When you want to remove specific elements from an array.
   - When you need to cut a portion of the array from a specific position.

   It's essential to choose between "slice" and "splice" based on whether you want to preserve the original array or modify it. */









/* 7. Now our is 
arr = ["three", "four", "Hello"];
Remove the last Element from the array: (hint: use array pop method)
The array will look like below:
["three", "four"] */
arr.pop();
console.log(7, arr);

/** 8.Add a new element DIU in the last of the array. 
The array will look like below: (hint: use array push method)
["three", "four", "DIU"] */

arr.push("DIU");
console.log(8, arr);

/**
 * 9. Remove the first Element from the array:
The array will look like below: (hint: use array shift method)
["four", "DIU"]
 */

arr.shift(1);
console.log(9, arr);

/**
 * 10. Add a new Element I'm at the first position in the array:
The array will look like below: (hint: use array unshift method)
["I'm", "four", "DIU"]
 */

arr.unshift("I'm");
console.log(10, arr);

/**
 * 11. Count the number of the element of the array above that you have made.
Then do the console log The length of the array is: YOUR_LENGTH_VARIABLE
(hint: use array length property)
 */

console.log(11, "Array length :", arr.length);

/** 12. Now you have to edit the middle element four to a student of in the array.
The array will be like this: 
["I'm", "a student of", "DIU"]

(hint: you can remove the middle element by using splice
and then add a new element by splice in the second position) */
arr.splice(1, 1, "a student of");
console.log(12, arr);

/** 13. In the 12-number problem, you have edited the second element of the array
which was previously four. Now can you recheck if element four 
still in the array or not? If not you have to do console.log false.
(hint: you can use includes the method of array) */

console.log(13, arr.includes("four"));

/**
 * 14. Now make a string I'm a student of DIU from the arr. and do console.log
(hint: you can use the join method of array)
 */

console.log(14, arr.join(" "));

/**
 * 16. Think you have an array of your friends.
const friends = ["Emran", "Hasib", "Arafat", "Porosh", "Shadhin"];
Recently, Hasib has started giving pain by giving many assignments to you.
So you want to remove Hasib from the friend list. But you don't know what is
the index of Hasib in the friend array. But to get rid of the pain coding 
assignment anyhow you want to remove Hasib. Now Remove Hasib from the array
without knowing the index number. 
(hint: you can use the findIndex method to get the index of Hasib. Then use 
the index number in the splice to remove the element)
 */

const friends = ["Emran", "Hasib", "Arafat", "Porosh", "Shadhin"];

const index = friends.findIndex((friends) => {
  return friends == "Hasib";
})
console.log(16, "The index of Hasib :",index);

friends.splice(1, 1);
console.log(16, friends);

/**
 * 17.const arr2 = [4, 5, 7, 8]
const arr3 = [10, 55, 66, 88, 5, 45, 12]
There are 2 arrays above. You have to check if any items in the arr2 can be found in arr3. You have to solve this problem 2 times. 1st time you have to solve this problem by using nested for loop or while loop. 2nd time you have to solve this problem by using includes and some methods.
 */


const arr2 = [4, 5, 7, 8];
const arr3 = [10, 55, 66, 88, 5, 45, 12];
let found = false;
let matchingElement = null; 

for (let i = 0; i < arr2.length; i++) {
  for (let j = 0; j < arr3.length; j++) {
    if (arr2[i] === arr3[j]) {
      found = true;
      matchingElement = arr2[i]; 
      break;
    }
  }
  if (found) {
    break;
  }
}

if (found) {
  console.log(17,`Element ${matchingElement} is found in both arrays.`);
} else {
  console.log(17,"No items from arr2 are found in arr3.");
}

