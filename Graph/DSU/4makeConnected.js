var makeConnected = function(n, connections) {
    if(connections.length < n-1){
        return -1;
    }
    const parent = Array(n).fill(0).map((_, i) => i);
    const rank = Array(n).fill(0);

    function find(x) {
        if (x !== parent[x]) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }

    function union(x, y) {
        const rootX = find(x);
        const rootY = find(y);

        if (rootX === rootY) return;

        if (rank[rootX] > rank[rootY]) {
            parent[rootY] = rootX;
        } else if (rank[rootX] < rank[rootY]) {
            parent[rootX] = rootY;
        } else {
            parent[rootX] = rootY;
            rank[rootY]++;
        }
    }

    let components = n; // num of component initially
    for (const [a, b] of connections) {
        if(find(a) !== find(b)){
            union(a,b);
            components--; // num of component after union
        }
    }
    return components-1;
};