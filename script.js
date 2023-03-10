const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

const inputValue = document.getElementById('value-real');
const selectedCurrency = document.getElementById('currency');
const result = document.getElementById('result');
let valueConverted = 0;

function handleSubmit(e) {
    e.preventDefault();
    
    if(!inputValue.value || inputValue.value < 0) {
        alert('Informe um valor correto')
        return;
    } else if(!selectedCurrency.value) {
        alert('Escolha uma moeda!');
        return;
    }
    
    converter();
};

function converter() {
    if(selectedCurrency.value === 'eur') {
        valueConverted = inputValue.value * 6.22;
        result.innerHTML = valueFormatter('pt-br', 'EUR');

        animateResult();
    } else if(selectedCurrency.value === 'dol') {
        valueConverted = inputValue.value * 5.37;
        result.innerHTML = valueFormatter('en-US', 'USD');

        animateResult();
    }
// para apó o calculo zerar os campos
    inputValue.value = '';
    selectedCurrency.value = '';
};
// 2 parametros para formatação monetaria 1º moeda do pais que vai ser convertida 2º do que vai converter
function valueFormatter(locale, currency) {
    const value = valueConverted.toLocaleString(`${locale}`, { style: 'currency', currency: `${currency}` });
    return `<span>🤑</span> ${value} <span>🤑</span>`;

};
// animação do conteudo
 function animateResult() {
    return result.animate([
        { transform: 'translateY(-150px)'},
        { transform: 'translateY(0px)'},
    ],{duration: 500 });
 };