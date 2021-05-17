<<<<<<< HEAD
// // exo 1 
// class Personnage {
//     constructor(nom, age, ville) {
//         this.nom = nom;
//         this.age = age;
//         this.ville = ville;
//         this.sePresenter = (phrase) => {
//             return phrase;
//         }
//     }
// }


// let bernard = new Personnage("Bernard", 69, "Paris");
// console.log(bernard)
// console.log(bernard.sePresenter("Bonjour je m'appelles " + bernard.nom + " !"))

// // exo 2


// class Lieux {
//     constructor(nom, contenu, ingredients) {
//         this.nom = nom,
//             this.contenu = contenu,
//             this.ingredients = ingredients
//     }
// }
// let maison = new Lieux("Maison", []);
// let epicerie = new Lieux("Epicerie", [], []);
// let cuisine = new Lieux("cuisine", [], []);

// class Ingredients {
//     constructor(nom, etat, prix) {
//         this.nom = nom,
//             this.etat = etat,
//             this.prix = prix
//     }
// }
// let poivron = new Ingredients("poivron", "entier", 1);
// let oignon = new Ingredients("oignon", "entier", 2);
// let oeuf = new Ingredients("oeuf", "entier", 4);
// let epice = new Ingredients("epice", "moulue", 3.25);
// let paprika = new Ingredients("paprika", "moulu", 1.5);
// let fromage = new Ingredients("fromage", "coupé", 1.6);

// class Personne {
//     constructor(nom, lieu, argent, panier) {
//         this.nom = nom,
//             this.lieu = lieu,
//             this.argent = argent,
//             this.panier = panier,
//             this.se_deplacer = () => {
//                 return console.log(`${this.nom} va à ${epicerie.nom}`);
//             },
//             this.payer = () => {
//                 return console.log(`${this.nom} va payer ${oignon.prix}€ et lui restera ${this.argent - oignon.prix}€.`);
//             },
//             this.couper = () => {
//                 return console.log(`${personnage.nom} va poser ${oignon.nom} et couper en ${oignon.etat}`);
//             }
//     }
// }

// let personnage = new Personne("Yousef", "Namek", 66)

// personnage.se_deplacer();
// personnage.payer();
// personnage.couper();



// exo 3
class Objet {
    constructor(nom, prix) {
        this.nom = nom,
            this.prix = prix
    }
}

let ipad = new Objet("iPad", 750);
let iphone = new Objet("iPhone", 250);


class Personna {
    constructor(nom, sac, argent) {
        this.nom = nom,
            this.sac = sac,
            this.argent = argent
        this.prendre = () => {

            },
            this.acheter = (vendeur, objet) => {
                if (this.argent >= objet.prix) {
                    this.sac.push(vendeur.sac[vendeur.sac.indexOf(objet)].nom)
                    vendeur.sac.pop()
                    vendeur.argent = vendeur.argent + 500
                    this.argent = this.argent - 500
                } else {
                    return console.log("Tu n'as pas assez d'argent pour payer va t'en !");
                }
            }
    }
}

let bernard = new Personna("Bernard", [ipad.nom], 1337);
let mathieu = new Personna("Mathieu", [iphone], 69000);

bernard.acheter(mathieu, iphone);
mathieu.prendre();

console.log(bernard);
console.log(mathieu);
=======
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


>>>>>>> 23fc5c76ef0450e742719e6166cf1482036a1342
