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
    for (let i = 0; i < 9; i++){
      ul.appendChild(document.createElement("li"));
    }
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
