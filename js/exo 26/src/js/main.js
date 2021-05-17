let classeCoding19 = [];

let ajouter = (prenom, phrase) => {
    let tabTemp = prenom.split(','); 

    for(let i = 0; i < tabTemp.length; i++){
        classeCoding19.push(tabTemp[i]);
    }
    console.log(phrase);
    console.log(classeCoding19);

}

let retirer = (prenom, phrase, nbr) => {
    classeCoding19.splice(classeCoding19.indexOf(prenom), nbr);
    console.log(phrase);
    console.log(classeCoding19);
}

ajouter("Fanny", "Il est 08h43, Fanny entre en classe !");

ajouter("Chris", "Il est 08h44, Chris rentre, allume son PC et commence à mettre ses notes à jour");

ajouter("Nasila, Mouna, Stan, Jean", "Nasila, Mouna, Stan, Jean rejoignent la classe à 08h45");

retirer("Stan", "Stan et Jean voient Django le chat passer devant la porte, et décident de le rejoindre et de ne jamais revenir !", 2);

ajouter("Ali, Agim", "A 08h55, Ali et Agim rentrent en classe en faisant un max de bruit !")

ajouter("Antoine", "Antoine rentre en classe à 08h56");
retirer("Antoine", "Antoine descend prendre sa tasse de café",1);

ajouter("Yassine", "A 08h59, Yassine arrive avec sa petite plante et salue tout le monde avec un grand sourire !");

ajouter("Seifedin, le H", "Seifedin et le H rentrent tranquillement et observent tout le monde à 09h00.")

ajouter("Elvis, Ilias E., Ilias D.", "A 09h03 Elvis, Ilias D et Ilias E. arrivent et observent Nasila qui a l'air d'être traaaaanquiiiille");

ajouter("Kevin", "A 09h04, Kevin rentre avec sa tasse de café");

ajouter("VanHoa, Nathan", "VanHoa et Nathan rentrent en classe tout contents de n'être que 5min en retard")

retirer("Fanny", "Fanny leur dit qu'ils sont en retard puis elle sort", 1);

ajouter("Adil", "Adil rentre à 09h10 avec son café, tout content et souriant !");

ajouter("Fanny", "Fanny rentre en classe et commence à donner cours");

ajouter("Lira", "A 09h30 Lira rentre en faisant le minimum de bruit possible mais toute la classe le regarde !");