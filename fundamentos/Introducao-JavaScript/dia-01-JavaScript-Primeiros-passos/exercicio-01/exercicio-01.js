//Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas constantes com os valores que serão comparados.


const num1 = 10
const num2 = 20

if (num1 > num2){
    console.log('O primeiro numero é maior que o segundo')
}else{
    console.log('O segundo numero é maior que o primeiro')
}


/*Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.*/

const numb1 = 100
const numb2 = 60
const numb3 = 30

if (numb1 > numb2 && numb1 > numb3){ 
    console.log('O primeiro numero é o  maior entre os tres escritos.')
}else if(numb2 > numb1 && numb2 > numb3){
    console.log('O segundo numero é maior entre os tres escritos.')
}else{
    console.log('O terceiro numero e o maior  entre os tres escritos.')
}
/*Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.*/

const num = 10
if (num > 0){
    console.log("positive")
}else if(num < 0){
    console.log ("negative")
}else{
    console.log('zero')
}

/*Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.*/


const a = 30 
const b = 160
const c = 90


if (a <= 0 || a <= 0 || c <= 0){
    console.log("positive")
}else if(a + b + c === 180  )
    console.log("tringulo invalido")
else{
    console.log("false")
}

/*Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

Exemplo: bishop (bispo) -> diagonals (diagonais) */


let peca = 'peão'
const movimento = '';

switch (peca){
    case 'peão':
        movimento ='frente'
        break;
    case 'cavalo':
        movimento ='em forma de L'
        break;
    case 'bispo':
        movimento ='diagonal'
        break;        
    case 'tower':
        movimento = 'horizontal e vertical'
        break
    case 'rainha':
        movimento = 'diagonal, horizontal e vertical'
        break;
    case 'king': 
        movimento = 'uma casa em qualquer direção'
        break;
    default:
        return "peça invalida"

}
console.log(movimento)