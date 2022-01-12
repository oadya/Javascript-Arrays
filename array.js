const salaries = [
    { nom: "Martin", prenom: "Albert", anciennete: 11, dateNaissance: "01/01/1990" },
    { nom: "Lopez", prenom: "Simon", anciennete: 6, dateNaissance: "01/01/1992" },
    { nom: "Petit ", prenom: "Vincent", anciennete: 2, dateNaissance: "01/01/1993" },
    { nom: "Clement", prenom: "Clement", anciennete: 4, dateNaissance: "01/01/1990" },
    { nom: "Sidssoko", prenom: "Ali", anciennete: 3, dateNaissance: "01/01/1994" },
    { nom: "Berger", prenom: "Michel", anciennete: 5, dateNaissance: "01/01/1995" },
    { nom: "Rousseau", prenom: "Lembert", anciennete: 8, dateNaissance: "01/01/1996" },
    { nom: "Dupont", prenom: "Girard", anciennete: 15, dateNaissance: "01/01/1980" },
]

let log = console.log;


/**************** For Loop ********************/

// for standard 
log("\nFor loop : ")
for (let i = 0; i < salaries.length; i++) {
    log(salaries[i]);
}

// for in : loop throw properties names
log("\n for in prperties object")
let singleSalary = { nom: "Martin", prenom: "Albert", anciennete: 11, dateNaissance: "01/01/1990" }
for (let x in singleSalary) {
    log(x);
    log("value of " + x + " is " + singleSalary[x]);
}


// for in : loop throw iterable object (Array, Map,Set)
log("\n for in array")
for (let x in salaries) {
    console.log(x); // => index
    console.log(salaries[x]);
}

// for of : loop thro iterable object
log("\n for of array")

for (let x of salaries) {
    console.log(x);
}


// foreach : Performs the specified action for each element in an array.
log("\n Foreach loop : ")
salaries.forEach(elt => console.log(elt));


/**************** Common Operations *******************************/

/**
 * Filter : Returns the elements of an array that meet the condition specified in a callback function.
 */

// Les salaries qui ont plus 10 ans ancienneté
const anciennete1 = salaries.filter(x => x.anciennete > 10);

console.log(" \n Les salaries avec plus 5 ans ancienneté :", anciennete1);

// Les salaries qui ont entre  3 et 8 ans ancienneté
const anciennete2 = salaries.filter(x => x.anciennete >= 3 && x.anciennete <= 8);
console.log(" \n Les salaries qui ont entre  3 et 8 ans ancienneté :", anciennete2);


// Les salaries qui ont une ancienneté pair
const anciennetepairs = salaries.filter(x => x.anciennete % 2 === 0);
console.log(" \n Les salaries qui ont une ancienneté pair :", anciennetepairs);



/**
 * Map : Construit un nouveau tableau en appliquan un traitement à chaque élément d'un tableau 
 * Calls a defined callback function on each element of an array, and returns an array that contains the results.
 */


// Créer un tableau contenant la tous les noms des salariés :
const salarieNoms = salaries.map(x => x.nom);
console.log(" \n Tableau contenant la liste des noms des salariés :", salarieNoms);

// Créer un tableau contenant la tous les noms et prenoms des salariés :
const salarieNomsPrenoms = salaries.map(x => `${x.nom} ${x.prenom}`); // syntaxe template string
console.log(" \n Tableau contenant la liste des noms et prénoms des salariés :", salarieNomsPrenoms);

// Créer un tableau contenant le carré des anciennetés et incrémenté de  1 :
const puissance2Anciennetes = salaries.map(x => Math.pow(x.anciennete, 2))
    .map(x => x + 1);
console.log(" \n tableau contenant le carré des anciennetés et incrémenté de  1 :", puissance2Anciennetes);


/**
 * Sort : Sorts an array in place. 
 * This method mutates the array and returns a reference to the same array.
 */

// Tri croissant ancienneté :
const triCroissantAnciennete = salaries.sort((s1, s2) => {
    if (s1.anciennete > s2.anciennete) {
        return 1;
    } else {
        return -1;
    }
});

console.log(" \n Tri croissant par ancienneté :", triCroissantAnciennete);

// en utilisant expression ternaire : 
const triCroissantAncienneteBis = salaries.sort((s1, s2) => s1.anciennete > s2.anciennete ? 1 : -1);
console.log(" \n Tri croissant par ancienneté :", triCroissantAncienneteBis);


