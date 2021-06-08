const keys = document.querySelectorAll('#game-area [data-note]');

const noteC = new Audio('assets/notes/C.m4a');
const noteDb = new Audio('assets/notes/Db.m4a');
const noteD = new Audio('assets/notes/D.m4a');
const noteEb = new Audio('assets/notes/Eb.m4a');
const noteE = new Audio('assets/notes/E.m4a');
const noteF = new Audio('assets/notes/F.m4a');
const noteGb = new Audio('assets/notes/Gb.m4a');
const noteG = new Audio('assets/notes/G.m4a');
const noteAb = new Audio('assets/notes/Ab.m4a');
const noteA = new Audio('assets/notes/A.m4a');
const noteBb = new Audio('assets/notes/Bb.m4a');
const noteB = new Audio('assets/notes/B.m4a');

const notes = [
    {note: "C-note", audio: noteC},
    {note: "Db-note", audio: noteDb},
    {note: "D-note", audio: noteD},
    {note: "Eb-note", audio: noteEb},
    {note: "E-note", audio: noteE},
    {note: "F-note", audio: noteF},
    {note: "Gb-note", audio: noteGb},
    {note: "G-note", audio: noteG},
    {note: "Ab-note", audio: noteAb},
    {note: "A-note", audio: noteA},
    {note: "Bb-note", audio: noteBb},
    {note: "B-note", audio: noteB},
]

for (let key of keys) {
    key.addEventListener('click', function (){
        let note = key.dataset.note;
        let notePlayed = notes.filter(played => played.note === note);
        const notePlayedAudio = notePlayed[0].audio;
        notePlayedAudio.currentTime = 0;
        notePlayedAudio.play();
        /* How to add and remove active class taken 
        from WDS - https://www.youtube.com/watch?v=vjco5yKZpU8 */
        key.classList.add('active');
        notePlayedAudio.addEventListener('ended', function (){
            key.classList.remove('active');
        });
    })
};





