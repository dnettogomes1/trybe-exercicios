/*Para fixar
Para fixar, faça o exercício a seguir:

Utilize o for para imprimir os elementos da lista groceryList com o console.log():
*/

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index++) {
  const element = groceryList[index];
  console.log(element);
}
/*CRIAR MEGA SENA*/



for(let index = 0; index < 10; index+=1 ){
  console.log(index);
}


for(let index = 0; index <= 20; index+=1 ){
  console.log(index);
}

/*
Aprofunde seus conhecimentos
🚀 Se liga nesse foguete!
Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação, mas fique de olho nesses! 👀
Leia atentamente os enunciados e faça o que se pede.
🚀 Lidando com Arrays
Iremos utilizar esse array para realizar os próximos exercícios.
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


/* Percorra o array imprimindo todos os valores nele contidos com a função console.log(); */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index += 1){
      console.log(numbers[index]) 
}

/*Some todos os valores contidos no array e imprima o resultado;*/
let soma = 0
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index += 1){
    soma = soma + numbers[index]
}
console.log(soma)

/*Calcule e imprima a média aritmética dos valores contidos no array;*/

let soma = 0
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index += 1){
    soma = soma + numbers[index]
}
media = soma / numbers.length
console.log(media)

/*Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;*/


let soma = 0
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index += 1){
    soma = soma + numbers[index]
}
media = soma / numbers.length
if (media > 20){
  console.log(“valor maior que 20”);
}else{
  console.log(valor menor ou igual a 20”)
}