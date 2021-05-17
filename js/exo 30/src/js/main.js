class Lieu {
    constructor(nom, personnes) {
        this.nom = nom;
        this.personnes = personnes;
    }
}

let mgk = new Lieu("Molengeek", []);
let snack = new Lieu("Snack", []);
let dar = new Lieu("Maison", []);

class Personne {
    constructor(nom, prenom, argent) {
        this.nom = nom,
            this.prenom = prenom,
            this.argent = argent,
            this.seDeplacer = (bus) => {
                return bus.embarquer(perso)
            }
    }
}

let perso = new Personne("George", "Moula", 1337);

class Bus {
    constructor(personnes, caisse) {
        this.personnes = personnes,
            this.caisse = caisse,
            this.embarquer = (passager) => {
                if (passager.argent >= 2.8) {
                    passager.argent -= 2.8;
                    bus.caisse += 2.8;
                    console.log(`Il vous reste ${perso.argent}`);
                    bus.personnes.push(perso.prenom);
                    console.log(bus.caisse);
                } else {
                    return console.log(`Trop cher ou quoi ?`);
                }
            }
    }
}

let bus = new Bus([], 0);
console.log(`${perso.prenom} est à ${maison.nom}`);
// 0830
perso.seDeplacer(bus);
// 0845
bus.personnes.pop();
mgk.personnes.push(perso.prenom);
console.log(mgk);
// 1245
mgk.personnes.pop()
console.log(mgk);
perso.seDeplacer(bus);
bus.personnes.pop();
snack.personnes.push(perso.prenom);
console.log(snack);
snack.personnes.pop();
console.log(snack);
// 1330
mgk.personnes.push(perso.prenom)
console.log(mgk);
// 1710
mgk.personnes.pop();
console.log(mgk);
perso.seDeplacer(bus)
console.log(bus.caisse);