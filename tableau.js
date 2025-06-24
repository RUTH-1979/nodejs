// Tableau vide
var tab1 = [];

// Tableau d'entiers
var tab2 = [2, 5, 4, 1, 3];
//          0  1  2  3  4

// Tableau simple
var tab3 = ["Ruth", false, 27, [2, true, ["bonjour", "bonsoir"]], "Axel"];
//          0       1      2   3                                  4

// Tableau de strings
var tab4 = ["Larissa", "Daniel", "Joseph", "Jean", "Melanie"];

// Acces aux tableaux
console.log("tab1[0]", tab1[0]); // <-- undefined
console.log("tab2[2]", tab2[2]); // <-- 4
console.log("tab2[4]", tab2[4]); // <-- 3
console.log("tab2[9]", tab2[9]); // <-- undefined
console.log("tab3[4]", tab3[4]); // <-- "Axel"
console.log("tab3[3][1]", tab3[3][1]); // <-- true
console.log("tab3[3][2][1]", tab3[3][2][1]); // <-- "bonsoir"

// Operation 1: Recherche
var find1 = tab2.find(function (valeur) {
    return valeur > 3;
});
console.log("find1", find1); // <-- 5

// Operation 2: Transformation
var tab5 = tab4.map(function (valeur) {
    return valeur.length; // Retourne le nombre de caracteres
});
console.log("tab5", tab5);

// Operation 3: Aggregation
// Somme
var somme = tab2.reduce(function (previous, current){
    return previous + current;
}, 0);
// 1. previous: 0, current: 2 -> 0 + 2 = 2
// 2. previous: 2, current: 5 -> 2 + 5 = 7
// 3. previous: 7, current: 4 -> 7 + 4 = 11
// ...
console.log("somme", somme); // <-- 15

// Operation 4: Insertion & Suppression & Modification
tab2.push(6, 8, 7); // Insertion a la fin du tableau
console.log("tab2", tab2);
tab2.unshift(9, 10); // Insertion au debut du tableau
console.log("tab2", tab2);

tab2[2] = "test"; // Modification de l'index 2
console.log("tab2", tab2);

delete tab2[2];
console.log("tab2", tab2);

tab2[2] = "test";
tab2 = tab2.filter(function (valeur) {
    return valeur != "test";
});
console.log("tab2", tab2);
