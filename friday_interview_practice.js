// add problem:

// your in a room with a random number of keys.

//  these keys give you access to other rooms (or previously accessed rooms)

// develop a function that can determine if all the possible rooms can be access give the keys available in each room

// example [[1], [0,1,2], [2]] ==> true
// [[1], [0,1], [2]] ==> false

// solution: the logic follows a tree pattern

// 1. go to the intial provided root and check the .children of the provided root
// 2. add those children into the queue that are not already included in a hasSeen hash.
// 3. once all the children have been added and popped from the queue, check the length of the hasSeen hash.
