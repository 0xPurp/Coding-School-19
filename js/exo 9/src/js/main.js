//Exercice 3 JavaScript -> Array


//-1 Créer une variable qui reçois un array avec 3 éléments -> ex: coding 11, coding 12, coding 13
let coding = ["coding 11", "coding 12", "coding 13"];

//-2 Afficher les éléments de l'array
console.log(coding);

//-3 Ajouter et afficher votre prenom a l'array
coding.unshift("Adil");
console.log(coding);

//-4 Remplacer et afficher un élément de l'array par autre chose
coding.splice(0,1, "M16")
console.log(coding);