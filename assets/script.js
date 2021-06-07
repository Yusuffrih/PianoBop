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

// const notes = 
// {noteC: "C-note", noteDb: "Db-note", noteD: "D-note", 
// noteEb: "Eb-note", noteE: "E-note", noteF: "F-note", 
// noteGb: "Gb-note", noteG: "G-note", noteAb: "Ab-note", 
// noteA: "A-note", noteBb: "Bb-note", noteB:"B-note"};

// Store the notes as objects
const notes = [
    {note: "C-note",
    audio: noteC},
    {note: "Db-note",
    audio: noteDb},
    {note: "D-note",
    audio: noteD},
    {note: "Eb-note",
    audio: noteEb},
    {note: "E-note",
    audio: noteE},
    {note: "F-note",
    audio: noteF},
    {note: "Gb-note",
    audio: noteGb},
    {note: "G-note",
    audio: noteG},
    {note: "Ab-note",
    audio: noteAb},
    {note: "A-note",
    audio: noteA},
    {note: "Bb-note",
    audio: noteBb},
    {note: "B-note",
    audio: noteB},
]

for (let key of keys) {
    key.addEventListener('click', function (){
        let note = key.dataset.note;

        // Just leaving some notes for you

        let notePlayed = notes.filter(played => played.note === note);  // <<< This is a for loop that loops over testnotes and returns an object if the note in the object matches the note of the key that was played

        console.log(notePlayed)  // the object returned, has both note and audio properties
        
        console.log(notePlayed[0].note)  // object is returned as an array so we access the first index (since we're returning one object we know it will be at the first index) and we can now target the note:  .note | and see below, the audio file:  .audio
        console.log(notePlayed[0].audio)
        notePlayed[0].audio.play()
    })
};





