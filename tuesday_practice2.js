//

// write a function that takes 2 root nodes and determines if they are identical Binary trees.


const isIdentical = function(rootX, rootY){

    if (rootX === null && rootY === null){
        return true
    }

    if (rootX.left === null && !rootY.left === null ){
        return false
    } else if (!rootX.left === null && rootY.left === null ){
        return false
    } else if  (rootX.left === null && rootY.left === null){
        return 
    }

    if (rootX.left === rootY.left) {
        isIdentical(rootX.left, rootY.left)
    }


    if (rootX.right === null && !rootY.right === null ){
        return false
    } else if (!rootX.right === null && rootY.right === null ){
        return false
    } else if  (rootX.right === null && rootY.right === null){
        return 
    }

    if (rootX.right === rootX.right){
        isIdentical(rootX.right, rootY.right)
    }

}

const BTheight = function (root){

    let q = [root]
    let count = 0

    while (q.length > 0){

    let size = q.length
    for(let i = 0; i < size; i++){
        if (q[i].left){
            q.push(q[i].left)
        }

        if (q[i].right){
            q.push(q[i].right)
        }

     }
     count += 1
    }

    return count
}


const delBT = function (root){

    if (root === null){
        return
    } 

    delBT(root.left)
    delBT(root.right)

    delete(root)

    root = null
    
}