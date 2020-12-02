/*
foreach --> per kiekviena
*/

const skaiciai = [1, 2, 3, 4, 5, 6];

for (let i= 0; i < skaiciai.length; i++); {
     const skaicius = skaiciai[i];
     console.log(skaicius * skaicius);
}

function kvadratu(x) {
    const rez = x * x;
    console.log(rez);
    return rez;
}


skaiciai.forEach()