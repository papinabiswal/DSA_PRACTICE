function reverseString(str) {
    // Base case: if the string is empty or has one character
    if (str.length <= 1) return str;

    // Take last character + reverse the rest
    return reverseString(str.slice(1)) + str[0];
}


// Buttom up
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}