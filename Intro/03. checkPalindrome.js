// Given the string, check if it is a palindrome.

function checkPalindrome(inputString) {
	let length = inputString.length;
	let iterations = Math.floor(inputString.length / 2);

	if (inputString.length % 2 === 0) {
		for (let i = 0; i < iterations; i++) {
			if (inputString[i] !== inputString[length - i - 1]) {
				return false;
			}
		}
		return true;
	} else {
		for (let i = 0; i < iterations; i++) {
			if (inputString[i] !== inputString[length - i - 1]) {
				return false;
			}
		}
		return true;
	}
}

let inputString = 'abba';

checkPalindrome(inputString);
