let num1 = prompt("num 1 :");
let num2 = prompt("num 2 :");

// exo 1
if (num1 == num2) {
    alert("Le nombre " + num1 + " & " + num2 + " sont il égaux  ");
    alert(num1 == num2);
} else {
    alert("Le nombre " + num1 + " & " + num2 + " sont il égaux  ");
    alert(num1 == num2);
}


// exo 2


if (num1 > num2) {
    alert("Le nombre " + num1 + " est il plus petit que " + num2);
    alert(num1 > num2);
} else {
    alert("Le nombre " + num1 + " est il plus petit que " + num2);
    alert(num1 > num2);
}



// exo 3
let valeur1 = prompt("Chiffre 1 : ");
let valeur2 = prompt("Chiffre 2 : ");
let valeur3 = prompt("Chiffre 3 : ");
let temp = valeur1 + valeur2;
if (temp > valeur3) {
    alert("la somme de " + valeur1 + " & " + valeur2 + " est elle plus petite que " + valeur3);
    alert(temp > valeur3);
}
else {
    alert("la somme de " + valeur1 + " & " + valeur2 + " est elle plus petite que " + valeur3);
    alert(temp > valeur3);
}



// exo 4


let phrase = prompt("Ecrivez une phrase");
let bet = prompt("Estimation des caractères");
let taille = phrase.length;
let tlen = taille - bet;
if (taille == bet) {
    alert("Bonne réponse !");

} else {
    alert("Incorrecte tu était à " + tlen + " de la bonne réponse.");
}


// exo 5


let nom = prompt("Veuillez entrer votre prénom :");

if (nom == "") {
    alert("Attention vous devez remplir le champs ci-dessous, Quel est votre prénom");
} else {
    alert("Bonjour, " + nom);
}


// exo 6 

sub = window.confirm("Souhaitez vous vous abbonner ?");

if (sub == true) {
    pack = prompt("Sélectionez votre formule : luxe ou normale");
    if (pack == "luxe") {
        alert("Félicitation vous avez choisis la formule Luxe !");
    } else if (pack == "normale") {
        alert("Merci pour votre abbonement.");
    } else if (pack == "") {
        nopack = window.confirm("êtes vous sûr de votre choix ?");
        if (nopack == true) {
            alert("c dommage trace ta route");
        } else {
            repack = prompt("Sélectionez votre formule : luxe ou normale");
            if (repack == "luxe") {
                alert("Félicitation vous avez choisis la formule Luxe !");
            } else if (repack == "normale") {
                alert("Merci pour votre abbonement.");
            } else if (repack == "") {
                alert("Send a location you got splashed.");
            }
        }
    }
} else {
    alert("Tu n'est pas abbonné");
}

// exo 7

question1 = prompt("1 + 1");
question2 = prompt("1 + 2");
answer1 = 2;
answer2 = 3;

if (question1 == answer1 && question2 == answer2) {
    alert("Bien joué t'as tout réussi");
} else if (question1 == answer1 && question2 != answer2) {
    alert("Tu y est presque tu as mal répondu à la question 2.");
} else if (question1 != answer1 && question2 == answer2) {
    alert("Tu y est presque tu as mal répondu à la question 1.");
} else {
    alert("Tu n'as répondu correctement à aucune question.");
}


// exo 8

age = prompt("Quel âge avez vous ?");
ageofficiel = parseInt(age)
if (ageofficiel > 18) {
    alert("Vous êtes majeur vous pouvez réserver");
}else if (ageofficiel < 18) {
    alert("Vous êtes mineur, l’accès est réservé aux grands");
}else if (ageofficiel <= 0) {
    alert("Vous n'êtes même pas née n'essayez pas de tricher.")
}else if (ageofficiel >= 100) {
    alert("vous êtes encore vivant ? Évitez de voir ce film pour le rester.")
}else if (ageofficiel == 18 ) {
    alert("pouvez rentrer mais c’est tout juste, n'oubliez pas que ce film peut être choquant.")
}

// exo 9
let riche = prompt("Est-ce que vous êtes riche ?")
let vacances = prompt("Voulez-vous partir en vacances ?")
let chat = prompt("Est-ce que vous avez un chat ?")

if (riche == "oui") {
    riche = true
} else {
    riche = false
}
if (vacances == "oui") {
    vacances = true
} else {
    vacances = false
}
if (chat == "oui") {
    chat = true
} else {
    chat = false
}

if (vacances !== true) {
    alert("pas de problème, ne partez pas en vacance")
}
if (riche !== true && vacances == true ||chat == true && vacances == true) {
    alert("Même si vous le voulez, vous pouvez pas partir en vacances")
}
if(riche == true && chat !== true && vacances == true) {
    alert("Tout est parfait, partez en vacances")
}