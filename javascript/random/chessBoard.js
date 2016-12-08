
function chessBoard(size) {
	var isHashtag = true;
	for (var i = 0; i < size; i++) {
		var chessBoardDisplay="";
		for (var j = 0; j < size; j++) {
			chessBoardDisplay += isHashtag ? "#" : " ";
			isHashtag = !isHashtag;
		}
		isHashtag = !isHashtag;
		console.log(chessBoardDisplay);
	}
}

chessBoard(10);