// exo 1

let rNumber = (nb) => {

    nb = nb.split('');
    nb.reverse()
    nb = nb.join('')
    nb = parseInt(nb)
    return nb;
}

console.log(rNumber(prompt("Entrez un number :")))

// exo 2

let div;
let divPar2 = (nb) => {
    div = nb % 2;
    switch(div){
        case 0 :
            alert(`le num ${nb} est divisible par 2 : ${nb}:2 = ${nb/2} `);
            break
        case 1 :
            alert(`le num ${nb} n'est pas divisible par 2`);
            break
        case 2 :
            alert(`Veuillez entrer une valeur valide`);
    }
}
divPar2(parseInt(prompt('Entrez un nombre divisible par 2')));

// exo 3

let login = (rep) => {
    while(rep != "mdp"){
        rep = prompt("Réessayez");
    }
    alert("Bienvenue à bord capitaine !");
}

login(prompt("Quel est le mot de passe ?"))