const triDecroissantAnciennete = salaries.sort((s1, s2) => s1.anciennete > s2.anciennete ? -1 : 1);
console.log(" \n Tri décroissant par ancienneté :", triDecroissantAnciennete);

// Tableau des anciennetés croissant
const triAnciennete3 = salaries.map(x => x.anciennete).sort((a, b) => a - b);
console.log(" \n Tableau des anciennetés croissant :", triAnciennete3);

// TTableau salariés trié par ancienneté décroissante
const triAnciennete4 = salaries.sort((a, b) => b.anciennete - a.anciennete);
console.log(" \n Tableau salariés trié par ancienneté décroissante :", triAnciennete4);




/**
 * Reduce : 
 * Calls the specified callback function for all the elements in an array. 
 * The return value of the callback function is the accumulated result, 
 * and is provided as an argument in the next call to the callback function.
 */

// Calcul de la somme des valeur des ancienntés
const sommeAnciennete = salaries.reduce((accumulator, currentSalary) => accumulator + currentSalary.anciennete, 0);
console.log(" \n Tableau de la somme des anciennetés avec reduce:", sommeAnciennete);

// Calcule le score max et min
const scores = [15, 96, 3, 47, 16, 69, 75, 49, 96, 84]; // score max =100 et score min = 0
const scoreminmax = scores.reduce((acc, score) => [Math.min(acc[0], score), Math.max(acc[1], score)], [100, 0]);
console.log(" \n le score max et min avec reduce :", scoreminmax);


const reduceObject = salaries.reduce((acc, salary) => {
    return { ...acc, [salary.nom]: salary }
}, {});

console.log(" \n reduceObject :", reduceObject);

// Group by

let produits = [
    { color: 'bleu', type: 'chemise' },
    { color: 'bleu', type: 'pantatalon' },
    { color: 'rouge', type: 'pantatalon' }
]

const grouByColor = (key, arr) => arr.reduce((cache, produit) => {
    const property = produit[key];
    if (property in cache) {
        return { ...cache, [property]: cache[property].concat(produit) }
    }
    return { ...cache, [property]: [produit] }

}, {})

log('REduce grouByColor :', grouByColor('color', produits))


/**
 * Find : Chercher un élément dans le tableau
 * Returns the value of the first element in the array where predicate is true, and undefined otherwise.
 */

const isMartin = (x) => x.nom === "Martin";
const testFindItem = salaries.find(isMartin);
console.log(" \n Test methode find :", testFindItem);


/**
 * FindIndex : Chercher l'index d' un élément dans le tableau
 * Returns the index of the first element in the array where predicate is true, and -1 otherwise..
 */
const testFindIndexItem = salaries.findIndex(x => x.nom === "Martin");
console.log(" \n Test methode findIndex :", testFindIndexItem);



/**
 * IndexOf : Chercher l'index d' un élément dans le tableau
 * Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
 */
const testindefofItem = salaries.map(x => x.nom).indexOf("Dupont")
console.log(" \n Test methode indexOf :", testindefofItem);



/**
 * Includes : Vrifie si un élément existe dans un tableau, retourne true ou false
 * Determines whether an array includes a certain element, returning true or false as appropriate.
 */

const includesTest = salaries.map(x => x.nom).includes("Dupont"); // la fonction includes prend en paramètre un argument et pas une fonction
console.log(" \n le Tableau contient-il un salarié  Dupont :", includesTest);



/**
 * Some : ya t-il un élément dans le tableau qui vérifie la condition ?
 * Returns the value of the first element in the array where predicate is true, and undefined otherwise.
 */

const someTest = salaries.some(x => x.anciennete > 20);
console.log(" \n Y a t-il un salaririé ancienneé > 20 ans :", someTest);


const someTest2 = salaries.some(x => x.anciennete > 14);
console.log(" \n Y a t-il un salaririé ancienneé > 14 ans :", someTest2);


/**
 * Every : est-ce que tous les éléments du tableau qui vérifient la condition ?
 * Determines whether all the members of an array satisfy the specified test.
 */

const everyTest = salaries.every(x => x.anciennete > 1);
console.log(" \n est-ce que tous les salaririés ont une ancienneé > 1 ans :", everyTest);


const everyTest2 = salaries.every(x => x.anciennete > 10);
console.log(" \n  est-ce que tous les salaririés ont une ancienneé > 10 ans  :", everyTest2);


