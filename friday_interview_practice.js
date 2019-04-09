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
// 4. If the length of the hasSeen hash === the number of rooms provided then return true (all the rooms can be accessed, else return false)


// There are N rooms and you start in room 0.  
// Each room has a distinct number in 0, 1, 2, ..., N-1, and each room may have some keys to access the next room. 

// Formally, each room i has a list of keys rooms[i], 
// and each key rooms[i][j] is an integer in [0, 1, ..., N-1] where N = rooms.length.  A key rooms[i][j] = v opens the room with number v.

// Initially, all the rooms start locked (except for room 0). 

// You can walk back and forth between rooms freely.

// Return true if and only if you can enter every room.

// Example 1:

// Input: [[1],[2],[3],[]]
// Output: true
// Explanation:  
// We start in room 0, and pick up key 1.
// We then go to room 1, and pick up key 2.
// We then go to room 2, and pick up key 3.
// We then go to room 3.  Since we were able to go to every room, we return true.

// Example 2:

// Input: [[1,3],[3,0,1],[2],[0]]
// Output: false
// Explanation: We can't enter the room with number 2.
// Note:

// 1 <= rooms.length <= 1000
// 0 <= rooms[i].length <= 1000
// The number of keys in all rooms combined is at most 3000.

// // let check the 0th room

// // add the keys of that room to the ‘hasSeen’

// // check the child of the first key (is the next room available) if they been ‘hasSeen’

// // if not then check their children.



// const hasAllKeys = function (root){
// 	Let queue = [root]
// 	Let hasSeen = {}
// 	hasSeen[root] = true
// 	While (queue.length > 0)[
// 		Let size = queue.length	
// 		if (!hasSeen[queue[i]]) {
// 		for(let i = 0; i < size; i++){
// 			for(let j = 0; i< queue[i].keys.length; i++){
// 				queue.push(queue[i].keys[j])
// 			} 	
// 		}
// 		}
// 	}
// }

// keys room relationship follows the decision tree pattern

// this pattern should be recognized in future has many to many relationships