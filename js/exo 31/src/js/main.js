// > Créez une div avec dédans un h1, un h2, un input et un button
let creerDiv = document.createElement("div");
let h1 = document.createElement("h1");
let h2 = document.createElement("h2");
let input = document.createElement("input");
let btn = document.createElement("button");

// > Affichez cette div dans l'HTML
let myBody = document.querySelector("body");
creerDiv.append(h1, h2, input, btn);
myBody.appendChild(creerDiv);

// > Le h1 doit contenir "Je suis un titre"
// > Le h2 doit contenir "Je suis un sous-titre"
// > Le button doit contenu "Acceptez"
let h1Text = document.createTextNode("Je suis un titre");
let h2Text = document.createTextNode("Je suis un sous-titre");
let btnText = document.createTextNode("Accepter");

h1.appendChild(h1Text);
h2.appendChild(h2Text);
btn.appendChild(btnText);

// > Changer le contenu du h1 en "Je suis un grand titre"
h1.innerHTML = "Je suis un grand titre";

// > NE PAS TOUCHER A L'HTML