/**
 * Slice : Extraction d'un tableau
 * Returns a copy of a section of an array. 
 */

const sliceTest = salaries.slice(0, salaries.length);
console.log(" \n Extraction slice(0, salaries.length) :", sliceTest);


const sliceTest2 = salaries.slice(2, 5);
console.log(" \n Extraction slice(2, 5) :", sliceTest2);


/**
 * splice : Suppression et remplacement
 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
 */

let letter = ['A', 'B', 'C', 'D', 'E'];
let letter2 = ['A', 'B', 'C', 'D', 'E'];

// A partir de la position 2 on supprime 1 élément
letter.splice(2, 1);
console.log(" \n Suppresion avec splice(2, 1) :", letter);

// A partir de la position 2 on ne supprime aucun élément et rajoute 'RRR', 'YYY' 
letter2.splice(2, 0, 'RRR', 'YYY');
console.log(" \n Insertion splice(2, 0, 'RRR', 'YYY'):", letter2);



/**
 * Push : Ajout à la fin du tableau
 * Appends new elements to the end of an array, and returns the new length of the array.
 */

let letter3 = ['A', 'B', 'C', 'D', 'E'];

letter3.push('F', 'G', 'H');
console.log(" \n Ajout à la fin push('F', 'G', 'H') :", letter3);




/**
 * Pop : Suppresion le dernier élément du tableau
 * Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
 */

let letter4 = ['A', 'B', 'C', 'D', 'E'];

letter4.pop();
console.log(" \n Suppresion le dernier élément du tableau  .pop(); :", letter4);


/**
 * unshift : Ajout  au début du tableau
 * Inserts new elements at the start of an array, and returns the new length of the array.
 */

let letter5 = ['A', 'B', 'C', 'D', 'E'];

letter5.unshift('X', 'Y', 'Z');
console.log(" \n Ajout au début  unshift('X', 'Y', 'Z') :", letter5);



/**
 * shift : Suppression au début du tableau
 * Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
 */

let letter6 = ['A', 'B', 'C', 'D', 'E'];

letter6.shift();
console.log(" \n Suppression du 1er élément du tableau .shift(); :", letter6);




/******************* Array : Cration d'un tableau ****************/

let array1 = [7, 9, 6];
console.log(" \n Création tableau méthode 1:", array1);

let array2 = new Array(4, 7, 8);
console.log(" \n Création tableau méthode 2:", array2);


// Création tableau 2 dimensions
let tableau2Dimension = [
    [7, 9, 6],
    [7, 9, 6],
    [7, 9, 6]
];
console.log(" \n Création tableau 2 dimensions :", tableau2Dimension);

// Création d'un tableau avec initialisation, limitation :chaque eélément a la même valeur
let nElements = new Array(100).fill(1);
console.log(" \n Création tableau 100 éléments  new Array(100).fill(1) :", nElements);

// Création d'un tableau avec Array.from
let testArrayFromStr = Array.from('Hello');
console.log(" \n Création tableau d'une chaîne de caractères :", testArrayFromStr);


// Création d'un tableau d'une taille fixe avec Array.from
let nElements2 = Array.from({ length: 5 }, (value, index) => value);
let nElements3 = Array.from({ length: 5 }, (value, index) => index);
let nElements4 = Array.from({ length: 5 }, (value, index) => index * index);
let nElements5 = Array.from({ length: 5 }, (value, index) => "");

console.log(" \n Création tableau0 d'éléments  Array.from :", nElements3);


// Création d'un tableau les noms et prenom du tableau salaries 
const tableauNom = Array.from(salaries, ({ nom, prenom }) => ({ nom, prenom }))
console.log(" \n Création tableau0 des noms et prenom des salaries :", tableauNom);

// Création sans doublons
const doublons = [1, 1, 3, 3, 4, 7, 7];

const unique1 = Array.from(new Set(doublons))

const unique2 = [... new Set(doublons)]

console.log(" \n Création tableau0 sans doblons :", unique2);



/****************** Array :   Copier , cloner, fusiooner un tableau **************************/

let original = [true, false, null, undefined];
let ages = [1, 2, 3, 4, 5];

// copie slice
const copie1 = original.slice(0);
console.log(" \n Copie slice :", copie1);

//copie spread operator
const copie2 = [...original];
console.log(" \n Copie spread operator :", copie2);


