// - Créer dans une balise h1 sur votre page jS.

let h1 = document.createElement("h1");

// - Stocker dans dans une variable le contenu "Run Forest !"

let txtH1 = document.createTextNode("Run Forrest");

// - Trouver le moyen d'insérer votre contenu ("Run Forest !") dans votre balises h1

h1.appendChild(txtH1);

// - Insérer votre balise ( avec son contenu) dans votre Html et montrer moi ça dans votre console.

let myBody = document.querySelector("body")
myBody.appendChild(h1);
console.log(myBody);