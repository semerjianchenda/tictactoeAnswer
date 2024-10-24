//players should be able to click to a spot on the board
// document.querySelector('.restart').addEventListener('click', resetGame)
const gameBoard = document.getElementById('board')
const result= document.querySelector('.results')
document.querySelector('.restart').addEventListener('click', restartGame)



let turns = 0;
let playerOne = 'X'
let playerTwo = 'O'
let currentPlayer = playerOne

let spaces = Array(9).fill(null) //this tells you that there are 9 empty indexes


const winnerSquares = [                     //potential winning arrays
    ['#topLeft','#topMiddle','#topRight'],
    ['#midLeft','#midM','#midRight'],
    ['#bottomLeft','#bottomM','#bottomRight'],
    ['#topLeft','#midLeft','#bottomLeft'],
    ['#topMiddle','#midM','#bottomM'],
    ['#topRight','#midRight','#bottomRight'],
    ['#topLeft','#midM','#bottomRight'],
    ['#topRight','#midM','#bottomLeft']
]


const squares = document.querySelectorAll('.sqaure'); 
// console.log(squares) //this selects the divs
// console.log(typeof squares)
squares.forEach((squareID) => {                         //this select all individual divs
    squareID.addEventListener('click', boxSelected);

  });
  


  function boxSelected(e){          //adds an event to the div
    console.log(e) //e = event and target is targeting the divs(element)
    
    const clickedElement = e.target
    // e.target.innerText = currentPlayer //adds text to each div

    if (clickedElement.innerText == "") { //this checks to see if there is text in the square
        clickedElement.innerText = currentPlayer //sets the innertext to x or o
        clickedElement.removeEventListener('click', boxSelected)//once the innertext is set we want to make sure no one else can change the innertext
        turns += 1;
        //turn has increased by 1
    }

    //when the box is empty allow player to click
    //when the box has something- disable from clicking

    currentPlayer = currentPlayer == playerOne ? playerTwo : playerOne  //if X== X return player O and if X != x set to X before ? result if true and after colon result if false
    // if(currentPlayer == playerOne){
    //     currentPlayer == playerTwo
    // }else{
    //     currentPlayer == playerOne
    // }

    // console.log(turns)

   //potentially create a gameclass to put all the functions in
checkGameOver()
    

  }
function checkGameOver(){ //function declaration- defining it
    checkWinner()
    if(turns == 2){ 
        turns = 0;
        return turns
      }
    gridIsFull()
}
function gridIsFull(){
    if(spaces.every(space => space != null) ){
        document.querySelector('.results').innerText = 'Tie! Game Over'
    }
}
  
  //player1 clicks and then we increase turns by +1 satisfied
  //player2 clicks and then we increase players by +1 satisfied
  //when turns = 2 we start the end of turns process satisfied
  //check to see if there is a winner, tie and if neither then reset turns satisfied

  //check to see if the grid is full, restart the same potentially create gridisfull function
  //
 


function checkWinner(){

    
    for(let i =0; i < winnerSquares.length; i++){
        let first = document.querySelector(winnerSquares[i][0]).innerText
        let second = document.querySelector(winnerSquares[i][1]).innerText
        let third= document.querySelector(winnerSquares[i][2]).innerText

        if(first == second && second == third && first != '') {
            if(first == "X"){
                document.querySelector(".results").innerText = "X is the Winner!"
                return;
            }else{
                document.querySelector(".results").innerText = "O is the Winner!"
                return;
            }
        }
  
        // 
        //create an else statment for a tie
}
}


function restartGame(){
    window.location.reload();
}



