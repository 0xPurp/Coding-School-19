// EXO1
// Créer une fonction qui prend deux paramètres, et les additionne, et fait un console.log du résultat.(Additionner)
let addition = (nb1, nb2) => {
    console.log(nb1 + nb2);
}
addition(4, 5);

// EXO2
// Créez une fonction qui prend deux paramètres, et soustrait le deuxième au premier, et faites un console.log du résultat.(Soustraction)
let soustraction = (nb1, nb2) => {
    console.log(nb1 - nb2);
}
soustraction(5, 4);

// EXO3
// Créez une fonction qui prend deux paramètres, et les multiplie, et faites un console.log du résultat.(Multiplication)
let multiplication = (nb1, nb2) => {
    return nb1 * nb2;
}
console.log(multiplication(2, 2));

// EXO4 
// Créez une fonction qui prend deux paramètres, et divise le premier par le deuxième, et faites un console.log du résultat.(Division)
let division = (nb1, nb2) => {
    return nb1 / nb2;
}
console.log(division(4, 2));

// EXO5
// Créez une fonction qui prend deux paramètres, et retourne le reste de la division du premier par le deuxième, et faites un console.log du résultat.(Modulo)
let modulo = (nb1, nb2) => {
    return nb1 % nb2;
}
console.log(modulo(10, 3));

// EXO6
// Créez une fonction qui prend un paramètre, et retourne le carré de ce nombre, et faites un console.log du résultat.(Racine carrée)
let carre = (chiffre) => {
    return Math.sqrt(chiffre);
}
console.log(carre(9));

// EXO7
// Créez une fonction qui prend deux paramètres, et retourne le premier nombre à l'exposant du deuxième, et faites un console.log du résultat.(Exposant)
let exposant = (nb1, nb2) => {
    return Math.pow(nb1, nb2);
}
console.log(exposant(2, 2));

// EXO8
// Créer une function [capitalize] qui transforme n'importe quelle chaine de caractères avec la première lettre en majuscule et le reste en minuscule;
let capitalize = (chaine) => {
    return chaine.charAt(0).toUpperCase() + chaine.substr(1).toLowerCase();
}
console.log(capitalize("chaiNe"));

// EXO9
// Créer une function [calcul] ayant 3 paramètres
// nbr1 , operator , nbr2
// Je dois pouvoir mettre un nombre choisir entre + - * ou / et un second nombre et obtenir une réponse (Utilisez un switch)
let calcul = (nb1, operator, nb2) => {
    switch (operator) {
        case "+":
            return nb1 + nb2;
        case "-":
            return nb1 - nb2;
        case "*":
            return nb1 * nb2;
        case "/":
            return nb1 / nb2;
        default:
            return "Veuillez entrer un opérateur valide !"
    }
}

console.log(calcul(parseInt(prompt("Veuillez encoder un chiffre")), prompt("Veuillez encoder un operateur"), parseInt(prompt("Veuillez encoder un chiffre"))));