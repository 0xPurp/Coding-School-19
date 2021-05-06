// exo 1
let tabPrenoms = ["Prenom1", "Prenom2", "Prenom3", "Prenom4", "Prenom5", "Prenom6", "Prenom7", "Prenom8", "Prenom9"];
let tabLength = tabPrenoms.length;
console.log(tabLength);
console.log("Bonjour " + tabPrenoms[0]);
console.log("Bonjour " + tabPrenoms[1]);
console.log("Bonjour " + tabPrenoms[2]);
console.log("Bonjour " + tabPrenoms[3]);
console.log("Bonjour " + tabPrenoms[4]);
console.log("Bonjour " + tabPrenoms[5]);
console.log("Bonjour " + tabPrenoms[6]);
console.log("Bonjour " + tabPrenoms[7]);
console.log("Bonjour " + tabPrenoms[8]); 

// exo 2
let gues =  prompt("Gues a number between 1 & 10 ");
let random = Math.ceil(Math.random() * 10);

if (gues != random) {
    alert("Bad Answer ! try again.");
    gues = prompt("Gues a number between 1 & 10");
}else if (gues == random) {
    alert("Good job, you found the right number !");
}else {
    alert("An error has been occured");
}

// exo 3