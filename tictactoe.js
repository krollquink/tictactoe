
var newGame = function newGame(){
	
	var boardState = ["_","_","_",
		          "_","_","_",
		          "_","_","_",];

	return boardState;

	

}

var jsboard = function printBoard(boardState){
	
	
	for(i=1;i<4;i++){
	console.log( boardState[(i*1)-1] + " " + boardState[(i*2)-1] + " " + boardState[(i*3)-1])
	}	


}
console.log("Welcome to My Tic Tac Toe Game")
jsboard(newGame())
//console.log(newGame())
