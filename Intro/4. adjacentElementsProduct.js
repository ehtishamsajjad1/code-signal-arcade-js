// Given an array of integers,
// find the adjacent pair that has the largest product and return that product.

// Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// adjacentElementsProduct(inputArray) = 21.

// 7 and 3 produce the largest product.

function adjacentElementsProduct(inputArray) {
	if (inputArray === undefined || inputArray.length === 0) return undefined;

	if (inputArray === 1) {
		return inputArray[0];
	}

	let maxProduct = inputArray[0] * inputArray[1];

	for (let i = 0; i < inputArray.length - 1; i++) {
		if (maxProduct < inputArray[i] * inputArray[i + 1]) {
			maxProduct = inputArray[i] * inputArray[i + 1];
			console.log(maxProduct);
		}
		console.log(inputArray[5] * inputArray[6]);
	}
	return maxProduct;
}
let inputArray = [5, 1, 2, 3, 1, 4];

adjacentElementsProduct(inputArray);
