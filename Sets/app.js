// Setler - Kümeler  (Bir değeri bir defa taşıyor)

const myset = new Set();

myset.add(100);
myset.add(100);
myset.add(3.14);
myset.add("Abdullah");
myset.add(true);
myset.add([1,2,3]);
myset.add({a:1,b:2}); //Obje

const myset2 =  new Set([100,3.14,"Abdullah"]);

// console.log(myset);
// console.log(myset2);

// Size

// console.log(myset.size);

// Delete Metodu

// myset.delete("Abdullah");

// Has Metodu , değer verip o değer kümede var mı kontrol edebiliriz

// console.log(myset.has("Abdullah"));
// console.log(myset.has(3.14));
// console.log(myset.has(2000));
// console.log(myset.has([1,2,3]));

// For Each

// myset.forEach(function(value){
//     console.log(value);
// })

// For Of

// for (let value of myset){
//     console.log(value);
// }

// Setlerden Array Oluşturna

const array = Array.from(myset);

console.log(array);