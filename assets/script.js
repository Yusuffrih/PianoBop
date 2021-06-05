const keys = document.querySelectorAll('#game-area [data-note]');

const noteC = new Audio('assets/notes/C.m4a');

keys[0].onclick = () => noteC.play();
