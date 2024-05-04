// Your tests here
import { isPalindrome } from "../utils";

describe('isPalindrome', () => {
    it('should return true for palindromic words', () => {
      expect(isPalindrome("racecar")).toBe(true);
      expect(isPalindrome("mom")).toBe(true);
      expect(isPalindrome("madam")).toBe(true);
    });
  
    it('should return false for non-palindromic words', () => {
      expect(isPalindrome("car")).toBe(false);
      expect(isPalindrome("hello")).toBe(false);
    });
  
    // Additional test cases can be added here
  });