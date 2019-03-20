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