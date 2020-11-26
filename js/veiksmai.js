// Matimatinės operacijos

const skaicius1 = 5;
const skaicius2 = 8;
const suma = skaicius1 + skaicius2;

console.log(skaicius1, '+', skaicius2, '=', suma);

console.log(skaicius1);
console.log(skaicius2);
console.log(suma);

 /* PVM apskaiciavimo pvz */

 const pvm = 21;
 const petroPajamos = 100;
 const marytesPajamos = 200;

 const petroMokesciai = petroPajamos * pvm / 100;
 const marytesMokesciai = marytesPajamos * pvm / 100;
 console.log(petroMokesciai);
 console.log(marytesMokesciai);

 console.log('Mokesciai:', petroPajamos, '->', petroMokesciai);

console.log('--------------------')


const zodis1 = 'Labas';
const zodis2 = 'rytas';
const zodis3 = 'Lietuva';

const sakinys = zodis1 + ' ' + zodis2 + ' , ' + zodis3;
const sakinys2 = zodis1 + '!';
console.log(sakinys);
console.log(sakinys2);

/* tekstu iniciavimo/rasymo subtilybes 
(galimas teksto rasymas ir su vienguba kabute ir su dviguba kabute)*/

const txt1 = "Lorem";
const txt2 = 'ipsum';

const sakinys5 = "sakinyje yra vienguba ' kabute";
console.log(sakinys5);

const sakinys6 = 'sakinyje yra dviguba " kabute';
console. log(sakinys6);

/* pries kiekviena kabute, kuri turi buti turinio dalis - dedame back sleso simboli, jis ignoruoja tuomet ta kabute*/

const sakinys7 = "sakinyje yra dviguba \" kabute";
console.log(sakinys7);

const pavadinimas = `<div>
<h1>JS rocs!</h1>
<p>Lorem, ipsum.</p>
</div>`;

console.log(pavadinimas);


const jsTex = 'JS rocs!';
const htmlTex = 'Lorem ipsum';

const visas =  `<div>
<h1>${jsTex}</h1>
<p>${htmlTex}</p>
</div>`;

console.log(visas);