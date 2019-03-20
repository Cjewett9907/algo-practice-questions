// delete the middle node of a linked list

const delMidLL = function(root){

    let prev = null
    let mid = root
    let end = root

    while (end.next !== null || end !== null){
        prev = mid
        mid = mid.next
        end = end.next.next
    }

    // start the mid point deletion
    prev.next = mid.next
    mid.next = null
}

const removeDupLL = function(root){

    let hasSeen = {}
    hasSeen[root.val] = true

    let cur = root
    let testNode = root.next
    let nextTestNode = null

    if (root === null){
        return
    }

    while (testNode !== null){
        if (!hasSeen[testNode.val]){
            hasSeen[testNode.val] = true
            cur.next = testNode
            cur = testNode 
            testNode = testNode.next
        }  else {
            nextTestNode = testNode.next
            testNode.next = null
            testNode = nextTestNode
        }
        
    }
}