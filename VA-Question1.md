# Question 1

Convert this problem from O(n^2) to O(n)

## Original
```
let  arr1  = [
[43, 51, 31],
[31, 62, 91],
[39, 32, 22],
[11, -11, 22],
];

let  max  =  Number.NEGATIVE_INFINITY;
let  min  =  Infinity;

for (let  index  =  0; index  <  arr1.length; index++) {
	let  row  =  arr1[index];
	for (let  subIndex  =  0; subIndex  <  row.length; subIndex++) {
		let  col  =  row[subIndex];
		if (col  >  max) {
			max  =  col;
		}
		if (col  <  min) {
			min  =  col;
		}
	}
}
```
## Optimized version

```
let  arr1  = [
[43, 51, 31],
[31, 62, 91],
[39, 32, 22],
[11, -11, 22],
];

let  max  =  Number.NEGATIVE_INFINITY;
let  min  =  Infinity;

let  flattenedArray  =  arr1.flat();

flattenedArray.forEach((element) => {
	if (element  >  max) {
		max  =  element;
	}

	if (element  <  min) {
		min  =  element;
	}
});
```

## Analysis

The first approach had to loop on each array element and then check inside each of those elements as each one is an array itself. Since the depth is just one step deep. Flattening the array would be an O(N) operation. Then the output is a single flat array, and looping through it to check for the minimum and maximum is an O(N) operation as it is a linear search. That leaves us with `O(N) + O(N) = O(N)`. Which is significantly better than `O(N^2)` that was the runtime of the original algorithm. 

