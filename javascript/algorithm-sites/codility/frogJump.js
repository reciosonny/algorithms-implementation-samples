//Y is the distance to finish line
//X is the starting point
//D is the distance a frog can jump
function frogJump(X,Y,D) {

	return Math.ceil((Y-X) / D); //parseInt(result);
}


console.log(frogJump(10,85,30));

// console.log(Math.ceil(1.2));