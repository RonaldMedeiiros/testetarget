const fs = require('fs');

const dadosJson = fs.readFileSync('dados.json');
const dados = JSON.parse(dadosJson);

const faturamentos = dados.filter(dia => dia.valor > 0).map(dia => dia.valor);

if (faturamentos.length > 0) {
    const menorFaturamento = Math.min(...faturamentos);
    const maiorFaturamento = Math.max(...faturamentos);
    
    const mediaMensal = faturamentos.reduce((acc, val) => acc + val, 0) / faturamentos.length;
    
    const diasAcimaDaMedia = faturamentos.filter(valor => valor > mediaMensal).length;
    
    console.log(`Menor faturamento do mês: ${menorFaturamento}`);
    console.log(`Maior faturamento do mês: ${maiorFaturamento}`);
    console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
} else {
    console.log("Não há dados de faturamento disponíveis para análise.");
}

// Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
