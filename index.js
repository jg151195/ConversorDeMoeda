const coinFrom = document.getElementById('coins-from')
const coinTo = document.getElementById('coins-to');
const valueInput = document.getElementById('valueInput')
const send = document.getElementById('converter');
const finalResult = document.getElementById('result');

function changeCoinFrom() {
    const a = coinFrom.value
    return a;
}

function changeCoinTo() {
    const a = coinTo.value
    return a;
}


async function getData(a, b) {
    try {
        const coins = `${a}-${b}`
        const response = await fetch(`https://economia.awesomeapi.com.br/last/${coins}`)
        const data = await response.json();
        if (data.USDBRL) {
            const {
                bid
            } = data.USDBRL;
            return bid
        } else if (data.BRLUSD) {
            const {
                bid
            } = data.BRLUSD;
            return bid
        } else if (data.EURBRL) {
            const {
                bid
            } = data.EURBRL;
            return bid
        } else if (data.BRLEUR) {
            const {
                bid
            } = data.BRLEUR;
            return bid
        } else if (data.USDEUR) {
            const {
                bid
            } = data.USDEUR;
            return bid
        } else if (data.EURUSD) {
            const {
                bid
            } = data.EURUSD;
            return bid
        }
    } catch (err) {
        throw new Error(err)
    }

}

async function convert() {
    const from = changeCoinFrom()
    const to = changeCoinTo()
    if (from === to) {
        finalResult.innerHTML = "Moedas iguais selecionadas"
    } else {
        const coinValue = await getData(from, to)
        const result = valueInput.value * coinValue
        finalResult.innerHTML = to === 'BRL' ? `Resultado: R$${result.toFixed(2)}` : to === 'USD' ? ` Resultado: $${result.toFixed(2)}` : ` Resultado: €${result.toFixed(2)}`
    }

}


coinFrom.addEventListener('change', changeCoinFrom)
coinFrom.addEventListener('change', changeCoinTo)
send.addEventListener('click', convert)