// //1
// let date = prompt("Quel jour sommes-nous ?");
// switch (date) {
//     case "lundi":
//         alert("J'ai cours à MG et je code du Python");
//         break;
//     case "mardi":
//         alert("J'ai cours à MG et je vais courir");
//         break;
//     case "mercredi":
//         alert("J'ai cours à MG et je mange des frites");
//         break;
//     case "jeudi":
//         alert("J'ai cours à MG et j'ai Geektalk à 19h!");
//         break;
//     case "vendredi":
//         alert("J'ai cours à MG en présentiel pour voir <3 Fanny <3 !!!!!!!!!!! ");
//         break;
//     case "samedi":
//     case "dimanche":
//         alert("C'est le weekend frr");
//         break;
//     default:
//         alert("Entrez un vrai jour de la semaine ! ");
//         break;
// }

//2
// let temps = prompt("Quel temps fait-il ?");
// switch(temps){
//     case "pluie" :
//         alert("Il pleut, je prends un potit parapluie");
//         break;
//     case "neige" :
//         alert("Il neige, j'ai pris mes Moon Boots");
//         break;
//     case "soleil":
//         alert("Quelle est cette chose qui brille dans le ciel ??!");
//         break;
//     case "nuageux" :
//         alert("Il fait nuageux, vive les cumulonimbus !");
//         break;
//     case "orageux" :
//         alert("Il fait orageux, j'installe un paratonnerre !");
//         break;
//     default :
//         alert("Regarde par la fenêtre !");
//         break;
// }

//3
let nb1 = parseInt(prompt("Choisis un nombre"));
let op = prompt("Choisis un opérateur (+ - / *)");
let nb2 = parseInt(prompt("Choisis un nombre"));

switch(op){
    case "+":
        alert(`${nb1} + ${nb2} = ${nb1+nb2}`);
        break;
    case "-":
        alert(`${nb1} - ${nb2} = ${nb1-nb2}`);
        break;
    case "/":
        alert(`${nb1} / ${nb2} = ${nb1/nb2}`);
        break;
    case "*":
        alert(`${nb1} * ${nb2} = ${nb1*nb2}`);
        break;
    default : 
        alert("Choisis un opérateur correct");
        break;
}