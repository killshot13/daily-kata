/**
 * Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
 * In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
 **/

function expressionMatter(a, b, c) {
	let exp1 = a * (b + c)
	let exp2 = a * b * c
	let exp3 = a + b * c
	let exp4 = a + b + c
	let exp5 = (a + b) * c
	let res = Math.max(exp1, exp2, exp3, exp4, exp5)
	return res
}
console.log(expressionMatter(3, 5, 4))
