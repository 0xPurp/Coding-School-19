// - ## Exo 6
//     ##  Voici un tableau : 
let donnees = [14, 7, 97, {}, "247", 67, 101, true, 34, 78, [], 'coding school', 0, 11, 32, "italie", 61, null, 'cent', 100];

let typeString = [];
let typeNumber = [];
let typeObject = [];
let typeAutre = [];



donnees.forEach(elem =>{
    if(typeof elem == 'string'){
        typeString.push(elem);
    }else if (typeof elem == 'number'){
        typeNumber.push(elem);
    }else if (typeof elem == 'object'){
        typeObject.push(elem);
    }else {
        typeAutre.push(elem);
    }
});

donnees.forEach(elem => {
    donnees.splice(donnees.indexOf(typeString[elem],0));
    donnees.splice(donnees.indexOf(typeNumber[elem],0));
    donnees.splice(donnees.indexOf(typeObject[elem],0));
    donnees.splice(donnees.indexOf(typeAutre[elem],0));
    
});

console.log(donnees);
console.log(typeString);
console.log(typeNumber);
console.log(typeObject);
console.log(typeAutre);



//     ## Triez le contenu du tableau donnees en verifiant le type de chaque donnée
//     ## Creez 4 Tableaux : 'typeString' , 'typeNumber' , 'typeObject' , 'typeAutre.
//     ## Videz le tableau "donnees" en redistribuant avec l'aide de condition et d'une function prédéfinie trouvée sur internet dans les bons tableaux.


