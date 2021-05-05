// Math.round() => arrondit à l'entier le plus proche 
let nombre = 9/4; 
console.log(nombre)
console.log(Math.round(nombre));

// Math.ceil() => arrondit à l'entier le plus haut
console.log(Math.ceil(nombre));

// Math.floor() => arrondit à l'entier le plus bas
console.log(Math.floor(nombre));

// Math.random() => génère un nombre à virgule aléatoire entre 0 et 1
let nombre2 = Math.random();
console.log(nombre2);

// pour un nombre aléatoire entier entre 1 et 100
let nombre3 = Math.round(Math.random()*100);
console.log(nombre3);

// Math.trunc() retourne un nombre sans virgule
let nombre4 = 45.941523;
console.log(Math.trunc(nombre4));

//Math.power() retourne un nombre mis à sa puissance
console.log(Math.pow(5,2));

// Math.sqrt retourne la racine carrée d'un nombre 
let nombre5 = 9;
console.log(Math.sqrt(nombre5));

// Math.cbrt() retourne la racine cubique d'un nombre
console.log(Math.cbrt(nombre5));

// Math.abs() retourne une valeur absolue (pas de nombres négatifs)
let nombre6 = -2;
console.log(Math.abs(nombre6));

//Math.min() et .max() retourne le plus petit ou le plus grand nombre d'une série
console.log(2,3,1);
console.log(Math.min(2,3,1));
console.log(Math.max(2,3,1));