const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
		let result = [];
    let currentChunk = [];
    let currentSum = 0;

    for (let num of arr) {
        // Check if adding the current number would exceed the max sum
        if (currentSum + num <= n) {
            currentChunk.push(num);
            currentSum += num;
        } else {
            // If it exceeds, add the current chunk to the result and start a new chunk
            result.push(currentChunk);
            currentChunk = [num];
            currentSum = num;
        }
    }

    // Add the last chunk to the result if it's not empty
    if (currentChunk.length > 0) {
        result.push(currentChunk);
    }

    return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
