// ## 1. Récupère et affiche le premier enfant de la dernière div

let myDiv = document.getElementsByTagName("div")[2];

console.log(myDiv);

let firstChild = myDiv.firstElementChild;

console.log(firstChild);

// ### 2. Récupère et affiche le dernier enfant de la dernière div

let lastChild = myDiv.lastElementChild;
console.log(lastChild);

// ### 3. Récupère l'élément i contenu dans le premier p de la dernière div et affiche le

let i = firstChild.nextElementSibling.firstElementChild;

console.log(i);

// ### 4. Récupère l'élément b contenu dans le dernier p de la dernière div et affiche le

let b = lastChild.firstElementChild;
console.log(b);

// ### 5. Affiche l'élément parent de l'élément i

let iParent = i.parentElement;
console.log(iParent);

// ### 6. affiche l'élément parent de l'élément b

let bParent = b.parentElement;
console.log(bParent);

// ### 7. affiche l'élément suivant le premier enfant de la dernière div

let p = firstChild.nextElementSibling;
console.log(p);
