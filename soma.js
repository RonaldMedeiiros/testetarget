// Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

let INDICE = 13, SOMA = 0, K = 0;
while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}
console.log('Resultado da soma:', SOMA);

// Resposta: 91 pois a variável SOMA é incrementada a cada iteração do loop até chegar na condição sendo K menor que INDICE. 
// Somando o valor de K que também é incrementado a cada iteração. 
// O loop é executado 13 vezes, somando os valores de 1 a 13. O resultado é 91.