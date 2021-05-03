//Exercice 4 JavaScript -> Array

//Créer une variable qui reçois un array avec 3 éléments -> ex: coding 11, coding 12, coding 13
let coding = ["coding 11", "coding 12", "coding 13"];

//Afficher les éléments de l'array
console.log(coding);

//Ajouter et afficher votre prenom a l'array
coding.unshift("Adil");
console.log(coding);

//Remplacer et afficher un élément de l'array par autre chose
coding.splice(0,1, "M16") //coding.splice(coding.length-1, 1,"canceled");
console.log(coding);

//Effacer un élément de l'array
coding.pop()

//Afficher le contenu le d'array
console.log(coding);