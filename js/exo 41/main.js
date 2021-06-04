// ## Exo 01 
// > Créez un bouton en JS avec une valeur "Je suis un bouton"
// > Au clique la valeur du bouton devient "j'ai été cliqué"

let myBody = document.querySelector("body");
let btn = document.createElement("button");
btn.textContent = "Je suis un bouton";
myBody.appendChild(btn);

btn.addEventListener("click", () => {
    btn.textContent = "J'ai été cliqué";
});


// ## Exo 02
// > Créer un 2eme button
// > Au clique la valeur du button devient "j'ai été cliqué x fois" le x est le nombre de clique effectué.
let btn2 = document.createElement("button");
btn2.textContent = "Je suis un bouton";
myBody.appendChild(btn2);
let x = 0;

btn2.addEventListener("click", () => {
    x += 1;
    btn2.textContent = `J'ai été cliqué ${x} fois`
});

// ## Exo 03
// > Créer un button a qui vous assignerez l'écouteur d'évenement click qui rajoutera un titre dans votre page web
let monB = document.createElement("button");
monB.textContent = "Ajout d'un titre";
document.body.appendChild(monB);
let monH;

monB.addEventListener('click', () => {
    monH = document.createElement("h1");
    monH.textContent = "Coucou le titre";
    document.body.appendChild(monH);
});

// ## Exo 04
// > Créer un buttton, assigner l'écouteur d'évenement click. Ce bouton rajoutera un button dans votre page web avec comme valeur Exo 04
let monB2 = document.createElement("button");
monB2.textContent = "Ajout d'un bouton";
document.body.appendChild(monB2);
let monB3;

monB2.addEventListener('click', () => {
    monB3 = document.createElement("button");
    monB3.textContent = "exo 4";
    document.body.appendChild(monB3);
});

// ## Exo 05
// > Créez un paragraphe avec du texte
// > Créez un button "modifier la couleur du paragraphe"
// > Au clique ça changera la couleur du paragraphe
let monP = document.createElement("p");
monP.textContent = "je suis un paragraphe";
document.body.appendChild(monP);

let monB4 = document.createElement("button");
monB4.textContent = "Modifier la couleur du paragraphe";
document.body.appendChild(monB4);

monB4.addEventListener("click", () => {
    monP.style.color = "red";
});


// ## Exo 6
// > Etape 1 :
// > Créer un button qui crée un h2 avec une valeur "Je lance une function"
// > Rajouter le titre sur la page web
// > Etape 2 :
// > Cette function doit également rajouter un boutton avec comme valeur "Modifier le titre Exo 06"
// > Etape 3 :
// > le bouton "Modifier le titre" lance une function qui modifie le texte en lui mettant sa couleur en rouge.

let monB5 = document.createElement("button");
monB5.textContent = "Button";
document.body.appendChild(monB5);

let monH2 = document.createElement('h2');
monH2.innerHTML = "Je lance une fonction";

let btnEnPlus = document.createElement("button");
btnEnPlus.innerHTML = "Modifier le titre Exo6";

monB5.addEventListener('click', () => {
    document.body.appendChild(monH2);
    document.body.appendChild(btnEnPlus);
});

btnEnPlus.addEventListener("click", () => {
    monH2.style.color = "red";
});