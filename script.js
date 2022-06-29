let qntd = parseInt(window.prompt("Quantas unidades você deseja comprar?"));
let opcao = prompt("Escolha uma das alternativas abaixo: \na) qual o percentual de perca do casaco G ao final do pedido em questão \nb) quanto em quilometros de fio de lã são perdidos na confecção do casaco M, no pedido em questão \nc) quanto em quilometros de fio no total são utilizados no pedido em questão? \nd) quanto em quilometros de fio é perdido na confecção do casaco P e G, no pedido em questão")
let perda;
let gasto;

function tamP (quantidade){
    //Array com o tamanho necessario e a porcentagem de perda durante a produção de um casaco(resultado em m)
    const casacoP = [3972, 3.3];

    //Verifica a porcentagem perdida e multiplica pela quantidade de itens
    perda = (quantidade * ((casacoP[0] * casacoP[1])/100))
    gasto = quantidade * casacoP[0];

    //retorno dos valores em: un, m, m
    return prodP = [quantidade, perda, gasto];
}

function tamM (quantidade){
    //Array com o tamanho necessario e a porcentagem de perda durante a produção de um casaco(resultado em m)
    const casacoM = [7920, 4.25];

    //Verifica a porcentagem perdida e multiplica pela quantidade de itens
    perda = (quantidade * ((casacoM[0] * casacoM[1])/100))
    gasto = quantidade * casacoM[0];

    //retorno dos valores em: un, m, m
    return prodM = [quantidade, perda, gasto];
}

function tamG (quantidade){
    //Array com o tamanho necessario e a porcentagem de perda durante a produção de um casaco(resultado em m)
    const casacoG = [9986, 4.20];

    //Verifica a porcentagem perdida e multiplica pela quantidade de itens
    perda = (quantidade * ((casacoG[0] * casacoG[1])/100))
    gasto = quantidade * casacoG[0];

    //retorno dos valores em: un, m, m
    return prodG = [quantidade, perda, gasto];
}

function questaoA(){
    var perdaG = (prodG[1]*100)/prodG[2];
    return document.write("a) " + perdaG + "% dos fios utilizados foram perdidos <br>")
}

function questaoB(){
    var perdaM = prodM[1]/1000;
    return document.write("b) O total perdido em KM durante a produção do casaco M é de " + perdaM + "Km <br>") 
}

function questaoC(){
    var gastoTotal = (prodP[2] + prodM[2] + prodG[2])/1000;
    return document.write("c) O gasto total de fios em Km é de: " + gastoTotal.toFixed(2) + "Km <br>")
}

function questaoD(){
    var perdaPG = (prodP[1] + prodG[1])/1000
    return document.write("d) O total de Km perdidos durante a produção dos casacos P e G é: " + perdaPG.toFixed(2) + "Km <br>")
}

function validacao(){
    if(opcao == 'a' || opcao == 'A'){
        questaoA();
    }else if(opcao == 'b' || opcao == 'B'){
        questaoB();
    }else if(opcao == 'c' || opcao == 'C'){
        questaoC();
    }else if(opcao == 'd' || opcao == 'D'){
        questaoD();
    } else {
        alert('Opção Invalida');
        answer();
    }
}

if(qntd > 0) {
    tamP(qntd)
    tamM(qntd)
    tamG(qntd)

    validacao();

    document.write("<br> <p>Criado por Guilherme Perinotti - Engenharia de Software FAG - Turma AA")
} else {
    alert("O numero informado não é valido")
}



