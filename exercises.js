"use strict";

// 1. Skriv ett program som skriver ut "Hello, World!" till konsolen.
console.log("Hello, world");

// 2. Skapa tre variabler med let : ett namn (sträng), en ålder (nummer) och om personen gillar kaffe (boolean). Skriv ut alla tre.
let name = "Kimmo";
let age = 34;
let likesCoffee = true;

// 3. Skapa en funktion greet som tar ett namn som parameter och returnerar "Hej, namn!"

function greet(name){
    return `Hej, ${name}!`;
}

console.log(greet("Kimmo"));

// 4. Skapa en funktion som tar två nummber och returnerar summan

function add(a, b){
    return a + b;
}

// Annat sätt att skapa funktioner på
const addAlternative = (a, b) => a + b;

// 5. Skapa en funktion som getType som tar en parameter och returnerar dess datatyp med typeof

function getType(parameter){
    return typeof(parameter);
}

// 6. Skriv en funktion isEven som tar ett nummer och returnerar true om det är jämnt, annars false

function isEven(number){
    return (number % 2 === 0) ? true : false;
}

console.log(isEven(2));

// 7. Skriv en funktion maxOfTwo som tar två nummer och returnerar det större av dem.
function maxOfTwo(first, second){
    return (first > second) ? first : second;
}

// 8. Skapa en funktion checkAge som tar en ålder och returnerar "Barn" (0-12), "Tonåring" (13-19), eller "Vuxen" (20+).

function checkAge(age){
    if (age > 0 && age <= 12)
        return "Barn";
    if (age > 12 && age <= 19)
        return "Tonåring";
    if (age > 19)
        return "Vuxen";
}

// 9. kriv en funktion canVote som tar ålder och land ("SE" eller "US") som parametrar.
// Returnera true om personen får rösta (18 i Sverige, 18 i USA)

function canVote(country, age){
    if (country === 'SE'){
        return age > 18 ? true : false;
    } else if (country === 'US'){
        // ändrar age till 20 för att få lite ändring
        return age > 20 ? true : false;
    }

    return false;
}

let res = canVote('SE', 17);
console.log(res);

// 10. Skapa en funktion grade som tar ett betyg (0-100) och returnerar "F" (<50), "E" (50-59),
// "D" (60-69), "C" (70-79), "B" (80-89), eller "A" (90-100)

function grade(grade){
    if (grade < 50){
        return "F";
    } else if (grade >= 50 && grade < 60){
        return "E";
    } else if (grade >= 60 && grade < 70){
        return "D";
    } else if (grade >= 70 && grade < 80){
        return "C";
    } else if (grade >= 80 && grade < 90){
        return "B";
    } else if (grade >= 90 && grade <= 100){
        return "A";
    }
    return "Unknown";
}

// 11. Skriv en funktion countToTen som skriver ut siffrorna 1-10 med en for-loop
function countToTen(){
    for (let i = 1; i <= 10; i++){
        console.log(i)
    }
}

countToTen();

// 12. Skapa en funktion sumToN som tar ett nummer n och returnerar summan av alla heltal från 1 till n.

function sumToN(n){
    let sum = 0;
    for (let i = 1; i<=n; i++){
        sum += i;
    }

    return sum;
}

console.log(sumToN(2));

// 13. Skriv en funktion multiplicationTable som tar ett nummer och skriver ut dess multiplikationstabell från 1-10.

function multiplicationTable(number){
    const numbers = [];
    for (let i = 1; i <= 10; i++){
        numbers.push(number * i);
    }

    return numbers;
}

let multTable = multiplicationTable(7);

console.log(multTable);

// 14. Skapa en funktion countEven som tar ett nummer n och räknar hur många jämna tal det finns mellan 1 och n.

function countEven(n){
    let evenNumbers = 0;
    // vi kan öka med mer än ++ om vi vill
    // antar att n innefattar sig själv, alltså mellan 1-4 innefattar 4.
    for(let i = 1; i < n; i+=2){
        evenNumbers++;
    }

    return evenNumbers;
}

console.log(countEven(4));

// 15. kriv en funktion reverseString som tar en sträng och returnerar den baklänges (använd en loop).
function reverseString(myString){
    let s = "";
    for (let i = myString.length - 1; i >= 0; i--){
        s += myString[i];
    }

    return s;
}

console.log(reverseString("Kimmo"));

// 16. Skapa en funktion countdown som tar ett nummer och räknar ner till 0 med en while-loop.

function countdown(n){
    while(n >= 0){
        console.log(n--);
    }
}

countdown(10);

// 17. Skriv en funktion findFirstMultiple som tar två nummer (tal och delare) och hittar det första tal större än eller lika med tal som är delbart med delare 

function findFirstMultiple(tal, delare) {
    if (tal % delare === 0) {
        return tal;
    }
    return tal + (delare - tal % delare);
}

