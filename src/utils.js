// Your code here
export function isPalindrome(word) {
    // Reverse the word and compare with the original
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
  }
  