let a = 10;
let text = "Hey-its-Me-hey "
let length = text.length

console.log(length);


console.log(text.slice(2));


console.log(text.substr(3,3));


console.log(text.substring(3));


console.log(text.replace("hey", "heyYYY"));


console.log(text.replaceAll("hey","mei")); //same as replace with flag /g, this function do not working on internet explorer


console.log(text.toLowerCase());
console.log(text.toUpperCase());


let text2 = text.concat(length);
console.log(text2);
console.log(text2.length);


console.log(text.trim());
console.log(text2.trimStart());
console.log(text2.trimEnd());


console.log(text.padStart(++length,"x"));
console.log(text.padEnd(length,"x"));


console.log(text.charAt(3));
console.log(text[3]);


console.log(text.split("")); //converted into tab (",")-on commas (" ")-on spaces ("|")-on pipe ("")single characters

switch (new Date().getDay()) {
    case 0:
        day = "Niedziela"
        break;
    case 1:
        day = "Poniedzialek"
        break;
    case 2:
        day = "Wtorek"
        break;
    case 3:
        day = "Sroda"
        break;
    case 4:
        day = "Czwartek"
        break;
    case 5:
        day = "Piatek"
        break;
    case 6:
        day = "Sobota"
        break;
    default:
        day = "None"
}

console.log(day);

