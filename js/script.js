console.log("Witajcie");

let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.4659;
let rateGBP = 4.9500;
let rateUSD = 3.9528;
let rateCHF = 4.1920;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;

        case "GBP":
            result = amount / rateGBP;
            break;

        case "USD":
            result = amount / rateUSD;
            break;

        case "CHF":
            result = amount / rateCHF;
            break;
    }

    resultElement.innerText = `${amount.toFixed(2)} PLN to ${result.toFixed(2)} ${currency}`;
});