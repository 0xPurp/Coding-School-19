//exo1
let secondH1 = document.getElementsByTagName("h1")[1];
console.log(secondH1.innerText);

//exo2
let myDiv = document.getElementsByTagName("div")[0];
let myH2 = myDiv.firstElementChild;
let myP = myH2.nextElementSibling;
let myUl = myP.nextElementSibling;
let lastLi = myUl.lastElementChild;
console.log(lastLi.innerText);

//exo3
let myDiv = document.getElementsByTagName("div")[0];
let myH2 = myDiv.firstElementChild;
let myP = myH2.nextElementSibling;
console.log(myP.innerText.toUpperCase());

//exo4
let myLi = document.getElementsByTagName("li");
let arrLi2 = Array.from(myLi);

arrLi2.forEach(element => {
    console.log(element.innerText.toUpperCase());
});

// # Instructions :
// >*En utilisant la methode getElementsByTagName et des methodes de récupération de contenu text, mis à part si la manière est précicée, tu peux utiliser ce que tu désires comme façon de récuperer un élément et son contenu*

// >*Cherche des methodes pour résoudre les énoncés suivants :*


// ### 1. Affiche le contenu textuel du second h1

let secondH1 = document.getElementsByTagName("h1")[1].textContent;

console.log(secondH1);

// ### 2. Affiche le contenu textuel du dernier li

let lastLi = document.getElementsByTagName("li")[3].textContent;

console.log(lastLi);

// ### 3. Affiche le contenu textuel du premier p en majuscule

let firstP = document.getElementsByTagName("p")[0].textContent.toLocaleUpperCase();

console.log(firstP);


// ### 4. Avec l'aide d'un forEach affiche le contenu de chaque li, bonus : affiche chaque li en majuscule

let allLi = document.getElementsByTagName("li");

console.log(Array.from(allLi));

let tabLi = Array.from(allLi);

tabLi.forEach(element => {
    element.textContent = element.textContent.toUpperCase();
    console.log(element.textContent)
});

Array.from(allLi).forEach(element=>{
    element = element.textContent.toUpperCase();
    console.log(element.textContent)
});