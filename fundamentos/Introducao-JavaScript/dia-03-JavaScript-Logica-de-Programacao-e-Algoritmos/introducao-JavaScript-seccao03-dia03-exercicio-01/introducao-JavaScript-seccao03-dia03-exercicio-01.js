/*Aprofunde seus conhecimentos
Leia atentamente os enunciados e faça o que se pede.
O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
Copiar
O fatorial é representado pelo sinal !
4! = 4 x 3 x 2 x 1 = 24
Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.
*/
let factorial = 10;
for (let index = 10; index > 0 ; index -= 1){
    factorial *= index;    
}
console.log(factorial);