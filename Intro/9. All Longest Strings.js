// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

function allLongestStrings(inputArray) {
	let max = 0;

	inputArray.forEach((str) => {
		if (max < str.length) {
			max = str.length;
		}
	});

	for (let i = 0; i < inputArray.length; i++) {
		let str = inputArray[i];
		if (max > str.length) {
			inputArray.splice(i, 1);
			i--;
		}
	}
	return inputArray;
}
