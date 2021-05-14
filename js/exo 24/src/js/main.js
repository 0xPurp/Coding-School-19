// exo 1
let addition = (nb1, nb2) => {
    console.log(nb1+nb2);
}
addition(4,5);

// exo 2
let soustraction = (nb1, nb2) => {
    console.log(nb1-nb2);
}
soustraction(5,4);

// exo 3
let multiplication = (nb1, nb2) => {
    return nb1*nb2;
}
console.log(multiplication(2,2));

// exo 4 
let division = (nb1, nb2) => {
    return nb1/nb2;
}
console.log(division(4,2));

// exo 5
let modulo = (nb1, nb2) => {
    return nb1%nb2;
}
console.log(modulo(10,3));

// exo 6
let carre = (chiffre) => {
    return Math.sqrt(chiffre);
}
console.log(carre(9));

// exo 7
let exposant = (nb1, nb2) => {
    return Math.pow(nb1, nb2);
}
console.log(exposant(2,2));

// exo 8
let capitalize = (chaine) => {
    return chaine.charAt(0).toUpperCase()+chaine.substr(1).toLowerCase();
}
console.log(capitalize("chaiNe"));

// exo 9
let calcul = (nb1, operator, nb2) => {
    switch(operator){
        case "+":
            return nb1+nb2;
        case "-":
            return nb1-nb2;
        case "*":
            return nb1*nb2;
        case "/":
            return nb1/nb2;
        default:
            return "Veuillez entrer un opérateur valide !"
    }
}

console.log(calcul(parseInt(prompt("Veuillez encoder un chiffre")), prompt("Veuillez encoder un operateur"),parseInt(prompt("Veuillez encoder un chiffre"))));


