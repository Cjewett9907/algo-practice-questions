// bfs

const bfs = function (root) {
    let q = [root]

    while (q.length > 0){
        let size = queue.length
        for (let i = 0; i < size; i++){
            if(q[i].left){
                q.push(q[i].left)
            }
            if (q[i].right){
                q.push(q[i].right)
            }
        }
    }
}


// dfs

const dfs = function (root) {
    if (root.left){
        dfs(root.left)
    }
    if (root.right){
        dfs(root.right)
    }
    console.log("passed the recursive calls")
}


// bfs zigzag

const bfs = function (root) {
    let q = [root]
    let direction = 1

    while (q.length > 0){
        let size = queue.length
        direction *= -1
        for (let i = 0; i < size; i++){


            if (direction === 1) {
                if(q[i].left){
                    q.push(q[i].left)
                }
                if (q[i].right){
                    q.push(q[i].right)
                }
            }

            if (direction === -1) {
                if (q[i].right){
                    q.push(q[i].right)
                }
                if(q[i].left){
                    q.push(q[i].left)
                }
            }

        }
    }
}


const bstToLLHelper = function(root){
    let newLL = []
    bstToLL(root, newLL)

    for(let i = 0; i < newLL.length; i++){
        if(newLL[i+1]){
            newLL[i].next = newLL[i + 1]
        } else {
            newLL[i].next = null
        } 
    }
}

const bstToLL = function (root, newLL) {


    newLL.push(root)

    if (root.left){
        bstToLL(root.left, newLL)
    }
    if (root.right){
        bstToLL(root.right, newLL)
    }
    console.log("passed the recursive calls")
}