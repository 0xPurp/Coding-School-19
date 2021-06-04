let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"


// > Event Target

// ### 1. Créer un programme qui te permet de passer le contenu de la variable pContent jusqu'a une function et en suite fait en sorte que cette function ajoute ce qu'elle a reçue en parametre dans le p de la section au click du bouton.

let myP = document.querySelector("p");

let myButton = document.querySelector("button");

let maFonc = (replace) => {
    myP.innerText = replace;

}

myButton.addEventListener("click", () =>{
    maFonc(pContent)
})

// ### 2. Créer un programme qui au clique du h1, le background devient gold et sa color red, Attention voici les contraintes :
// - Les couleurs sont contenu dans des variables sur le fichier main.js, sert-en pour les affecter au style de la balise h1
// - Il faut que ces variables soient envoyé en parametre dans la function via le addEventListener.

let theColor = "red";
let theBackground = "gold";

let h1 = document.querySelector("h1");

let maFonc2 = (bg, color) => {
    h1.style.backgroundColor = bg;
    h1.style.color = color;
}

h1.addEventListener("click", () =>{
    maFonc2(theBackground, theColor)
})