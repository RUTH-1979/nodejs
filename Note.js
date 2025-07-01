// Calculer la moyenne d'un élève
// moyenne = sommeNotes / nombreDeNotes
// sommeNotes = note1 + note2 + note3 + ... + noteN
//      nombreDeNotes = N 

var notes = process.argv.slice(2).map(function(value) {
    return parseInt(value);
}).filter(function(value) {
    return !isNaN(value);
});

var nombreDeNotes = notes.length;

// Utiliser la boucle for...of
var sommeNotes = 0;
for (let note of notes) {
    // ....
}

var moyenne = sommeNotes / nombreDeNotes;
if (moyenne< 10){
    console.log('echec');
}if (moyenne < 12){
    console.log('passable');
}else if (moyenne < 14){
    console.log('assez bien');
}else if (moyenne < 16){
    console.log('bien');
}else {
    console.log('exellente');
}


