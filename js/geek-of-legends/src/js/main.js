class Humain {
    constructor(nom, pv){
        this.nom = nom;
        this.pv = pv;
    }
}

let bernard = new Humain("Bernard le menaçant", 10)


class Mage extends Humain {
    constructor(nom, pv, maitrise, niveau){
        super(nom, pv)
        this.maitrise = maitrise;
        this.niveau = niveau;
    }
}


let air = new Mage("Bernard la tornade", 15, "Air")

let feu = new Mage("Bernard le brulé", 50, "Feu")

let terre = new Mage("Bernard le bouseux", 10, "Terre")

let eau = new Mage("Bernard le mouillé", 15, "Eau")



class Guerrier extends Humain {
    constructor(nom, pv, armes){
        super(nom, pv)
        this.armes = armes;
    }
}

let berserker = new Guerrier("Bernard le guerrier", 150, [])



class Archer extends Humain {
    constructor(nom, pv, arc){
        super(nom, pv)
        this.arc = arc;
    }
}


let archer = new Archer("Bernard le bigleux", 15, [])

u