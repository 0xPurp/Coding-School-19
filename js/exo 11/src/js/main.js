//Exo 1
let tlen = "zbi"
let tabExo = ["Exo", tlen, 3, 6, true];
console.log(tabExo);

//Exo 2
console.log(tabExo.length);

//Exo 3
tabExo.pop();
console.log(tabExo);

//Exo 4 
tabExo.shift();
console.log(tabExo);

// Exo 5
tabExo.push("Kiwi");
tabExo.push("tlen");
console.log(tabExo);


// exo 6
tabExo.unshift("Valeur3");
tabExo.unshift("Valeur2");
tabExo.unshift("Valeur1");
console.log(tabExo);

// exo 7
tabExo.reverse();
console.log(tabExo);


// exo 8
let boite = [];
boite.push("crabe");
boite.push("aquarium");
console.log(boite);

boite.unshift("confiture");
console.log(boite);

boite.push("crevette", "feuille", "baguettes");
console.log(boite);

boite.splice(0,3);
console.log(boite);

boite.unshift("pantalon");
console.log(boite);
console.log(boite.length);

boite.splice(boite.length-2);
console.log(boite)

boite.splice(0);
console.log(boite);