 // if in the given string of both the halves of vowel counts are equal
 // write loop while i will move n/2 and j will move from n/2 to n
 // count the vowel if both side are equal return true else false;
 
 function halvesAreAlike(s){
    function isVowel(ch) {
        return 'aeiouAEIOU'.includes(ch);
    }

    let countL = 0;
    let countR = 0;

    const n = s.length;
    let mid = n / 2;
    let i = 0, j = mid;

    while (i < n / 2 && j < n) {
        if (isVowel(s[i])) countL++;
        if (isVowel(s[j])) countR++;
        i++; // Increment i
        j++; // Increment j
    }

    return countL === countR;
 }
 halvesAreAlike("book")