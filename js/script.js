{
    const calcCurrency = (currency, money) => {
        const eur = 4.71;
        const dol = 4.5;
        const gbp = 5.52;
        switch (currency) {
            case "EUR":
                return money / eur;
            case "DOL":
                return money / dol;
            case "GBP":
                return money / gbp;
        }
    }

    const updateResult = (result, currency) => {

        const elementResult = document.querySelector(".js-result");
        elementResult.innerText = `${result.toFixed(2)} ${currency}`;

    }

    const onFormSubmit = (event) => {

        event.preventDefault()
        const elementCurrency = document.querySelector(".js-currency");
        const elementMoney = document.querySelector(".js-money");
        const money = +elementMoney.value;
        const currency = elementCurrency.value;
        const result = calcCurrency(currency, money);
        updateResult(result, currency);
    }

    const init = () => {

        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", (onFormSubmit));
    }

    init();
}