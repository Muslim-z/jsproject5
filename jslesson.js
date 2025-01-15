let myClass = [];
myClass[0] = "Иванов";
myClass[1] = "Петров";
myClass[2] = "Сидоров";
myClass.unshift("Синицин","Дмитриев","Щукин");
myClass.push("Кузнецов","Аникина","Федоров");
myClass.splice(5, 1);
myClass.splice(5,0,"Кошкин")
console.log(myClass.slice(2, 6))
myClass.push("Головач")
console.log(myClass.sort())
let pyatyiBClass = myClass.join("\n");
console.log(pyatyiBClass)