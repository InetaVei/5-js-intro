/* 

Matematikos operatoriai:

2+2
2*8
4-7
16/2

*/

let pinigine = 0;
console.log(pinigine);

pinigine += 100;    // cia tas pats lyg butu: pinigine = pinigine + 100;
console.log(pinigine);   // taip galima ir su + - * / matematiniais veiksmais



/* 
++ padidinti vienu vienetu
-- sumazinti vienu vienetu
*/

let i = 0;  // i simbolis dazniausiai sutinkamas programavimo kalboje
console.log(i);

i = i + 1;
i += 1;
i++;
console.log(i);

i = i - 1;
i -= 1;
i--;
console.log(i);


let temperatura = -8;

console.log(`Lauke dabar yra ${temperatura++} laipsniu.`); // jei ++ panaudojamas dešinėje kintamojo pusėje, tuomet ji pirmiausia atspausdina savo dabartinę būseną, o tik su sekančiu spausdinimu ji atspausdina padidintą per +1. O jei ++ dėtume kintamojo priekyje, tuomet jis iš kart reikšmę padidina ir tada atspausdina.
console.log(`Lauke dabar yra ${temperatura} laipsniu.`);