// 18. Skapa en funktion guessNumber som simulerar ett gissningsspel. Funktionen ska ta ett
// målnummer och ett maxgissningsantal. Simulera slumpmässiga gissningar (mellan 1-100)
// tills rätt nummer hittas eller gissningarna tar slut. Returnera antal gissningar.

function guessNumber(malnummer, maxGissningar) {
    let antalGissningar = 0;

    while (antalGissningar < maxGissningar) {
        const gissning = Math.floor(Math.random() * 100) + 1;
        antalGissningar++;

        if (gissning === malnummer) {
            return antalGissningar;
        }
    }

    return antalGissningar;
}

// 19. Skriv en funktion getDayName som tar en siffra (1-7) och returnerar veckodagens namn
// (1=Måndag, 7=Söndag). Använd switch

function getDayName(number){
    switch(number){
        case 1:
            return "Måndag";
        case 2:
            return "Tisdag";
        case 3:
            return "Onsdag";
        case 4:
            return "Torsdag";
        case 5:
            return "Fredag";
        case 6:
            return "Lördag";
        default:
            return "Söndag"
    }
}

console.log(getDayName(7));

// 20. Skapa en funktion calculator som tar två nummer och en operator ("+", "-", "*", "/") och returnerar resultatet.

function calculator(a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b === 0) {
                return "Kan inte dela med 0";
            }
            return a / b;
        default:
            return "Ogiltig operator";
    }
}

// 21. Skriv en funktion getSeasonSwedish som tar en månad (1-12) och returnerar vilken årstid
// det är i Sverige (vår: 3-5, sommar: 6-8, höst: 9-11, vinter: 12,1-2).

function getSeasonSwedish(month){
    if (month >= 3 && month <= 5)
        return "spring";
    if (month > 5 && month <= 8)
        return "summer";
    if (month > 8 && month <= 11)
        return "autumn";
    return "winter";
}

console.log(getSeasonSwedish(3))
console.log(getSeasonSwedish(6))
console.log(getSeasonSwedish(9))
console.log(getSeasonSwedish(12))
console.log(getSeasonSwedish(1))
console.log(getSeasonSwedish(2))


// 22. kapa en funktion getGradePoint som tar ett bokstavsbetyg ("A"-"F") och returnerar poäng
// (A=5, B=4, C=3, D=2, E=1, F=0).

function getGradePoint(grade){
    if (grade === "A") {
        return 5;
    } else if (grade === "B"){
        return 4;
    } else if (grade === "C") {
        return 3;
    } else if (grade === "D") {
        return 2;
    } else if (grade === "E") {
        return 1;
    } else {
        return 0;
    }
}


// 23. Skriv en funktion sumArray som tar en array av nummer och returnerar summan av alla element.

function sumArray(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });

    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));

// 24. Skapa en funktion findMax som tar en array av nummer och returnerar det största värdet.

function findMax(arr){
    let max = arr[0];

    arr.forEach(x => {
        max = max > x ? max : x;
    })

    return max;
}

console.log(findMax([1, 2, -3, 1000]))

// 25. Skriv en funktion countOccurrences som tar en array och ett värde, och returnerar hur många gånger värdet förekommer i arrayen.

function countOccurrences(arr, value){
    let occurences = 0;
    arr.forEach(x => {
        if (x === value){
            occurences++;
        }
    })

    return occurences;
}

console.log(countOccurrences([1, 2, 3, 4, 5, 5, 5], 1));

// 26. Skapa en funktion reverseArray som tar en array och returnerar en ny array med elementen i omvänd ordning

function reverseArray(arr){
    let newArr = [];
    arr.forEach(x => {
        newArr.unshift(x);
    })

    return newArr;
}

console.log(reverseArray([1, 2, 3, 4, 5, 6]))

// 27. Skriv en funktion isPalindrome som tar en sträng och returnerar true om den är ett
// palindrom (läses likadant framlänges och baklänges). Ignorera mellanslag och skilj inte på
// stora/små bokstäver.

function isPalindrome(input){
    input = input.replace(/\s+/g, "");;
    let left = 0;
    let right = input.length -1;

    while (left < right){
        if (input[left].toLowerCase() !== input[right].toLowerCase()){
            return false;
        }

        left++;
        right--;
    }

    return true;
}

console.log(isPalindrome("Anna")); // true
console.log(isPalindrome("Test")); // false
console.log(isPalindrome("   Anna   ")); // true

// 28. Skapa en funktion fizzBuzz som tar ett nummer n och returnerar en array. För varje tal
// från 1 till n: lägg till "Fizz" om talet är delbart med 3, "Buzz" om delbart med 5, "FizzBuzz"
// om delbart med både 3 och 5, annars själva talet

function fizzBuzz(n) {
    let result = [];

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }

    return result;
}