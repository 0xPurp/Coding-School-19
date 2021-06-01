class Lieu {
    constructor(nom, personnes) {
        this.nom = nom;
        this.personnes = personnes;
    }
}

let mgk = new Lieu("Mgk", []);
let snack = new Lieu("Snack", []);
let dar = new Lieu("Dar", []);

class Personne{
    constructor(nom, prenom, argent){
        this.nom = nom;
        this.prenom = prenom;
        this.argent = argent;
        this.seDeplacer = (depart, arrivee, transport) => {
            if(transport == "pied"){
                console.log(`${this.prenom} a voulu y aller à pieds.`);
            }else if(transport.embarquer(this) == 1){
                console.log(`${this.prenom} est riche grâce à son salaire, donc il est allée en bus.`);
            }else{
                console.log(`${this.prenom} n'est pas riche à cause de son salaire, donc il  doit marcher.`)
            }
            depart.personnes.splice(depart.personnes.indexOf(this),1);
            arrivee.personnes.push(this);
            console.log(`${this.prenom} est arrivée à ${arrivee.nom}`);
        }
    }
}

let perso = new Personne("George", "Moula", 1337);

class Bus {
    constructor(personnes, caisse){
        this.personnes = personnes;
        this.caisse = caisse;
        this.embarquer = (usager) => {
            if(usager.argent >= 2.80){
                usager.argent -= 2.80; 
                this.caisse += 2.80; 
                this.personnes.push(usager);
                console.log(`${usager.prenom} est rentré dans le bus.`);
                this.personnes.splice(this.personnes.indexOf(usager), 1);
                console.log(`${usager.prenom} est sorti du bus.`);
                return true; 
            }else{
                console.log(`${usager.prenom} marche biatch`);
                return false;
            }
        }
    }
}

let bus = new Bus([], 0);

// ### 8h00 Vous êtes à la dar.
dar.personnes.push(perso);
console.log(`08h00, ${perso.prenom} est à la dar`);

// ### 8h30 Vous prennez le bus vers Mgk.
perso.seDeplacer(dar, mgk, bus);

// ### 8h45 Vous êtes à mgk.
console.log(`08h45, ${perso.prenom} est à mgk`);


// // ### 12h45 Vous sortez de mgk, vous prenez le bus pour aller au snack.
perso.seDeplacer(mgk, snack, bus);


// // ### 13h30 Vous sortez du snack, et vous rentrer pied à Mgk pour digérer.
perso.seDeplacer(snack, mgk, "pied");

// // ### 17h10 Vous sortez de mgk, vous prenez le bus pour rentrer chez vous.
perso.seDeplacer(mgk, dar, bus);

// // ### Faites un console.log() de votre argent, ainsi que l'argent du Bus
console.log(perso.argent + " " + bus.caisse);


