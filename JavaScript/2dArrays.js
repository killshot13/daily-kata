// Given the 2D array (m * n), find the sum of the minimum value in each row

function sumOfMinimums(arr) {
	const min = []

	arr.forEach((i) => {
		if (Array.isArray(i)) {
			min.push(Math.min(...i))
		} else {
			min.push(i)
		}
	})
	return min.reduce((a, b) => a + b, 0)
}
