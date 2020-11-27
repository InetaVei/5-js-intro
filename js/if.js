/* 
if - salygos funkcija

-galimi palyginimo operatoriai:
> daugiau;
< maziau;
== lygu;
!= nelygu;
>= daugiau arba lygu;
<= maziau arba lygu;
=== grieztai lygu;
!== grieztai nelygu;

-naudotini: >, <, >=, <=, ===, !==   (ka verta naudoti)
-nenaudotini: ==, !=,   (ko geriau nenaudoti)

funkciju uzrasymas:
if () {}
if () {} else {}
if () {} else if () {} else if () {}........else if () {}...
if () {} else if () {} else if () {}........else {}
(cia gaunasi logika logikoje)
 */

 const a = 4;
 const b = 2;

 if (a > b) {
     console.log('taip, 4 yra daugiau uz 2');
 }

 /* Si funkcija naudojama, pvz." jeigu vardtotojas yra prisijunges padaryk ta ir ana", "jeigu vartotojas pateike savo emeila, padaryk ta ir ta ir pan." Komandu gali buti belekiek, ir jos bus padarytos jei if salyga patenkinta; */

if (a < b) {
   console.log ('A yra maziau uz B');
}  else {
 console.log ('A nera maziau nei B');
}

const duSkaiciai = [6, 612];

const pirmasSkaicius = duSkaiciai[0];
const antrasSkaicius = duSkaiciai[1];

if (pirmasSkaicius > antrasSkaicius) {
    const duSkaiciaiRez = `${pirmasSkaicius} yra daugiau uz ${antrasSkaicius}`;
    console.log(duSkaiciaiRez);
} else {
    console.log(`${pirmasSkaicius} nera daugiau uz ${antrasSkaicius}`);
  }

//   console.log(-----------------------);

const day = 'ket';

if (day === 'pir') {
    console.log('Pirmadienis');
} else if (day === 'ant') {
    console.log('Antradienis');
} else if (day === 'tre') {
    console.log ('Treciadienis');
} else if (day === 'ket') {
    console.log ('Ketvirtadienis');
}  else if (day === 'pen') {
    console.log ('Penktadienis')
}  else {
      console.log ('Turbut savaitgalis');
  }