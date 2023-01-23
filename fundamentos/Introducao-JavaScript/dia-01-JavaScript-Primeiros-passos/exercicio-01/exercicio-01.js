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