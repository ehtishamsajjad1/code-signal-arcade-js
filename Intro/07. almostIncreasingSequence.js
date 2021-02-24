// Given a sequence of integers as an array, 
// determine whether it is possible to obtain a strictly increasing sequence 
// by removing no more than one element from the array.

// Note: sequence a0, a1, ..., an is considered to be a strictly increasing 
// if a0 < a1 < ... < an. 
// Sequence containing only one element is also considered to be strictly increasing.

// Example

// For sequence = [1, 3, 2, 1], the output should be
// almostIncreasingSequence(sequence) = false.

// There is no one element in this array that can be removed 
// in order to get a strictly increasing sequence.

// For sequence = [1, 3, 2], the output should be
// almostIncreasingSequence(sequence) = true.

// You can remove 3 from the array to get the strictly increasing sequence [1, 2]. 
// Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

function almostIncreasingSequence(sequence) {
	for (let i = 0; i < sequence.length; i++) {
		if (sequence[i] >= sequence[i + 1]) {
			const tempValue = sequence[i];
			const tempIndex = i;
			sequence.splice(i, 1);
			// console.log(sequence);
			for (let j = 0; j < sequence.length; j++) {
				if (sequence[j] >= sequence[j + 1]) {
					console.log(j);
					sequence.splice(tempIndex, 0, tempValue);
					sequence.splice(tempIndex + 1, 1);
					// console.log(sequence);
					for (let k = 0; k < sequence.length; k++) {
						if (sequence[k] >= sequence[k + 1]) {
							return false;
						}
					}
					console.log(sequence);
				}
			}
		}
	}
	// console.log(sequence);
	return true;
}
let sequence = [1, 2, 1, 2];
almostIncreasingSequence(sequence);
