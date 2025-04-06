// color of adjacent shouldn't be same
// when there is a cycle and odd num of node then it's not bipartite graph.
var isBipartite = function(graph) {
    const n = graph.length;
    const color = new Array(n).fill(-1);

    function dfs(node, currColor){
        color[node] = currColor;

        for(let neighbour of graph[node]){
             if(color[neighbour] === -1){
                if(!dfs(neighbour, 1-currColor)) return false;
             } else if(color[neighbour] === currColor) { // Same color on both sides → not bipartite
                return false;
             }
        }
        return true;
    }

    for(let i=0; i < n; i++){
        if(color[i] === -1){
            if(!dfs(i,0)) return false;
        }
    }
    return true;
};