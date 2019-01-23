"use strict";

/*
    JavaScript ES6
*/

//conditional ternary Operator
let num = -10;
const numberStatus = num > 0 ? "Positivo" : num < 0 ? "Negativo" : "Zero";
console.log("numberStatus: ", numberStatus);

/*
let -> No te permite crear la misma variable 2 veces
var -> Te permite crear la misma varibale varias veces.
*/

var color = "red";
var color = "blue";
console.log("color: ", color);

//let color = "red";
//let color = "blue";
//Uncaught SyntaxError: Identifier 'color' has already been declared

/*
let ->  El alcace(scope) de let es limitado al block stament o expresion donde es declarada.
var ->  Declara la var global o local dentro de una función.
*/

const checkScope = () => {
  var i = "FUNCTION Scope";
  if (true) {
    i = "BLOCK scope";
    console.log("Block scope i es: ", i);
  }
  console.log("FUNCTION scope i es: ", i);
  return i;
};

/*
const checkScope = () => {
  let i = "FUNCTION Scope";
  if (true) {
    let i = "BLOCK scope";
    console.log("Block scope i es: ", i);
  }
  console.log("FUNCTION scope i es: ", i);
  return i;
};
*/
/*
const checkScope = () => {
  if (true) {
    console.log("ISSS TRUEEEE");
    let i = "BLOCK scope";
    console.log("Block scope i es: ", i);
  }
  console.log("FUNCTION scope i es: ", i);
  return i;
};
//Uncaught ReferenceError: i is not defined
*/
checkScope();

/*
const -  readonly variable , usar letra mayuscula cuando se declara una constante
*/
//MUTACIÓN DE ARREGLO CUANDO ES UNA CONSTANTE
const S = [5, 7, 2];
//Object.freeze(S);
S[0] = 4; // Me deja mutar los valores del arreglo a pesar de que es una constante
console.log("new arraw", S);
//Declar una variable constante no protege los datos de una mutación UTILIZAR  Object.freeze(S)

//Prevenir Mutación en objeto
const MATH_CONST = {
  PI: 3.14
};
//Object.freeze(MATH_CONST);
MATH_CONST.PI = 4.2;
console.log("MATH_CONST.PI: ", MATH_CONST.PI);

//*** ANONYMOUS functions son funciones anónimas que no tienen nombre se guardan en una variable
var hoy = function() {
  return new Date();
};
console.log("hoy: ", hoy());
//Arrow function
/*
var hoy = () => {
  return new Date();
};
console.log("hoy: ", hoy());
*/
/*
const hoy = () => new Date();
console.log("hoy: ", hoy());
*/

//HIGHT ORDER FUNCTIONS maps, filters and reduce toman funciones como argumentos
const numbersArray = [4, 5.6, -9.8, 3.14, 8, 68.4, -2, 9];

const squareList = arr => {
  let squareNum = arr
    .filter(num => Number.isInteger(num) && num > 0)
    .map(x => x * x);
  return squareNum;
};

console.log(squareList(numbersArray));

//DEFAULT PARAMENTERS
const suma = (num, value = 1) => {
  return num + value;
};
console.log("suma 5,2: ", suma(5, 2));
console.log("suma 5: ", suma(5));

//REST Operator "..."
//función normal
const sum1 = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
};
console.log("sum1: ", sum1(1, 2, 3));
//misma función con rest operator
const sum2 = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};
console.log("sum with rest operator: ", sum2(1, 2, 3));

//SPREAD Operator "..."
const arr1 = ["ENERO", "FEBRERO", "MARZO", "ABRIL"];
let arr2;
//si le decimos que arreglo uno es igual a arreglo 2 ambos cambian al cambiar cualquiera.
arr2 = arr1; //Le estamos diciendo que arreglo 1 es igual a reglo 2
arr1[0] = "AAAAAAAAAAAAAAA";
console.log("arr1: ", JSON.stringify(arr1));
console.log("arr2: ", JSON.stringify(arr2));
// Con el SPREAD Operator "..." hacemos una copia
const arreglo1 = ["ENERO", "FEBRERO", "MARZO", "ABRIL"];
let arreglo2;
arreglo2 = [...arreglo1]; //arreglo2 es una copia de arreglo 1 si cambio el dos no se ve afectado el 1
arreglo2[0] = "AAAAAAAAAAAAAAAAAAAA";
console.log("arreglo1: ", JSON.stringify(arreglo1));
console.log("arreglo2: ", JSON.stringify(arreglo2));

//agregar elementos a un arreglo con spread operator
let moreNumbers = [7, 8, 9];
let otherNumber = [1, 2, 3];
let numbers = [...otherNumber, 4, 5, 6, ...moreNumbers]; // [1, 2, 3, 4, 5, 6, 7, 8, 9]
//et numbers = [otherNumber, 4, 5, 6 , moreNumbers]; //[Array(3), 4, 5, 6, Array(3)]
console.log("$$$$$$$$$$$$$ numbers: ", numbers);

//object destructuring
var a, b, rest;
[a, b, ...rest] = [1, 2, 3, 4, 5, 6, 7];
console.log("a: ", a); // a:  1
console.log("b: ", b); // b:  2
console.log("rest: ", rest);// rest:  (5) [3, 4, 5, 6, 7]

