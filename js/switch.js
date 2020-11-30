const darzove = 'morka';

switch(darzove) {
    case 'morka':
    console.log('Labai gerai tavo regejimui');
    break;

    case 'bulve':
    console.log('Darzoviu duona?..');
    break;

   case 'pomidoras':
    console.log('Stroraraudonaskruostis');
    break;

    default:
    console.log("Neatitiko jokios darzoves");
    break;
}

/* KADA SWICHE NEREIKIA KAS KIEKVIENU CASE NAUDOTI BREAK.
Kai uzdavinys yra apie darbo procesa ir galimybe ji perrimti kazkuriame proceso zingsnyje */

/* PROCESAS: rytinio gerimo gamyba.
-pasiimti puodeli
-isideti kavos
-isideti saldiklio
-ipilti karsto vandens 
-ismaisyti
-gerti
*/
 
const etapas = 'puodelis';

switch (etapas) {
    case 'puodelis':
        console.log('1) pasiimti puodeli');

    case 'puodelis':
     console.log('2) isideti kavos');

    case 'puodelis':
    console.log('3) isideti saldiklio');

    case 'puodelis':
    console.log('4) isipilti karsto vandens');

    case 'puodelis':
    console.log('5) issimaisyti');

    case 'puodelis':
    console.log('6) galima gerti');
    break;

    default:
        console.log('nezinomas veiksmas');
    }