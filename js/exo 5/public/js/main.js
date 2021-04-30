// Variable
let phrase = 'Bonjour tout le monde ';

// Affiche la longueur de la phrase
console.log(phrase.length);

//Supprime l'espace à la fin grace à une fonction 
console.log(phrase.trimEnd());

//Reafficher la longueur de la phrase
console.log(phrase.length);

//Afficher uniquement la dernière lettre de la phrase
console.log(phrase.substr(20))

// Enlever "Bonjour" de la phrase
console.log(phrase.replace("Bonjour", "."));

//Remettre Bonjour grace à une fonction
console.log(phrase.replace(".", "Bonjour"));

//Supprimer toute la phrase sauf "Bonjour" grâce à une méthode
console.log(phrase.replace("tout le monde", ""))

// donne un nombre aléatoire
console.log(Math.ceil(Math.random() * 100))