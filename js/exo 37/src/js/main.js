//exo1
let myRedPurple = document.getElementsByClassName("redPurple");
console.log(myRedPurple);

//exo2
let myRedPurpleQuery = document.querySelectorAll(".redPurple");
console.log(myRedPurpleQuery);

//exo3
let myRedPurpleH1 = document.querySelectorAll("h1.redPurple");
console.log(myRedPurpleH1);

//exo4
let myQuerySelectorAll = document.querySelectorAll("li, span, p");
console.log(myQuerySelectorAll);

//exo5
let myQuerySelectorAll2 = document.querySelectorAll(".important, p");
console.log(myQuerySelectorAll2);

//exo6
let myQuerySelectorAll3 = document.querySelectorAll("h1.redPurple, span.redPurple");
console.log(myQuerySelectorAll3);


// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Récupère avec getElementsByClassName "redPurple" affiche et observe
let redPurple = document.getElementsByClassName("redPurple");
console.log(redPurple);

// ### 2. Fais la meme chose qu'a l'exercice 1 mais avec un querySelectorAll, observe la différence
let redPurple2 = document.querySelectorAll(".redPurple");
console.log(redPurple2);

// ### 3. En utilisant querySelectorAll trouve un moyen de ne récupérer que les h1 ayant la class "redPurple"
let redPurpleH1 = document.querySelectorAll("h1.redPurple");
console.log(redPurpleH1);

// ### 4. Trouve le moyen de récupèrer en un seul querySelectorAll tous les éléments li, les éléments p et les éléments span
let allElem = document.querySelectorAll("li, p, span");
console.log(allElem);

// ### 5. Trouve le moyen de récupèrer en un seul querySelectorAll tous les éléments li ayant la class important et les éléments p 
let important = document.querySelectorAll("li.important, p");
console.log(important);

// ### 6. Récupère en un seul querySelectorAll uniquement les h1 et les span ayant la class "redPurple"
let redPurple3 = document.querySelectorAll("h1.redPurple, span.redPurple");
console.log(redPurple3);







