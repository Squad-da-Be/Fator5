// Dados simulados de vendas
const data = [
{ codigo: "LYAE", nome:"TOTAL_MADAME", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "N/A" }, 
{ codigo: "CNBP", nome:"EMYLOHANA", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "1" }, 
{ codigo: "DQLM", nome:"OQUEEELAMA", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "1" }, 
{ codigo: "QH6I", nome:"DICASDEBELEZADAGAH", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "1" }, 
{ codigo: "34Y7", nome:"MILENAMARTIL", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "1" }, 
{ codigo: "118X", nome:"ISABELAFERRER", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "1" }, 
{ codigo: "NKZ9", nome:"MALUMEDINA", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "1" }, 
{ codigo: "P1BK", nome:"RAFAELAULLA", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "1" }, 
{ codigo: "DFLW", nome:"CUIDADOSDAISA", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "1" }, 
{ codigo: "AVE7", nome:"DICASDACLARINHA", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "1" }, 
{ codigo: "UEK9", nome:"RESANTANA", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "1" }, 
{ codigo: "T5WZ", nome:"ELAINEBARBOSA", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "1" }, 
{ codigo: "3ERF", nome:"ALIVIAMARINS", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "1" }, 
{ codigo: "FSVS", nome:"PRISCILAROLLO", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "1" }, 
{ codigo: "OD96", nome:"MIIHMOURAO", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "1" }, 
{ codigo: "62FP", nome:"STAR", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "1" }, 
{ codigo: "FEL1", nome:"DICASBYDEIA", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "1" }, 
{ codigo: "JHDE", nome:"BLOGDICAJU", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "1" }, 
{ codigo: "SSW8", nome:"CHRISMENEZES", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "1" }, 
{ codigo: "3LDV", nome:"EVOLUIDAPELE", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "1" }, 
{ codigo: "KQ67", nome:"PRISCILALIROW", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "1" }, 
{ codigo: "AS61", nome:"MANOELAROSA", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "1" }, 
{ codigo: "DAGE", nome:"THATS", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "1" }, 
{ codigo: "17EX", nome:"BIAGIFFONI", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "1" }, 
{ codigo: "GHTR", nome:"VAHTORQUATOBEAUTY", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "1" }, 
{ codigo: "UIL2", nome:"BEAUTYRAYY", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "1" }, 
{ codigo: "NJ5J", nome:"MELHORACHADINHOONLINE", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "1" }, 
{ codigo: "BW6M", nome:"DICASDAHAI", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "1" }, 
{ codigo: "H5OX", nome:"BLOGJESSICANATALIA", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "1" }, 
{ codigo: "L7Y7", nome:"IZABELLABARREIROS", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "1" }, 
{ codigo: "LL54", nome:"DICASDANESSA", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "1" }, 
{ codigo: "1X5G", nome:"OHLIVIAMARIA", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "1" }, 
{ codigo: "75IQ", nome:"JOYCECUSTODIO", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "1" }, 

 
    // Adicione os dados restantes da sua planilha
];
// Elementos do DOM
const codigoInput = document.getElementById("codigoInput");
const buscarButton = document.getElementById("buscarButton");
const resultadoDiv = document.getElementById("resultado");
// Event listener para o botão de busca
buscarButton.addEventListener("click", () => {
    const codigo = codigoInput.value;
    // Procurando o produto pelo código
    const produto = data.find(item => item.codigo === codigo);
    if (produto) {
        // Exibindo os detalhes do produto se encontrado
        resultadoDiv.innerHTML = `
            <p><strong>Nome:</strong> ${produto.nome}</p>
            <p><strong>Vendas:</strong> ${produto.vendas}</p>
            <p><strong>Comissão:</strong> ${produto.comissao}</p>
            <p><strong>Bônus:</strong> ${produto.bonus}</p>
            <p><strong>Comissão final:</strong> ${produto.comissao_total}</p>
        `;
    } else {
        // Exibindo mensagem se o produto não for encontrado
        resultadoDiv.innerHTML = "<p>Código não encontrado.</p>";
    }
});
