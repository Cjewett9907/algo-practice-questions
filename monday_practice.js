// bfs

const bfs = function (root) {
    q = [root]

    while (q.length > 0){
        let size = queue.length

        for (let = 0; i < size; i++){

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