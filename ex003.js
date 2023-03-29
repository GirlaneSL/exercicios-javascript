/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto considerando o preço normal de etiqueta e a escolha da condição de pagamento.

    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhido e efetuar o cálculo adequado.

    Código Condição de pagamento:
    1 - À vista Débito, recebe 10% de deaconto;
    2 - À vista no dinheiro ou PIX, recebe 15% de desconto;
    3 - Em duas vezes, preço normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%.
*/

const valorProduto = 100;
const debito = valorProduto - (valorProduto * 10 / 100);
const dinheiroOuPix = valorProduto - (valorProduto * 15 /100);
const duasVezes = valorProduto;
const maisDeDuasVezes = valorProduto + (valorProduto * 10 / 100);
const tipoPagamento = 12;

if (tipoPagamento === 1) {
    console.log(`O valor do produto no débito sai por ${debito.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}.`)
} else if (tipoPagamento === 2) {
    console.log(`O valor do produto em dinheiro ou no PIX sai por ${dinheiroOuPix.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`)
} else if (tipoPagamento === 3) {
    console.log(`O valor do produto dividido em duas vezes sai por ${duasVezes.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`)
} else {
    console.log(`O valor do produto dividido em mais de duas vezes sai por ${maisDeDuasVezes.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`)
}