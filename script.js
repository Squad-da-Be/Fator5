// Dados simulados de vendas
const data = [
{ codigo: "I9D8", nome:"TOTAL_FATOR5", vendas: "2", comissao: "R$: 31,428", bonus: "R$: 0", comissao_total:"R$: 31,428", ranking: "N/A" }, 
{ codigo: "CNBP", nome:"EMYLOHANA", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "3" }, 
{ codigo: "DQLM", nome:"OQUEELAMA", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "3" }, 
{ codigo: "QH6I", nome:"DICASDEBELEZADAGAH", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "3" }, 
{ codigo: "34Y7", nome:"MILENAMARTIL", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "3" }, 
{ codigo: "NKZ9", nome:"MALUMEDINA", vendas: "1", comissao: "R$: 7,65", bonus: "R$: 0", comissao_total:"R$: 7,65", ranking: "1" }, 
{ codigo: "P1BK", nome:"RAFAELAULLA", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "3" }, 
{ codigo: "DFLW", nome:"CUIDADOSDAISA", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "3" }, 
{ codigo: "AVE7", nome:"DICASDACLARINHA", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "3" }, 
{ codigo: "T5WZ", nome:"ELAINEBARBOSA", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "3" }, 
{ codigo: "3ERF", nome:"ALIVIAMARINS", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "3" }, 
{ codigo: "FSVS", nome:"PRISCILAROLLO", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "3" }, 
{ codigo: "OD96", nome:"MIIHMOURAO", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "3" }, 
{ codigo: "62FP", nome:"STAR", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "3" }, 
{ codigo: "FEL1", nome:"DICASBYDEIA", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "3" }, 
{ codigo: "JHDE", nome:"BLOGDICAJU", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "3" }, 
{ codigo: "KQ67", nome:"PRISCILALIROW", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "3" }, 
{ codigo: "AS61", nome:"MANOELAROSA", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "3" }, 
{ codigo: "DAGE", nome:"THATS", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "3" }, 
{ codigo: "17EX", nome:"BIAGIFFONI", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "3" }, 
{ codigo: "GHTR", nome:"VAHTORQUATOBEAUTY", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "3" }, 
{ codigo: "UIL2", nome:"BEAUTYRAYY", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "3" }, 
{ codigo: "NJ5J", nome:"MELHORACHADINHOONLINE", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "3" }, 
{ codigo: "BW6M", nome:"DICASDAHAI", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "3" }, 
{ codigo: "H5OX", nome:"BLOGJESSICANATALIA", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "3" }, 
{ codigo: "L7Y7", nome:"IZABELLABARREIROS", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "3" }, 
{ codigo: "LL54", nome:"DICASDANESSA", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "3" }, 
{ codigo: "1X5G", nome:"OHLIVIAMARIA", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "3" }, 
{ codigo: "75IQ", nome:"JOYCECUSTODIO", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "3" }, 
{ codigo: "TKIZ", nome:"ALEBRITTO", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "3" }, 
{ codigo: "FPJX", nome:"NUTRIMILAALMEIDA", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "3" }, 
{ codigo: "HC8W", nome:"BYLUANASANTOSS", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "3" }, 
{ codigo: "1576", nome:"PEACE", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "3" }, 
{ codigo: "ZW2O", nome:"BLOOGUERICES", vendas: "1", comissao: "R$: 18,54", bonus: "R$: 0", comissao_total:"R$: 18,54", ranking: "1" }, 
{ codigo: "R1M9", nome:"ACHADINHOSDAMI", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "3" }, 
{ codigo: "62BK", nome:"DOMENICA", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "3" },  

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
