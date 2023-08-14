let miArray = ["Helado", "Pizza", "Chocolate"];
console.log(miArray);

miArray[0] = "Hamburguesa";
console.log(miArray);

miArray[1] = "Tacos";
console.log(miArray);

miArray = ["Helado", "Pizza", "Chocolate"];
console.log(miArray.unshift("cereal"));
console.log(miArray);


let array1 = (miArray);
console.log(array1.toString());

let string = "cereal,Helado,Pizza,Chocolate";
console.log(string.replaceAll(',' , '-'));