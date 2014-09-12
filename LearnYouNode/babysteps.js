var nums = process.argv.slice(2);
console.log(nums.reduce(function(acc, cur, i, arr) {
	return acc + (+cur);
}, 0));