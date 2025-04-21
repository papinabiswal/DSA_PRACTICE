happiness.sort((a, b) => b - a); // Sort in descending order
    
    let result = 0;
    let count = 0;
    
    for (let i = 0; i < k; i++) {
        result += Math.max(happiness[i] - count, 0);
        count++;
    }
    
    return result;