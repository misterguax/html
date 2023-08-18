//obter referências aos  elementos html
const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outputElement = document.querySelector("#output");
const convertButton = document.querySelector("#convert-btn");
const messageElement = document.querySelector("#message");

//Função para converter as unidades
function convert() {
    //Obter os valores das unidades de entrada e saída
    const fromValue = fromElement.value;
    const toValue = toElement.value;

    //verificar se as unidades de entradas e saíds são iguais:
    if (fromValue === toValue) {
        outputElement.value = inputElement.value;
        messageElement.textContent = "";
        return;
    }
    //Coverter o valor da medida
    let meters;
    switch (fromValue)  {
        case "m" :
            meters = inputElement.value;
            break;
        case "km" :
            meters = inputElement.value * 1000;
            break;
        case "cm" :
            meters = inputElement.value / 100;
            break;
        case "mm" :
            meters = inputElement.value / 1000;
            break;
        
    }

    //cONVERTER PARA UNIDADE DE SAÍDA
    let result;
    switch (toValue) {
        case "m" :
            result = meters;
            break;
        case "km":
            result = meters / 1000;
            break;
        case "cm":
            result = meters * 100;
            break;
        case "mm":
            result = meters * 1000;
            break;
            
    }
    //Exibir resultado na caixa de saída
    outputElement.value = result;

    //exibir a mensagem de  conversão
    const fromLabel = fromElement.options [fromElement.selectedIndex].text;
    const toLabel =  toElement.options [toElement.selectedIndex].text;
    const message = `${
        inputElement.value
    }   ${fromLabel} equivalem a ${result} ${toLabel}`;
    messageElement.textContent = message;
    
}
convertButton.addEventListener("click",convert);
