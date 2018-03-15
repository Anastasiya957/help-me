module.exports = function count(s, pairs) {
  // your implementation
  let N = calculateN(pairs);
  let dividers = [];
  for (let i = 0; i < pairs.length; i++) {
  	dividers.push(pairs[i][0]);
  }

  let countK = 0;
  for (var k = 1; k <= N; k++) {
  	if (checkKWithMask(k, s, dividers)) {
  		countK++;
  	}
  }

  if (countK > 1000000007) {
	countK = countK % 1000000007;
  }
  return countK;
}

/*function count(s, pairs) {
  // your implementation
  let N = calculateN(pairs);
  // console.log("N:", N);

  let dividers = [];
  for (let i = 0; i < pairs.length; i++) {
  	dividers.push(pairs[i][0]);
  }
  // console.log("Dividers:", dividers);

  let countK = 0;
  for (var k = 1; k <= N; k++) {
  	if (checkKWithMask(k, s, dividers)) {
  		countK++;
  	}
	// console.log("---------------------------");
  }

  if (countK > 1000000007) {
	countK = countK % 1000000007;
  }
  return countK;
}*/

function calculateN(pairs) {
	let N = 1;
	for (let i = 0; i < pairs.length; i++) {
		N *= Math.pow(pairs[i][0], pairs[i][1]);
		if (N > 1000000007) {
			N = N % 1000000007;
		}
	}
	return N;
}

function checkGCDEqualOne(number, dividers) {
	for (let i = 0; i < dividers.length; i++) {
		if (number % dividers[i] === 0) {
			// console.log(number, "false");
			// console.log("---------------------------");
			return false;
		}
	}
	// console.log(number, "true");
	return true;
}
/*
function checkGCDNotEqualOne(number, dividers) {
	for (let i = 0; i < dividers.length; i++) {
		if (number % dividers === 0) {
			return true;
		}
	}
	return false;
}*/

function checkKWithMask(k, s, dividers) {
	for (let j = 0; j < s.length; j++) {
		if (s[j] === "0") {
			// console.log("Mask = 0");
			if (checkGCDEqualOne(k+j, dividers)) {
				return false;
			}
		} else {
			// console.log("Mask = 1");
			// console.log("k: ", k, "; j: ", j);
			if (!checkGCDEqualOne(k+j, dividers)) {
				return false;
			}
		}
	}
	return true;
}

// console.log("Count K: ", count('1', [[2, 1], [3, 1]]));

// console.log(checkGCDEqualOne(0, [2,3]));