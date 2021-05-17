// exo 1 
class Personnage {
    constructor(nom, age, ville) {
        this.nom = nom;
        this.age = age;
        this.ville = ville;
        this.sePresenter = (phrase) => {
            return phrase;
        }
    }
}


let bernard = new Personnage("Bernard", 69, "Paris");
console.log(bernard)
console.log(bernard.sePresenter("Bonjour je m'appelles " + bernard.nom + " !"))

// exo 2


class Lieux {
    constructor(nom, contenu, ingredients) {
        this.nom = nom,
            this.contenu = contenu,
            this.ingredients = ingredients
    }
}
let maison = new Lieux("Maison", []);
let epicerie = new Lieux("Epicerie", [], []);
let cuisine = new Lieux("cuisine", [], []);

class Ingredients {
    constructor(nom, etat, prix) {
        this.nom = nom,
            this.etat = etat,
            this.prix = prix
    }
}
let poivron = new Ingredients("poivron", "entier", 1);
let oignon = new Ingredients("oignon", "entier", 2);
let oeuf = new Ingredients("oeuf", "entier", 4);
let epice = new Ingredients("epice", "moulue", 3.25);
let paprika = new Ingredients("paprika", "moulu", 1.5);
let fromage = new Ingredients("fromage", "coupé", 1.6);

class Personne {
    constructor(nom, lieu, argent, panier) {
        this.nom = nom,
            this.lieu = lieu,
            this.argent = argent,
            this.panier = panier,
            this.se_deplacer = () => {
                return console.log(`${this.nom} va à ${epicerie.nom}`);
            },
            this.payer = () => {
                return console.log(`${this.nom} va payer ${oignon.prix}€ et lui restera ${this.argent - oignon.prix}€.`);
            },
            this.couper = () => {
                return console.log(`${personnage.nom} va poser ${oignon.nom} et couper en ${oignon.etat}`);
            }
    }
}

let personnage = new Personne("Yousef", "Namek", 66)

personnage.se_deplacer();
personnage.payer();
personnage.couper();



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
console.log(mathieu)