// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
});

function destructivelyAppendCat(name) {
    return cats.push('Ralph');
};
console.log(cats);

function destructivelyPrependCat(name) {
    return cats.unshift("Bob");
};
console.log(cats);

function destructivelyRemoveLastCat() {
    return cats.pop();
};
function destructivelyRemoveFirstCat() {
    return cats.shift();
};
//non destrictive
function appendCat(name) {
    const newCat = [...cats, "Broom"];
    return newCat;
};
function prependCat(name) {
    const catt = ["Arnold", ...cats];
    return catt;
};

function removeLastCat() {
    return cats.slice(0, -1);

};
function removeFirstCat() {
    return cats.slice(1);
};