//Destructuring assigements to assign variable from Objects
var persona = { name: "Jhon", age: 32, hight: "1m 95cm" };
// let nombre = persona.name;
// let edad = persona.age;
// let altura = persona.hight;
const { name: nombre, age: edad, hight: altura } = persona;
console.log("**nombre: ", nombre);
console.log("**edad: ", edad);
console.log("**altura: ", altura);

//Destructuring Assigments in OBJECTS
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};
const { tomorrow: tomorrowTemp } = AVG_TEMPERATURES; //toma el valor de tomorrow del ojeto AVG_TEMPERATURES y asignaselo a la variable  tomorrowTemp
console.log("****tomorrowTemp: ", tomorrowTemp);

//Destructuring Assigments in nested OBJECTS
const TEMPERATURES = {
  today: { min: 22, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};
const {
  tomorrow: { max: maxTemTomorrow }
} = TEMPERATURES;
console.log("maxTemTomorrow: ", maxTemTomorrow);

//Destructuring Assigments to assign variables from array ARRAY
const [z, x, , y] = [1, 2, 3, 4, 5, 6];
console.log(z, x, y);

//Destructuring Assigments with REST operator
const source = [1, 2, 3, 4, 5, 6, 7, 8];
//devolver el arreglo con los 2 primeros elementos removidos
const [, , ...args] = source;
console.log("args: ", args);

//Destructuring Assigments para pasar ciertos atributos de un objeto a una función
const status = {
  max: 56.78,
  mode: 23.87,
  min: -0.75,
  avarage: 35.85
};
const half = ({ max, min }) => (max + min) / 2.0;
console.log("half: ", half(status));

//Templates Literals
const person = {
  name: "Dailenis",
  lastname: "Gonzalez",
  age: 30
};
const greeting = `Hola mi nombre es ${person.name} ${person.lastname}!, tengo ${
  person.age
} añoa.`;
console.log("greeting: ", greeting);

//Declarations using simple fields
const createPerson = (name, age, gender) => {
  return {
    name: name,
    age: age,
    gener: gender
  };
};
//const createPerson = (name, age, gender) => ({ name, age, gender });
console.log(createPerson("Sineliad", "30", "mujer"));

//Funciones en los arreglos
const bisycle = {
  gear: 2,
  setGear: function(newGear) {
    this.gear = newGear;
  }
};
/*
  const bisycle = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
    }
  };
  */
console.log("bisycle: ", bisycle);
bisycle.setGear(3);
console.log("bisycle: ", bisycle);

//clases
class Book {
  constructor(author) {
    this._author = author; //el underscore significa es es una variable privada
  }
  get writer() {
    return this._author;
  }
  set writer(newAuthor) {
    this._author = newAuthor;
  }
}

let book1 = new Book("Gabriel García Marquez");
console.log("book1: ", book1);
console.log("book1.writer: ", book1.writer);
book1.writer = "Jorge Luis Borges";
console.log("book1: ", book1.writer);

//Import and  export
import { capitalizeString, PI } from "./string_function.js"; // importar individual
const cap = capitalizeString("HOLAAAAAAA :)");
console.log("cap: ", cap);
console.log("PI: ", PI);
import * as allFunctions from "./string_function.js"; //importar  todo
console.log("allFunctions.PI: ", allFunctions.PI);

/*
export default:  cuando quieres exportar una sola cosa de un archivo
    Cuando importas un export default no le pones {}
*/
import getProjectName from "./project_name.js";
console.log("getProjectName(): ", getProjectName());

//Ciclos

//FOR obtener el valor con OF
let myArray = [1,2,3,4,5];
console.log(myArray);
for(let value of myArray){
    console.log("%%%%%%%%%% value: ", value);
}
//FOR obtener el propiedad con IN
for(let propName in myArray ){
    console.log("*******propName: ", propName);
}

//Arrow FUnctions
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for(let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// forEach

// companies.forEach(function(company) {
//   console.log(company.name);
// });

// filter

// Get 21 and older

// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//   if(ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// const canDrink = ages.filter(function(age) {
//   if(age >= 21) {
//     return true;
//   }
// });

const canDrink = ages.filter(age => age >= 21);

// Filter retail companies

// const retailCompanies = companies.filter(function(company) {
//   if(company.category === 'Retail') {
//     return true;
//   }
// });

const retailCompanies = companies.filter(
  company => company.category === "Retail"
);

// Get 80s companies

const eightiesCompanies = companies.filter(
  company => company.start >= 1980 && company.start < 1990
);

// Get companies that lasted 10 years or more

const lastedTenYears = companies.filter(
  company => company.end - company.start >= 10
);

// map

// Create array of company names
// const companyNames = companies.map(function(company) {
//   return company.name;
// });

// const testMap = companies.map(function(company) {
//   return `${company.name} [${company.start} - ${company.end}]`;
// });

// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

// const ageMap = ages
//   .map(age => Math.sqrt(age))
//   .map(age => age * 2);

// sort

// Sort companies by start year

// const sortedCompanies  = companies.sort(function(c1, c2) {
//   if(c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

// Sort ages
// const sortAges = ages.sort((a, b) => a - b);

// console.log(sortAges);

// reduce

// let ageSum = 0;
// for(let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(total, age) {
//   return total + age;
// }, 0);

// const ageSum = ages.reduce((total, age) => total + age, 0);

// Get total years for all companies

// const totalYears = companies.reduce(function(total, company) {
//   return total + (company.end - company.start);
// }, 0);

const totalYears = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);

// Combine Methods

const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined);

//pipe functions javascript
