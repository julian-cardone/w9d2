const View = require("./ttt-view.js")
const Game = require("../ttt_node/game.js")

document.addEventListener("DOMContentLoaded", () => {
  let game = new Game();
  let figure = document.getElementsByClassName("ttt");
  let view = new View(game, figure);
});
