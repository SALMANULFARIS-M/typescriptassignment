function isPalindrome(str: string): boolean {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

const word:string = "MALAYALAM";
if (isPalindrome(word)) {
    console.log(word + " is a palindrome.");
} else {
    console.log(word + " is not a palindrome.");
}


//simple method
// const wordArr:string[] = word.split('');
// const reversedWordArr:string[] = wordArr.reverse();
// if (wordArr.join('') === reversedWordArr.join('')) {

//     console.log(word + " is a palindrome.");
// } else {
//     console.log(word + " is not a palindrome.");
// }