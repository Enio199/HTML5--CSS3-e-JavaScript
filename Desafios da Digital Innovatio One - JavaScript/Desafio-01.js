/*
Desafios
Crie um programa que leia um número e mostre os números pares até esse número, inclusive ele mesmo.

Entrada
Você receberá 1 valor inteiro N, onde N > 0.

Saída
Exiba todos os números pares até o valor de entrada, sendo um em cada linha. 
*/

/*
Dafio simples em que é usada uma variável para receber o int e depois um "for" para o laço. 

A condição é para filtrar apenas o números pares nesse laço.
*/

let n = gets();
for (let num = 1; num <= n; num ++) {
    if (num  % 2 == 0) {
        console.log(num)
    }
}