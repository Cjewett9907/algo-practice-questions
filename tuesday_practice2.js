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