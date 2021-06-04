// >*Cherche des methodes pour résoudre les énoncés suivants :*

let competences = {
    HTML: '71%',
    CSS: '95%',
    JS: '50%',
    React: '18%',
    Laravel: '100%'
}

// ### 1. Stock tous les h2 dans une variable du nom de 'elements', attention voici les contraintes :
// - Tu dois utiliser un querySelectorAll
// - Tu dois ciblé la div et plus précicément son id "liste-competences"
let elements = document.querySelectorAll("#liste-competences > h2");

// ### 2. Insert dans les bons H2 les pourcentages de ton objet, voici les contraintes :
// - Utilise une boucle "for in" pour parcourir ton objet

let tab = Array.from(elements);
let tabObj = Object.values(competences);

for (let i in tabObj) {
    tab[i].innerHTML += ` ${tabObj[i]}`;
}

// ### 3. Change le style des h2 selons certaines conditions :
// - Si le pourcentage est inférieur à 50 alors le h2 a un background rouge
// - Si le pourcentage est supérieur à 50 alors le background est vert et l'écriture blanche
// - Si //     //  égale à 50 alors il n'y a pas de background
// - Si //     // est égale à 100 alors le bakcground est gold et l'écriture est noir

for (let j = 0; j < tab.length; j++) {
    if(parseInt(tabObj[j]) < 50){
        tab[j].style.backgroundColor = "red";
    }else if(parseInt(tabObj[j]) == 100){
        tab[j].style.backgroundColor = "gold";
        tab[j].style.color = "black";
    }else if(parseInt(tabObj[j]) > 50){
        tab[j].style.backgroundColor = "green";
        tab[j].style.color = "white";
    }
}