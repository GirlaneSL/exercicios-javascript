/*
    1) Faça um algoritmo que, dadas as 3 notas tiradas por aluno em um semestre da faculdade, calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

        Classificação:
        - Média menor que 5, reprovação;
        - Média entre 5 e 7, recuperação;
        - Média acima de 7, passou de semestre;
*/

const nota1 = 8;
const nota2 = 7;
const nota3 = 7;
const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log(`Média: ${media.toFixed(1)}. Aluno REPROVADO`);
} else if (media <= 7) {
    console.log(`Média: ${media.toFixed(1)}. Aluno EM RECUPERAÇÃO`);
} else {
    console.log(`Média: ${media.toFixed(1)}. Aluno PASSOU DE SEMESTRE`);
}