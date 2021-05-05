// - # Les conditions - introduction
//     1. ### Via un console.log() vérifie l'egalité entre 1 et "1"
let prem = 1;
let sec = "1";
console.log(prem == sec);

//     2. ### Via un console.log() vérifie l'egalité STRICTE entre 1 et "1"
console.log(prem === sec);

//     3. ### Créer un programme qui demande le prénom d'une personne, si le prénom de la personne comporte moins de 5 caractères, affichée une alerte avec comme message " Ton nom est trop court "
// let prenom = prompt("Ton prénom ?");
// if(prenom.length < 5){
//     alert("Ton nom est trop court");
// }

//     4. ### Affiche une addition a l'utilisateur et demande lui de résoudre l'addition, si il répond juste, félicitez le, sinon dite lui que c'est incorrect.
// let rep = prompt("2+2");
// if(rep == 4){
//     alert("C'est correct bravo !");
// }else{
//     alert("C'est faux tu pues");
// }

//     5. ### Affiche une multiplication à l'utilisateur et demande lui de la résoudre, si il répond juste félicitez le "la réponse était bien xx" sinon dite lui, à combien d'unité il était de la réponse exemple si la réponse etait 35 et qu'il répont 40 renvoyez lui une alerte avec "C'est dommage, tu n'étais qu'a 5 unité de la bonne réponse"
// let rep = prompt("Combien font 5x20");
// let unites = Math.abs(rep - 100);

// if(rep == 100){
//     alert(`Bravo la réponse était bien ${rep}`);
// }else{
//     alert(`Faux, tu étais à ${unites} unités de la bonne réponse`);
// }

//     6. ### Créer un programme qui permet d'ajouter des elements dans un tableau via des prompts quand le tableau contient 3 éléments, renvoyez une alerte avec le contenu du tableau
// let tab = [];
// let rep1 = prompt("Que veux-tu ajouter");
// let rep2 = prompt("Que veux-tu ajouter");
// let rep3 = prompt("Que veux-tu ajouter");
// tab.push(rep1,rep2,rep3);

// if(tab.length == 3){
//     alert(tab);
// }

//     7. ### Créer un programme qui permet a l'utilisateur de mettre des chiffres dans des bacs, si le chiffre est plus grand ou égal à 12 il va dans le bac "grandNombres" si il est plus petit que 12 il va dans le bac "petitNombres" affiche ensuite une seule alerte avec le contenu des deux bacs
// let ptNb = [];
// let gdNb = [];
// let rep = prompt("Entre un nombre");
// if(rep >= 12){
//     gdNb.push(rep);
// }else{
//     ptNb.push(rep);
// }
// alert(gdNb + " et " + ptNb);

//     8. ### Invente un exercice avec ce que tu as appris en Javascript jusqu'a maintenant en incluent des conditions
// let nb = Math.floor(Math.random()*10);
// let quest = prompt("Choisis un numéro entre 0 et 10");

// if(nb == quest){
//     alert("Bien jouer");
// }else if(quest > 10){
//     alert("ON A DIT ENTRE 0 - 10");
// }else{
//     alert("Retente ta chance !");
// }