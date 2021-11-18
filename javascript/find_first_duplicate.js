function findFirstDuplicate(arr) {
  // type your code here
  let elementSet = new Set()

  for(let i = 0; i < arr.length; i ++){
    if(elementSet.has(arr[i])) return arr[i];
    elementSet.add(arr[i])
  }
  return -1

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));

  console.log("");

  console.log("Expecting: 30");
  console.log("=>", findFirstDuplicate([16, 24, 30, 30, 15, 24]));

  console.log("");

  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4, 3, 2, 5, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution



// First, I created the set object which would allow us to store each element of the given array as a unique value
//  and then check to see if it already contains a value using the .has(return a boolean value) 
// and the .add methods
// then, i created a for loop designed to iterate through each element of the given array
// and check to see if the set contains the element that we are currently in our set
//  if the element is in the set, then we return the value of that element
// if it is not in the set yet, then we add the element value to the set
// else, after iterating through the array, if each element within the original array does not correspond  
// with any given set value, then we return a value of -1
