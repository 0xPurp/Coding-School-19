// > Event Target

// ### 1. Créer un programme en utilisant e.target, qui permet au click de la souris de : 
// - Mettre une bordure a la div
// - Mettre le paragraphe en gras et en rouge
// - Surligné le h1
// - Effacer le h2, a chaque fois que l'on clique dessus il perd une lettre.

let myDiv = document.getElementById("content");
let myH1 = document.querySelector("h1");
let myH2 =document.querySelector("h2");
let myP = document.querySelector("p")
document.body.addEventListener('click', (e) =>{
    console.log(e.target)
    if(e.target == myDiv){
        e.target.style.border = "2px solid red"
    }else if(e.target == myH1){
        e.target.setAttribute("style", "width: max-content; background-color: yellow;")
    }else if (e.target == myH2){
        e.target.textContent = e.target.textContent.substring(0, e.target.textContent.length-1)
    }else if (e.target == myP){
        e.target.style = "font-weight: bold; color: red;"
    }
})

// ### 2. 
// - Créer une variable contenant le texte suivant : "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !"
// - Rajoute au hover de la section le texte contenu dans la variable dans son paragraphe 


let texte = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !";

let mySection = document.querySelector("section");
mySection.style.height = "10px";
let myP2 = mySection.firstElementChild;
console.log(myP2);

mySection.addEventListener("mouseover", ()=>{
    myP2.textContent = texte;
})
mySection.addEventListener("mouseout", ()=>{
    myP2.textContent = '';
});