// copie spread operator
const copie3 = Array.from(ages);
console.log(" \n Copie Array.from :", copie3);

//Fusion concat
const fusionConcat = original.concat(ages);
console.log(" \n Fusion concat :", fusionConcat);


//Fusion spread operator
const fusionSpread = [...original, ...ages, "autres textes"];
console.log(" \n Fusion spread operator :", fusionSpread);





/************* Spread Operator***********/

/** Spread Operator on Array */

// Calcule le score max 
const scores2 = [15, 96, 3, 47, 16, 69, 75, 49, 96, 84];
const lettre = ['A', 'B', 'C']
const maxvalue = Math.max(...scores2);
console.log(" \n maxvalue :", maxvalue);

// copie array
const scoresCopie = [...scores2];
console.log(" \n scoresCopie :", scoresCopie);

//concatténation array
const concatArray = [...scores2, ...lettre];
console.log(" \n concatArray :", concatArray);


/** Spread Operator on method */

// passer des éléments d'un tableau aà une fonction
function add3Number(x, y, z) {
    console.log('add3Number  :', x + y + z)
}

let arg = [1, 2, 3];
add3Number(...arg);



/** Spread Operator on object */

// combinaision de deux objet
const adresse = {
    city: 'LA',
    country: 'USA'
}

const fullName = {
    firtname: 'Martin',
    lastname: 'Jmes'
}

const combinedObject = { ...adresse, ...fullName }
log('combinedObject :', combinedObject)


// Update inforamtions
const personneOne = {
    name: 'Martin',
    age: 36
}

const personneOneUpdated = {
    name: 'Martin',
    age: 40
}


const updatedPerson = { ...personneOne, ...personneOneUpdated }
log('updatedPerson:', updatedPerson)



/************* Rest Operator***********/

log("-- Rest Operator")

// Sometimes, we may want to create functions which can have undetermined number of parameters.

// Sum input values
function addValues(...args) { //REST parameter, must be of an array type 
    let sum = 0;

    for (const val of args) {
        sum += val;
    }
    return sum;
}

log(addValues())
log(addValues(1))
log(addValues(1, 2))
log(addValues(1, 2, 3))
log(addValues(1, 2, 3, 4))
log(addValues(1, 2, 3, 4, 5, 6, 7))

// multiply
function mutiplication(multiplier, ...args) {
    return args.map(element => multiplier * element)
}

let resp = mutiplication(2, 10, 20, 30);
console.log('REST OPERATOR :', resp)

let resp2 = mutiplication(2, 11, 12, 13, 14, 15, 16, 17);
console.log('REST OPERATOR 2 :', resp2)



/************* Destructuring ***********/

// extract value from array or object  and put them in individual variables

/** Destructuring apply to object*/

log('Destructuring apply to object :')

let coordonnees = { x: 3.5, y: 4, z: 6.7 }

log('Destructuring Object :')

// assign variable from object
const { x, y = 0, z } = coordonnees;
log(x)

const { x: a, y: b, z: c } = coordonnees;
log(b)

// assign variable from nested object
const nested = {
    start: { x: 4.8, y: 8.6 },
    end: { x: 9.5, y: 12.3 },
};

const { start: { x: startX, y: startY } } = nested;
log(startX)


// Destructuring on méthod

let produits2 = [
    { color: 'bleu', type: 'chemise' },
    { color: 'bleu', type: 'pantatalon' },
    { color: 'rouge', type: 'pantatalon' }
]

printPoduct = ({ color, type }) => {
    log(`color is ${color} type is ${type}`)
}

printPoduct(produits2[0])

// Destructuring Loop

const users = [
    { id: 5 },
    { id: 8 },
    { id: 6 },
]
log("-- Destructuring in for loop")
for (const { id } of users) {
    log(id)
}


/** Destructuring apply to Array*/

log('Destructuring apply to Array :')

// assign variable from array to local variables
const [r, s] = [10, 11, 12, 13, 14, 15]
log(r, s)

// skip elements, the position of variable matches the value index array 
const [u, , , v] = [10, 11, 12, 13, 14, 15]
log(u, v)

// swap varibles
let varA = "content A";
let varB = "content B";

[varB, varA] = [varA, varB];
log('var B = ' + varB, 'var A = ' + varA)

// Destructuring & Rest oprators
const [e, f = 0, ...restvalues] = [10, 11, 12, 13, 14, 15]
log(e, f)
log(restvalues)


