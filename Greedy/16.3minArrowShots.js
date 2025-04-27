if (!points.length) return 0;

    // Step 1: Sort by end of balloon
    points.sort((a, b) => a[1] - b[1]);

    let arrows = 1;
    let end = points[0][1];

    for (let i = 1; i < points.length; i++) {
        // If the next balloon starts after the current arrow’s end
        if (points[i][0] > end) {
            arrows++;
            end = points[i][1]; // shoot new arrow
        }
    }

    return arrows;