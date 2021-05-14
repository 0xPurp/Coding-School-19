//1
// let monTab = ["Adil","Agim","Ali","Antoine","Chris","Elvis","Fanny","Haroune","Ilias D","Ilias El","Jean","Kevin","Lira","Mouna","Nasila","Nathan","Seif","Stan","Van Hoa","Yassine"];
// // METHODE FOR
// for(let i = 0; i < monTab.length; i++){
//     console.log(`Bonjour ${monTab[i]}`);
// }

// // METHODE FOR...IN
// for(i in monTab){
//     console.log(`Bonjour ${monTab[i]}`);
// }

// //2
// let nbr = parseInt(prompt("Inscrivez un nombre"));
// for(let i = 1; i <= nbr; i++){
//     console.log(i);
// }

//3
// for(let i = 0; i <= 20; i++){
//     //i est pair
//     if(i == 0){
//         console.log(i + " ohfuzifjozie");
//     }else if(i%2 == 0){
//         console.log(i + " est pair");
//     //i est impair (i%2 == 1)
//     }else{
//         console.log(i + " est impair");
//     }

// }

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ## Exo 1 
//     ## Déclarer une variable qui se nomme 'multiplicateur' valant 5
//     ## Utiliser une boucle for pour créer une table de multiplication allant jusqu'a 9 et apparaissant dans la console sous le format 5 x 1 = 5 etc. (ex: 5x1 = ... 5x2 = ... 5x3 = ... jusqu'à 9)
// let mult = 5;
// for(let i = 1; i <= 9; i++){
//     console.log(`${mult} x ${i} = ${mult*i}`);
// }

// - ## Exo 3
//     ## Faire une boucle décendante pour les nombres pairs de 20 à 0
//         ## Ex: 20-18-16, ect.
for (let i = 20; i >= 0; i -= 2) {
    console.log(i);
}

// - ## Exo 4
//     ## Créer un tableau avec les prénoms des gens de la classe
//     ## Avec l'aide d'une boucle, mettre les prénoms ayant plus de 5 caractères dans un second tableau qui se nomme 'longPrenoms'
// let monTab = ["Adil","Agim","Ali","Antoine","Chris","Elvis","Fanny","Haroune","Ilias D","Ilias El","Jean","Kevin","Lira","Mouna","Nasila","Nathan","Seif","Stan","Van Hoa","Yassine"];
// let longPrenoms = [];

// for(let i = 0; i < monTab.length; i++){
//     if(monTab[i].length > 5){
//         longPrenoms.push(monTab[i]);
//     }
// }

// console.log(monTab);
// console.log(longPrenoms);

// - ## Exo 5
//     ##  Créer un tableau qui se nomme 'sommes' avec une multitude de valeurs numérique
//         let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];
//     ## créer un tableau qui se nomme 'grossesSommes'. Si la valeur excède 60, pousser les dans ce tableau et les retirer du tableau sommes

let sommes = [14, 7, 97, 65, 247, 67, 101, 4, 34, 78, 1, 900, 0, 11, 32, 23, 61];
let grossesSommes = [];

// for(i in sommes){
//     if(sommes[i] > 60){
//         grossesSommes.push(sommes[i]);
//     }
// }
// // => un tableau grossesSommes qui est rempli

// for (i in grossesSommes) {
//     sommes.splice(sommes.indexOf(grossesSommes[i]), 1);
// }

for (let i = sommes.length; i >= 0; i--) {
    if (sommes[i] > 60) {
        grossesSommes.push(sommes[i]);
        sommes.splice(i, 1);
    }
}

console.log(sommes);
console.log(grossesSommes);



let tab = [15, 56, 65, 8, 42, 50];
let tabGdNb = [];

for (let i = 0; i < tab.length; i++) {
    if (tab[i] >= 50) {
        tabGdNb.push(tab[i]);
        tab.splice(i, 1);
    }
}

console.log(tab)
console.log(tabGdNb)