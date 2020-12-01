/*
Ternary operator

liaudiskai: if'as vienam sakinyje, kuris savyje turi r gali tureti TIK true ir false dalis.

if'o klausimas? Jei teigiamas ats: jeigu neigiamas ats
*/

console.log(4 > 2 ? 'Daugiau' : 'Ne daugiau');

const amziausRiba = 40;

const amzius = 99;

const verdiktas = amzius >= amziausRiba ? 'I Prezitentus' : 'dar palauk';

console.log(`Jei tau ${amzius} - ${verdiktas}`);


console.log('------------------');




const sezonas = 'ziema';
const temp = 2;

// if (sezonas === 'vasara') {
//     if (temp > 10) {
//         console.log('Maike');
//     } else {
//         console.log('Golfas');
//     }
// } else {
//     if (temp > 10) {
//         console.log('Megztinis');
//     } else {
//         console.log('Striuke');
//     }
// }

const kaVilktis = sezonas === 'vasara' ? temp > 10 ? 'Maike' : 'Golfas' : temp > 10 ? 'Megztinis' : 'Striuke';
console.log(kaVilktis);




console.log('------------------');

const amzius1 = 20;
const riba = 7;

const rekomend = amzius1 >= riba ? 'I mokykla' : 'i darzeli';

console.log(`Jei tau ${amzius1} - ${rekomend}`);