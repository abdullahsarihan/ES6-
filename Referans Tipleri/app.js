// let a = "Abdullah";
// let b = "Abdullah";

// if(a === b) {
//     console.log("Eşit");
// }

// Primitive veri tiplerinde değerler sorgulanıyor o yüzden eşit çıktı.
// Referans tiplerinde aynı adresi gösteriyor mu diye sorgulanıyor o yüzden Eşit çıkmadı.

// let array1 = [1,2,3,4,5];
// let array2 = [1,2,3,4,5];

// if(array1 === array2) {
//     console.log("Eşit");
// }

// const person1 = {
//     name:"Abdullah",
//     age:25
// }
// const person2 = {
//     name:"Abdullah",
//     age:25
// }

// if(person1 === person2) {
//     console.log("Eşit");
// }


const cities = new Map();
const key = [1,2,3];
cities.set("Ankara",5);
cities.set("İstanbul",15);
cities.set(key,"Array");

// console.log(cities.get([1,2,3])); bu şekilde undefined alırız
console.log(cities.get(key)); 


