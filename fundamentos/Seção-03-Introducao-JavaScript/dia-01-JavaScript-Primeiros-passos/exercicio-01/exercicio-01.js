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

/*Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A

Porcentagem >= 80 -> B

Porcentagem >= 70 -> C

Porcentagem >= 60 -> D

Porcentagem >= 50 -> E

Porcentagem < 50 -> F

O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
*/

const porcentagem = 20;
if(porcentagem > 100 || porcentagem < 0){
    console.log('ERRO')
}else if(porcentagem >= 90){
    console.log('A')
}else if(porcentagem >= 80){
    console.log('B')
}else if(porcentagem >= 70){
    console.log('C')
}else if(porcentagem >=60){
    console.log('D')
}else if(porcentagem >=50){
    console.log('E')
}else{
    console.log('F')
}


/*Há um par entre nós
Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
Bonus: use somente um if.*/

const num1 = 3
const num2 = 5
const num3 = 8

if (num1 %2 === 0 || num2 % 2 === 0 || num3 % 2 === 0  ){
    console.log('true')
}else{
    console.log('false')
}





/*Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
Bonus: use somente um if.*/


const num1 = 2 
const num2 = 4
const num3 = 8
if (num1 %2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0  ){
    console.log('true')
}else{
    console.log('false')
}



/*Utilize if/else para escrever um código que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.

Seu código também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

valorCustoTotal = valorCusto + impostoSobreOCusto;
lucro = valorVenda - valorCustoTotal (lucro de um produto);*/

const custo = 2;
const valorVenda = 20;

if (custo < 0 ||valorVenda < 0){
    console.log("ERRO: Valor de custo e valor de venda devem ser maiores que zero")
}
const impostoSobreOCusto = custo * 0.2;
const valorCustoTotal = custo + impostoSobreOCusto
const lucroPorProduto = valorVenda - valorCustoTotal
const LucroTotal = lucroPorProduto * 1000

console.log('lucro total ao vender mil produtos: ' + LucroTotal )



/*Utilize if/else para escrever um código que, dado um salário bruto, calcule o líquido a ser recebido.
Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.

A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

INSS (Instituto Nacional do Seguro Social)

Salário bruto até R$ 1.556,94: alíquota de 8%

Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%

Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%

Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

IR (Imposto de Renda)

Até R$ 1.903,98: isento de imposto de rendas

De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto

De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto

De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto

Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:

O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.

Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.

Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:

R$ 2.670,00: salário com INSS já deduzido;
7.5%: alíquota de imposto de renda;
R$ 142,80 parcela a se deduzir do imposto.
Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45

O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

Resultado: R$ 2.612,55.

De olho na dica 👀: que tal identificar as alíquotas com variáveis de nomes explicativos?*/

