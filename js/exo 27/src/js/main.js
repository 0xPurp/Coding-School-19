
// Exo 1 
let obj = {
    nom : "George",
    prenom : "Moula",
    age : 69,
    taille : "180cm",
};
console.log(obj.age);

// Exo 2 

let obj2 = {
    nom : "Jean",
    prenom : "Neymar",
    age : 12,
    taille : "194cm",
};
console.log(obj2);
let obj3 = {};

// exo 3
obj3 = {
    nom : obj.nom,
    prenom : obj2.prenom,
    age : obj.age,
};
console.log(obj3);


// exo 4

let perso1 = {
    prenom : "Sergio",
    aliments : ["pates","tv","livre"],
    perte : "",
    perte1 : "",

    perte(){
        this.perte = prompt("on t'as volé quoi ?");
        this.aliments.pop(this.perte);
        console.log(this.aliments);
    }
}

let perso2 = {
    prenom : "Francois",
    aliments : ["courge","tomate","salade","carottes"],
    vol : "",
    vol1 : "",

    rob(){
        this.aliments.push("pain", "poulet");
        perso1.aliments.shift()
        perso1.aliments.shift()
        console.log(this.aliments);
        console.log(perso1.aliments);
    }

}

perso2.rob()
