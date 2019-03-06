// Practice algorythmn sets

// permutation basic I





const Bl = function(root, depth, depthHash) {
    let cDepth = depth + 1
    
    if (root.children === null){
        if (!depthHash[cDepth]){
            depthHash[cDepth] = root
        }
    }
    Bl(root.children, cDepth, depthHash)
}

const BlHelp = function(root) {
    depth = 0
    depthHash = {}
    Bl(root, depth, depthHash)

    for(let i = 0; i < depthHash.length; i++){
        if (!depthHash[i + 1]){
            return depthHash[i]
        }
    }
}

// overview

// time complexity

// ask if i can walkthrough?

//



