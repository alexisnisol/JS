// let arr = new Array();
// arr = [];

// // 
// let shopping = ["pain", "lait", "fromage", "houmous", "nouilles"];
// console.log(shopping);

// // Tableau imbriqué
// let shoppingI = ["pain", "lait", ["tome de savoie", "brie", "camenbert"], "houmous", "nouilles"];

// console.log(shopping[0]);
// // renvoie "pain"

// // Modification
// shopping[0] = "crème de sésame";
// console.log(shopping);
// // shopping renvoie maintenant [ "crème de sésame", "lait", "fromage", "houmous", "nouilles" ]


let langages = ["JavaScript", "CSS"];
console.log(langages);

function ajoutLangage(langage) {
    langages.push(langage);
    console.log(langages);
}

ajoutLangage("PHP");

function getMiddleIndex(array) {
    let middle = Math.floor(array.length / 2);
    return middle;
}

langages[getMiddleIndex(langages)] = "SCSS";
console.log(langages);

console.log(langages[0]);

ajoutLangage("Python");


let tableauTrie = [];

function arrayValues(arr) {
    let res = 0;
    for(let i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    return res;
}

function calculSumInput() {
    let resp = +prompt("Valeur");

    if (resp === NaN || resp == 0) {
        console.log(arrayValues(tableauTrie));
    } else {
        tableauTrie.push(resp);
        calculSumInput();
    }
}

calculSumInput();