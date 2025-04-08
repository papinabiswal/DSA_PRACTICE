class Solution {
    detectCycle(V,adj){
    const parent = [];
    for (let i = 0; i < V; i++) {
        parent[i] = i;
    }
    const rank = Array(V).fill(0);

    function find(x) {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }

    function union(x, y) {
        const xRoot = find(x);
        const yRoot = find(y);

        if (xRoot === yRoot) return;

        if (rank[xRoot] > rank[yRoot]) {
            parent[yRoot] = xRoot;
        } else if (rank[xRoot] < rank[yRoot]) {
            parent[xRoot] = yRoot;
        } else {
            parent[xRoot] = yRoot;
            rank[yRoot]++;
        }
    }

    for (let u = 0; u < V; u++) {
        for (const v of adj[u]) {
            if (u < v) { // To avoid checking both (u,v) and (v,u)
                if (find(u) === find(v)) { // dono ka parent nikalna hai and check same hai ki ni, same ni hai to union kr do
                    return 1;
                }
                union(u, v);
            }
        }
    }

    return 0;
    }
}


console.log(detectCycle(5, [[0,1],[1,2],[2,3],[3,4]])); // false
console.log(detectCycle(5, [[0,1],[1,2],[2,3],[3,1]])); // true
