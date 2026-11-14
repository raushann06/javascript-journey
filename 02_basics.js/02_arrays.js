const marvel_heros = ["spiderman", "ironman", "thor", "captain america"];
const dc_heros = ["superman", "batman", "flash"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

// const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Raushan"));//check if array or not?
console.log(Array.from("Raushan"));//convert the string into array


console.log(Array.from({name: "Raushan"})); //Interesting case


let score1 = 208;
let score2 = 209;
let score3 = 264;

console.log(Array.of(score1, score2, score3));

