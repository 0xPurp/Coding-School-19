// exo 1
let tab = [];
let max = prompt("Max élèves :");
do {
    tab.push("Eleves");
} while (tab.length < max);


// exo 2
let prenoms = ["nom1", "nom2", "nom3", "nom4", "nom5", "nom6", "nom7", "nom8", "nom9"];
let i = 0;
do {
    console.log("Bonjour " + prenoms[i]);
    i++
} while (i < 9);

// exo 3
let fruits = ["cerise", "raisin", "pomme", "poire", "pêche", "melon"];
do {
    fruits.pop()
} while (fruits.length > 0);
console.log(fruits);

// exo 4 & 5
let panierLegumes = ["cornichon", "Tomatte", "poivron", "carottes"];
let longueur = panierLegumes.length;
console.log(longueur);
let caisseLegumes = [];
let i = 0
do {
    caisseLegumes.push(panierLegumes.pop());
    i++
} while (longueur > i);
console.log(caisseLegumes);
console.log(panierLegumes);

// exo 6
let enigme;
do {
    enigme = prompt("Jamais deux sans ?");
    if (enigme == "212") {
        alert('Bonne réponse !')
    } else {
        alert("Mauvaise réponse, 210 + 2 ?")
    }
} while (enigme != "212");
