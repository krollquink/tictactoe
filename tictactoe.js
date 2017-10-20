var scanf = require("scanf")
var boardState 

var newGame = function newGame(){
	
	var newBoardState = ["_","_","_",
		          "_","_","_",
		          "_","_","_",];
	return newboardState;
}

var jsboard = function printBoard(boardState){

	for(i=1;i<4;i++){
	console.log( boardState[(i*1)-1] + " " + boardState[(i*2)-1] + " " + boardState[(i*3)-1])
	}	


}

var player

var move = function playerMove(player,number){
	
	if( boardState[number] != "X" && boardState[number] != "O" ){
		boardState[number] = player;
	}

}

console.log("Welcome to My Tic Tac Toe Game")

jsboard(newGame())

//console.log(newGame())
