0
let a = 1; // a devient b (2)
let b = 2; // b devient c (3)
let c = 3; // c devient a (1)
let temp = a; // vaut 1

a = b; // a vaut 2
b = c; // b vaut 3
c = temp; // c vaut 1

console.log(a, b, c);

1
let a = 1; //a devient d (4)
let b = 2; //b devient c (3)
let c = 3; //c devient b (2)
let d = 4; //d devient a (1)
let temp;

temp = a; //temp vaut a (1)
a = d; // a vaut d (4)
d = temp; // d vaut temp (1)
temp = b; //temp vaut b (2)
b = c; //b vaut c (3)
c = temp; //c vaut temp (2)

console.log(a, b, c, d);

2
let a = 1; // a -> b (2)
let b = 2; // b -> c (3)
let c = 3; // c -> d (4)
let d = 4; // d -> a (1)
let temp;

temp = a; // temp vaut a (1)
a = b; // a vaut b (2)
b = c; // b vaut c (3)
c = d; // c vaut d (4)
d = temp; // d vaut temp (1)

console.log(a, b, c, d);

3
let tab = [
    1, // devient 4
    2, // devient 3
    3, // devient 2
    4, // devient 1
    "temp"];
tab[4] = tab[0];
tab[0] = tab[3];
tab[3] = tab[4];
tab[4] = tab[1];
tab[1] = tab[2];
tab[2] = tab[4];

console.log(tab[0], tab[1],tab[2],tab[3]);

//4
let a = 1 // -> devient d (4)
let b = 2 // -> devient e (5)
let c = 3 // -> devient a (1)
let d = 4 // -> devient b (2)
let e = 5 // -> devient f (6)
let f = 6 // -> devient c (3)
let temp;

temp = a; //vaut 1
a = d; //vaut 4
d = b; //vaut 2
b = e; //vaut 5
e = f; //vaut 6
f = c; //vaut 3
c = temp //vaut 1

console.log(a,b,c,d,e,f);