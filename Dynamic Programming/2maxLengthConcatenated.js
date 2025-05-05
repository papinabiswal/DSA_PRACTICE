var maxLength = function(arr) {

    // Helper function to check if a string has all unique characters
        const isUnique = (str) => {
            const set = new Set(str);
            return set.size === str.length;
        };
    
        let max = 0;
    
        function backtrack(index, current) {
            if (!isUnique(current)) return; // Prune the branch
    
            max = Math.max(max, current.length);
    
            for (let i = index; i < arr.length; i++) {
                backtrack(i + 1, current + arr[i]);
            }
        }
    
        backtrack(0, "");
        return max;
    };