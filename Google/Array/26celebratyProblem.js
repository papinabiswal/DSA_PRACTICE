function celebrity(mat) {
    const n = mat.length;
    const stack = [];

    for (let i = 0; i < n; i++) {
        stack.push(i);
    }

    while (stack.length > 1) {
        let a = stack.pop();
        let b = stack.pop();

        if (mat[a][b] === 1) {
            // a knows b => a can't be celeb
            stack.push(b);
        } else {
            // a doesn't know b => b can't be celeb
            stack.push(a);
        }
    }

    if (stack.length === 0) return -1;

    const candidate = stack.pop();

    for (let i = 0; i < n; i++) {
        if (i !== candidate) {
            if (mat[candidate][i] === 1 || mat[i][candidate] === 0) {
                return -1;
            }
        }
    }

    return candidate;
}

const mat = [
    [0, 1, 1],
    [0, 0, 1],
    [0, 0, 0]
  ];
  
  console.log(celebrity(mat)); 

  // **********************************************************************************************************************************************************************

  // 2nd approach using 2 pointer
  // O(n) time complexity and O(1) space complexity

  function celebrity(mat) {
    const n = mat.length;
    let candidate = 0;

    // Step 1: Find the potential celebrity
    for (let i = 1; i < n; i++) {
        if (mat[candidate][i] === 1) {
            // candidate knows i → not celebrity
            candidate = i;
        }
    }

    // Step 2: Verify the candidate
    for (let i = 0; i < n; i++) {
        if (i !== candidate) {
            if (mat[candidate][i] === 1 || mat[i][candidate] === 0) {
                return -1;
            }
        }
    }

    return candidate;
}


