// Ticket numbers usually consist of an even number of digits.
// A ticket number is considered lucky if the sum of the first half of the digits
// is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

// Example

// For n = 1230, the output should be
// isLucky(n) = true;

// For n = 239017, the output should be
// isLucky(n) = false.

function isLucky(n) {
	let sumFirstHalf = 0;
	let sumSecondHalf = 0;
	let str = n.toString();
	let numLength = str.length;
	let firstHalf = Math.floor(n / 10 ** (numLength / 2));
	let secondHalf = n % 10 ** (numLength / 2);

	while (firstHalf != 0) {
		sumFirstHalf += firstHalf % 10;
		firstHalf = Math.floor(firstHalf / 10);
	}

	while (secondHalf != 0) {
		sumSecondHalf += secondHalf % 10;
		secondHalf = Math.floor(secondHalf / 10);
	}

	if (sumFirstHalf === sumSecondHalf) {
		return true;
	} else {
		return false;
	}

	console.log(sumFirstHalf);
	console.log(sumSecondHalf);
}
