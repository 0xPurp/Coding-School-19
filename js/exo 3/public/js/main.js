let var1 = 6;
let var2 = "6";
let var3 = true;

// typeof => donne le type d'une variable
console.log(typeof(var1));
console.log(typeof(var2));
console.log(typeof(var3));
// .length => donne le nombre de caractères dans un string
let var4 = "Salut !";
console.log(var4.length);

// .trim() => supprime les espaces dans une chaine de caractères s'ils sont placés au début ou à la fin
let var5 = "Bonjour ! ";
console.log(var5);
console.log(var5.trim());

// .trimEnd() et .trimStart() => supprime les espaces au début ou à la fin
console.log(var5.trimStart());
console.log(var5.trimEnd());

// .substr() => permets de sélectionner une portion de string (premier param = index de départ)
let var6 = "Hello World";
console.log(var6.substr(3));
console.log(var6.substr(0,7)+var6.substr(0,2));

//.replace() => remplace un élément par un autre 
let var7 = "Hello World";
console.log(var7);
console.log(var7.replace("World", "Ali"));

// .charAt() => permets de séléctionner un seul caractère d'un string
let var8 = "Hallo Wereld";
console.log(var8.charAt(8));

// .concat() => concatène plusieurs chaines de caractères
let var9 = "Salut";
let var10 = "tout le monde";
console.log(var9.concat(" ", var10));
console.log(var9 + " " + var10);

