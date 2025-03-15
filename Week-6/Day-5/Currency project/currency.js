

// The program should take the currency which the user currently has 
// and the currency in which they would like to receive, as well as 
// the amount of money.Afterwards, the program will output the correct 
// exchange rate based on the data from the APIs.

// First, you need to fetch all the supported currencies, in order to add
// the currencies options(ie FROM - To) in the currency converter.Check
// out this page on Supported Codes Endpoint from the ExchangeRate API
// documentation.

// To convert from a currency, to another one, you need to fetch conversion 
// rate from the Pair Conversion API endpoint.Check out this page on Pair 
// conversion requests from the ExchangeRate API documentation.
// Hint: You could also supply an optional AMOUNT variable in the query 
// of the request.

//  Bonus: Add this “switch” button on the page, when clicked on it will 
//  switch the currencies and display the new amount converted.
// Example : if the conversion was from EUR to GBP, as soon as 
// the button is clicked on, the conversion should be from GBP to EUR.

let currencyFrom, currencyTo, amountOfMoney, calcButton, conversionRate, conversionResult, swithButton

async function fetchCurrency() {
    currencyFrom = document.createElement('select')
    currencyFrom.id = ('from')
    swithButton = document.createElement('button')
    swithButton.id = ('switch')
    currencyTo = document.createElement('select')
    currencyTo.id = ('to')
    amountOfMoney = document.createElement('input')
    amountOfMoney.id = ('amount')
    amountOfMoney.value = '1'
    calcButton = document.createElement('button')
    calcButton.id = ('calculate')
    calcButton.innerText = "Convert"


    conversionRate = document.createElement('h3')
    conversionRate.id = ('rate')

    conversionResult = document.createElement('h1')
    conversionResult.id = ('result')


    let mainDiv = document.getElementById('main-card')
    mainDiv.append(currencyFrom, swithButton, currencyTo, amountOfMoney, calcButton, conversionRate, conversionResult)

    const API_CODES_URL = 'https://v6.exchangerate-api.com/v6/0849cca58df579fb0663526c/codes/'

    let getCurrency = await fetch(API_CODES_URL)

    if (!getCurrency.ok) {
        throw new Error(`Error: ${response.status}`);
    }
    let result = await getCurrency.json()

    let defaultOption = document.createElement('option')
    defaultOption.value = ""
    defaultOption.innerText = "Select a currency"
    defaultOption.disabled = true
    defaultOption.selected = true
    defaultOption.defaultSelected = true

    currencyFrom.append(defaultOption.cloneNode(true))
    currencyTo.append(defaultOption.cloneNode(true))


    for (let i = 0; i < result.supported_codes.length; i++) {
        let option = result.supported_codes[i]

        let newCurrencyFrom = document.createElement('option')
        newCurrencyFrom.value = option[0]
        newCurrencyFrom.innerText = `${option[0]} - ${option[1]}`
        currencyFrom.append(newCurrencyFrom)

        let newCurrencyTo = document.createElement('option')
        newCurrencyTo.value = option[0]
        newCurrencyTo.innerText = `${option[0]} - ${option[1]}`
        currencyTo.append(newCurrencyTo)
    }
}

async function fetchConversionRate() {
    let fromValue = currencyFrom.value
    let toValue = currencyTo.value
    let amount = amountOfMoney.value.trim() || 1
    if (!fromValue || !toValue) {
        console.error("Please select both currencies")
        return
    }

    const API_PAIRCONV_URL = `https://v6.exchangerate-api.com/v6/0849cca58df579fb0663526c/pair/${fromValue}/${toValue}/${amount}`
    let pairConv = await fetch(API_PAIRCONV_URL)
    if (!pairConv.ok) {
        throw new Error(`Error: ${pairConv.status}`);
    }

    let convRate = await pairConv.json()
    // console.log(convRate)
    // console.log(convRate.base_code)
    // console.log(convRate.target_code)

    conversionRate.innerText = `Conversion Rate: ${convRate.conversion_rate}`

    if (amount === "") {
        console.error("Please enter an amount")
        conversionResult.innerText = ""
        return
    }
    conversionResult.innerText = `Amount: ${convRate.conversion_result}`

}
fetchCurrency().then(() => {
    calcButton.addEventListener("click", fetchConversionRate)
})


swithButton.addEventListener("click", () => {

    let switchCurr = currencyFrom.value;
    currencyFrom.value = currencyTo.value;
    currencyTo.value = switchCurr;

})