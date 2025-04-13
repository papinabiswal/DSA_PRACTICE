function countCompleteSubstrings(word, k) {
    // 🌈 Start with 0 complete groups invited to the festival
    let count = 0;

    // 🧵 Let’s walk from the start to the end of the rope of beads (the word)
    for (let i = 0; i < word.length; i++) {

        // 🧺 Prepare a basket with 26 slots (for each alphabet letter) to count how many times each bead (letter) appears
        let freq = new Array(26).fill(0);

        // 👣 Now start walking from the current position to the end, collecting beads one by one
        for (let j = i; j < word.length; j++) {

            // 💎 Get the position of the bead (letter) in the alphabet (0 for 'a', 1 for 'b', ..., 25 for 'z')
            let charIndex = word.charCodeAt(j) - 97;

            // 🎯 Drop the bead into the basket to count how many of this letter we have
            freq[charIndex]++;

            // 🤝 After picking up the bead, if it's not the first one in this group, check if it's friendly with its neighbor
            if (j > i) {
                let prevChar = word.charCodeAt(j - 1) - 97;
                let currChar = charIndex;

                // ❌ If the difference between neighboring letters is more than 2, they are fighting! Stop here
                if (Math.abs(currChar - prevChar) > 2) {
                    break;
                }
            }

            // 🕵️‍♀️ Now check if this group is ready for the Festival
            let isComplete = true;

            // 📊 Go through all the letters and make sure:
            // If a letter appeared, it must appear **exactly** `k` times (no more, no less!)
            for (let l = 0; l < 26; l++) {
                if (freq[l] > 0 && freq[l] !== k) {
                    isComplete = false; // 😔 Not complete yet
                    break;
                }
            }

            // 🥳 If the group is complete and peaceful, invite them to the Festival!
            if (isComplete) {
                count++;
            }
        }
    }

    // 🎉 After checking all possible groups, return the total number of invited guests to the festival
    return count;
}
