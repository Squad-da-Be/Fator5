// Dados simulados de vendas
const data = [
    { codigo: "I9D8", nome:"TOTAL_FATOR5", vendas: "18", comissao: "R$: 248,6172", bonus: "R$: 0", comissao_total:"R$: 248,6172", ranking: "N/A" }, 
    { codigo: "CNBP", nome:"EMYLOHANA", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "13" }, 
    { codigo: "DQLM", nome:"OQUEELAMA", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "13" }, 
    { codigo: "QH6I", nome:"DICASDEBELEZADAGAH", vendas: "1", comissao: "R$: 8", bonus: "R$: 0", comissao_total:"R$: 8", ranking: "5" }, 
    { codigo: "34Y7", nome:"MILENAMARTIL", vendas: "3", comissao: "R$: 53,22", bonus: "R$: 0", comissao_total:"R$: 53,22", ranking: "1" }, 
    { codigo: "NKZ9", nome:"MALUMEDINA", vendas: "1", comissao: "R$: 7,65", bonus: "R$: 0", comissao_total:"R$: 7,65", ranking: "5" }, 
    { codigo: "P1BK", nome:"RAFAELAULLA", vendas: "2", comissao: "R$: 13,23", bonus: "R$: 0", comissao_total:"R$: 13,23", ranking: "2" }, 
    { codigo: "DFLW", nome:"CUIDADOSDAISA", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "13" }, 
    { codigo: "AVE7", nome:"DICASDACLARINHA", vendas: "1", comissao: "R$: 19,86", bonus: "R$: 0", comissao_total:"R$: 19,86", ranking: "5" }, 
    { codigo: "T5WZ", nome:"ELAINEBARBOSA", vendas: "2", comissao: "R$: 23,67", bonus: "R$: 0", comissao_total:"R$: 23,67", ranking: "2" }, 
    { codigo: "3ERF", nome:"ALIVIAMARINS", vendas: "1", comissao: "R$: 20,08", bonus: "R$: 0", comissao_total:"R$: 20,08", ranking: "5" }, 
    { codigo: "FSVS", nome:"PRISCILAROLLO", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "13" }, 
    { codigo: "OD96", nome:"MIIHMOURAO", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "13" }, 
    { codigo: "62FP", nome:"STAR", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "13" }, 
    { codigo: "FEL1", nome:"DICASBYDEIA", vendas: "2", comissao: "R$: 11,78", bonus: "R$: 0", comissao_total:"R$: 11,78", ranking: "2" }, 
    { codigo: "JHDE", nome:"BLOGDICAJU", vendas: "1", comissao: "R$: 8,19", bonus: "R$: 0", comissao_total:"R$: 8,19", ranking: "5" }, 
    { codigo: "KQ67", nome:"PRISCILALIROW", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "13" }, 
    { codigo: "AS61", nome:"MANOELAROSA", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "13" }, 
    { codigo: "DAGE", nome:"THATS", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "13" }, 
    { codigo: "17EX", nome:"BIAGIFFONI", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "13" }, 
    { codigo: "GHTR", nome:"VAHTORQUATOBEAUTY", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "13" }, 
    { codigo: "UIL2", nome:"BEAUTYRAYY", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "13" }, 
    { codigo: "NJ5J", nome:"MELHORACHADINHOONLINE", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "13" }, 
    { codigo: "BW6M", nome:"DICASDAHAI", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "13" }, 
    { codigo: "H5OX", nome:"BLOGJESSICANATALIA", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "13" }, 
    { codigo: "L7Y7", nome:"IZABELLABARREIROS", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "13" }, 
    { codigo: "LL54", nome:"DICASDANESSA", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "13" }, 
    { codigo: "1X5G", nome:"OHLIVIAMARIA", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "13" }, 
    { codigo: "75IQ", nome:"JOYCECUSTODIO", vendas: "1", comissao: "R$: 15,66", bonus: "R$: 0", comissao_total:"R$: 15,66", ranking: "5" }, 
    { codigo: "TKIZ", nome:"ALEBRITTO", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "13" }, 
    { codigo: "FPJX", nome:"NUTRIMILAALMEIDA", vendas: "1", comissao: "R$: 2,65", bonus: "R$: 0", comissao_total:"R$: 2,65", ranking: "5" }, 
    { codigo: "HC8W", nome:"BYLUANASANTOSS", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "13" }, 
    { codigo: "1576", nome:"PEACE", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "13" }, 
    { codigo: "ZW2O", nome:"BLOOGUERICES", vendas: "1", comissao: "R$: 18,54", bonus: "R$: 0", comissao_total:"R$: 18,54", ranking: "5" }, 
    { codigo: "R1M9", nome:"ACHADINHOSDAMI", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "13" }, 
    { codigo: "62BK", nome:"DOMENICA", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "13" }, 
 

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
