let now = new Date();
let red = "rgb(255, 123, 127)";
let blue = "rgb(72, 235, 252)";
let upbiturl = "https://crix-api-endpoint.upbit.com/v1/crix/candles/days/?code=CRIX.UPBIT.KRW-"
let coinList = ["btc", "eth", "eos", "xrp", "ada", "doge", "matic", "algo", "atom", "sol", "dot", "mana", "trx", "sand", "etc"];
let stockList = ["TQQQ", "QQQ", "SQQQ", "SPY", "AAPL"]

document.querySelector(".time").innerHTML = now;

//로직
coinList.forEach(coin => {
    getCoinData(upbiturl, coin);
});
stockList.forEach(stock => {
    getStockData(stock);
});


// 함수선언
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
        });
}

function getStockData(stockname) {
    fetch("https://quote.cnbc.com/quote-html-webservice/restQuote/symbolType/symbol?symbols=" + stockname + "&requestMethod=itv&noform=1&partnerId=2&fund=1&exthrs=1&output=json&events=1").then((res) => res.json()).then((data) => {
        let stock = data.FormattedQuoteResult.FormattedQuote[0];
        let price = stock.last;
        let chanRate = stock.change_pct;
        document.querySelector(".now" + stockname).innerHTML = price;
        document.querySelector(".chan" + stockname).innerHTML = chanRate;
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
    });