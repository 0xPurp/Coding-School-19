// exo 1
let reverseNumber = (nb) => {
    // return parseInt(nb.split('').reverse().join(''));

    nb = nb.split(''); //split va transformer la chaine de caractères en tableau
    nb.reverse() //pour inverser l'ordre du tableau
    nb = nb.join('') //pour retransformer le tab en string
    nb = parseInt(nb) //pour retransformer mon string en int

    return nb;
}
console.log(reverseNumber(prompt("Entrez un nombre :")));

// exo 2
let div;
let divPar2 = (nb) => {
    div = nb % 2; //contient soit 0 soit 1
    switch(div){
        case 0 :
            alert(`Le num ${nb} est divisible par 2 : ${nb}:2 = ${nb/2}`);
            break
        case 1 :
            alert(`Le num ${nb} n'est pas divisible par 2`);
            break
        default :
            alert(`Veuillez rentrer une valeur correcte`)
            break
    }
}
divPar2(parseInt(prompt('Entrez un nombre divisible par 2')));

// exo 3

let logIn = (rep) => {
    while(rep != "mdp"){
        rep = prompt("Réessayez");
    }
    alert("Vous êtes connecté");
}

logIn(prompt("Quel est le mot de passe ?"));












