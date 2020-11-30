/* array - rinkiniai, matrica */

// const pazymiai = [10, 2, 7, 6];
const zodynas = ['labas', 'rytas', 'Lietuva'];


/* array (siuo atveju --> pazymiai) ir kagi galima su jais nuveikti:
const vidurkis = (10 + 2 + 7 + 6) / 4;
 - vidurki isvesti;
 - isrikiuoti (min, max);
 - surasti ar turi konkretu skaiciu;
 - surasti min, max reiksme; 
 */

 // skaiciuojame vidurki

 /* arba, jei pvz sarase yra labai daug skaiciu, tai tuomet naudojam funkcija .length ji suskaiciuoja KIEK sarase yra dalyviu, o pacius saraso dalyvius geriausia israryti asmeniskai pagal ju eiliskuma, pradedant nuo 0, taip apsisaugosim nuo nefunkcionalumo jei kartais pasikeistu kazkuris saraso dalyvis  */


 const pazymiai = [10, 2, 7, 6];
 console.log ('Vidurkis', vidurkis);

 const sarasoSkaiciuSuma = pazymiai[0] + pazymiai[1] + pazymiai[2] + pazymiai[3];
 console.log(sarasoSkaiciuSuma);
 
 const skaiciuKiekis = pazymiai.length;

 const vidurkis = sarasoSkaiciuSuma / skaiciuKiekis;
 console.log ('Vidurkis', vidurkis);

 console.log(sarasoSkaiciuSuma);


