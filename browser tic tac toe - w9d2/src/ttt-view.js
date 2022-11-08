class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
    this.bindEvents();
  }

  setupBoard() {
    let figure = document.getElementsByClassName("ttt");
    let ul = figure[0].appendChild(document.createElement("ul"));
    ul.classList.add("grid");
    for (let i = 0; i < 3; i++){
      for (let j = 0; j < 3; j++){
        let li = document.createElement('li');
        li.setAttribute('data-pos', `[${i},${j}]`);
        ul.appendChild(li);
      }
    }
    // el = ul
    // for (let i = 0; i < 9; i++){
    //   ul.appendChild(document.createElement("li"));
  }
  
  bindEvents() {
    // document.getElementsByClassName('grid')[0]
    let ul = document.querySelector('ul');
    
    ul.addEventListener('click', (e) => {
      this.handleClick(e);
    })
  }

  handleClick(e) {
    let li = e.target;
    this.makeMove(li);
  }

  makeMove(square) {

   let strVal = square.getAttribute('data-pos')
  //  console.log(strVal)
   
   let pos = [parseInt(strVal[1]), parseInt(strVal[3])]
  //  console.log(pos)
  //  console.log(pos, pos[0])
  //  console.log(square.getAttribute('data-pos')[0])
  //  console.log(this.game)
  //  debugger
   this.game.playMove(pos)
   
  //  console.log(pos);
  // debugger
  // const listItems = document.querySelectorAll(".grid > li")
  
  let currentPlayer = this.game.currentPlayer

  // console.log(square)
    // debugger
  if (currentPlayer === 'x'){
    square.innerHTML = 'x';
    square.style.backgroundColor = 'blue';
    console.log(square.innerHTML)
  } else {
    square.innerHTML = 'o';
    square.style.backgroundColor = 'red';
    console.log(square.innerHTML)
  }

  // Element.style.backgroundColor = 'blue';

  if (this.game.board.isOver()){
    this.game.winner();
    alert('game over')
    
    }

  }

}

module.exports = View;
