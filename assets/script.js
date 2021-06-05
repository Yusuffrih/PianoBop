const keys = document.querySelectorAll('#game-area [data-note]');

const noteC = new Audio('assets/notes/C.m4a');
const noteDb = new Audio('assets/notes/C#-Db.m4a');
const noteD = new Audio('assets/notes/D.m4a');
const noteEb = new Audio('assets/notes/D#-Eb.m4a');
const noteE = new Audio('assets/notes/E.m4a');
const noteF = new Audio('assets/notes/F.m4a');
const noteGb = new Audio('assets/notes/F#-Gb.m4a');
const noteG = new Audio('assets/notes/G.m4a');
const noteAb = new Audio('assets/notes/G#-Ab.m4a');
const noteA = new Audio('assets/notes/A.m4a');
const noteBb = new Audio('assets/notes/A#-Bb.m4a');
const noteB = new Audio('assets/notes/B.m4a');

let notes = ['noteC, noteDb, noteD, noteEb, noteE, noteF, noteGb, noteG, noteAb, noteA, noteBb, noteB']

keys[0].onclick = () => noteC.play();
