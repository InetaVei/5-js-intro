/* PRIMITYVIOS REIKSMES */


let a = 5;
let b = 100;

console.log(a);
console.log(b);

b = a; 

console.log(a);
console.log(b);

a = 88; 

/* KOMPLEKSINES REIKSMES
net jei ir yra const, saraso vidaus dalyvius galiu koreguoti, nurodant atskirai kad dalyvis is saraso, kurio nr yra toks ir toks, nuo siol bus toks taciau pacio saraso - ne.Jei noriu keisti visa pati sarasa - tuomet pakeiciu iniciala i let.

Jei daromi kazkokie pakeitimai, listu koregavimai ir tame dalyvauja abu listai, tai jie abu mato ta pacia ATNAUJINTA informacija. Priesingei nei prisimyviose reiksmese, kompleksinese reiksmese kintamieji pradeda dalintis informacija, atmintimi. Visai tai yra vardan efektyvumo, vietos taupymo*/

let listA = [11,22];
let listB = [800, 900];

listA[0] = 2; 
listB = listA;

console.log(listA);
console.log(listB);

listA = [7, 77, 777];

console.log(listA);
console.log(listB);

