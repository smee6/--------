let now = new Date();
let red = "rgb(255, 123, 127)";
let blue = "rgb(72, 235, 252)";
let upbiturl = "https://crix-api-endpoint.upbit.com/v1/crix/candles/days/?code=CRIX.UPBIT.KRW-"
let coinList = ["btc", "eth", "eos", "xrp", "ada", "doge", "matic", "algo", "atom", "sol", "dot", "mana", "trx", "sand", "etc"];
let gimpList = ["btc", "eth", "xrp", "doge"];
let stockList = ["TQQQ", "QQQ", "SQQQ", "SPY", "AAPL"];
let gimpBTC;
let gimpETH;
let gimpDOGE;
let gimpXRP;

document.querySelector(".time").innerHTML = now;

playLogic();

// 함수
// console.log(sessionStorage.getItem("btcUsdPrice"));
// 로직
function playLogic() {
    coinList.forEach(coin => {
        getCoinData(upbiturl, coin);
    });
    stockList.forEach(stock => {
        getStockData(stock);
    });
    gimpList.forEach(coin => {
        getUsdCoinData(coin);
    });
}
// setTimeout(() => {
//     gimpBTC = sessionStorage.getItem("usdC");
//     console.log(gimpBTC);
// }, 2000);

function getCoinData(url, coinName) {
    //upbit : https://crix-api-endpoint.upbit.com/v1/crix/candles/days/?code=CRIX.UPBIT.KRW-
    fetch(url + coinName).then((response) => response.json())
        .then((data) => {
            let opening_price;
            let closing_price;
            let coin = data[0];
            opening_price = coin.openingPrice;
            closing_price = coin.tradePrice;
            percent = ((closing_price - opening_price) / opening_price) * 100;
            dp_opening_price = opening_price.toLocaleString();
            dp_closing_price = closing_price.toLocaleString();
            document.querySelector("." + coinName + "PrvPrice").innerHTML = dp_opening_price;
            document.querySelector("." + coinName + "CurPrice").innerHTML = dp_closing_price;
            document.querySelector("." + coinName + "Fluc").innerHTML = percent.toFixed(2);
            if (closing_price > opening_price) document.querySelector("." + coinName + "CurPrice").style.color = red;
            if (closing_price < opening_price) document.querySelector("." + coinName + "CurPrice").style.color = blue;
            if (percent > 0) document.querySelector("." + coinName + "Fluc").style.color = red;
            if (percent < 0) document.querySelector("." + coinName + "Fluc").style.color = blue;
            if (coinName === "btc") sessionStorage.setItem("btcPrice", dp_closing_price);
            if (coinName === "eth") sessionStorage.setItem("ethPrice", dp_closing_price);
            if (coinName === "xrp") sessionStorage.setItem("xrpPrice", dp_closing_price);
            if (coinName === "doge") sessionStorage.setItem("dogePrice", dp_closing_price);
        });
}

function getUsdCoinData(coinName) {
    //upbit : 
    fetch("https://crix-api-endpoint.upbit.com/v1/crix/candles/days/?code=CRIX.UPBIT.USDT-" + coinName).then((response) => response.json())
        .then((data) => {
            let closing_price;
            let coin = data[0];
            closing_price = coin.tradePrice;
            dp_closing_price = closing_price.toLocaleString();
            if (coinName === "btc") sessionStorage.setItem("btcUsdPrice", dp_closing_price);
            if (coinName === "eth") sessionStorage.setItem("ethUsdPrice", dp_closing_price);
            if (coinName === "xrp") sessionStorage.setItem("xrpUsdPrice", dp_closing_price);
            if (coinName === "doge") sessionStorage.setItem("dogeUsdPrice", dp_closing_price);
        });
}

function getStockData(stockName) {
    fetch("https://quote.cnbc.com/quote-html-webservice/restQuote/symbolType/symbol?symbols=" + stockName + "&requestMethod=itv&noform=1&partnerId=2&fund=1&exthrs=1&output=json&events=1").then((res) => res.json()).then((data) => {
        let stock = data.FormattedQuoteResult.FormattedQuote[0];
        let price = stock.last;
        let chanRate = stock.change_pct;
        document.querySelector(".now" + stockName).innerHTML = price;
        document.querySelector(".chan" + stockName).innerHTML = chanRate;
    });
}
//환율 Api
//https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD
fetch("https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD").then((response) => response.json())
    .then((data) => {
        let exchanRate = data[0];
        let nowP = exchanRate.basePrice;
        let openP = exchanRate.openingPrice;
        let chanRate = exchanRate.signedChangeRate * 100;
        document.querySelector(".nowP").innerHTML = nowP;
        document.querySelector(".chanRate").innerHTML = chanRate.toFixed(2);
        sessionStorage.setItem("usdC", chanRate.toFixed(2));
    });