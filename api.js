let now = new Date();
let red = "rgb(255, 123, 127)";
let blue = "rgb(72, 235, 252)";

document.querySelector(".time").innerHTML = now + " 매 분 갱신됩니다.";
//비트코인 시세
fetch("https://crix-api-endpoint.upbit.com/v1/crix/candles/days/?code=CRIX.UPBIT.KRW-BTC").then((response) => response.json())
    .then((data) => {
        let opening_price;
        let closing_price;
        let coin = data[0];
        opening_price = coin.openingPrice;
        closing_price = coin.tradePrice;
        percent = ((closing_price - opening_price) / opening_price) * 100;
        dp_opening_price = opening_price.toLocaleString();
        dp_closing_price = closing_price.toLocaleString();
        document.querySelector(".btcPrvPrice").innerHTML = dp_opening_price;
        document.querySelector(".btcCurPrice").innerHTML = dp_closing_price;
        document.querySelector(".btcFluc").innerHTML = percent.toFixed(2);
        if (closing_price > opening_price) document.querySelector(".btcCurPrice").style.color = red;
        if (closing_price < opening_price) document.querySelector(".btcCurPrice").style.color = blue;
        if (percent > 0) document.querySelector(".btcFluc").style.color = red;
        if (percent < 0) document.querySelector(".btcFluc").style.color = blue;
    });

//이더리움 시세
fetch("https://crix-api-endpoint.upbit.com/v1/crix/candles/days/?code=CRIX.UPBIT.KRW-ETH").then((response) => response.json())
    .then((data) => {
        let opening_price;
        let closing_price;
        let coin = data[0];
        opening_price = coin.openingPrice;
        closing_price = coin.tradePrice;
        percent = ((closing_price - opening_price) / opening_price) * 100;
        dp_opening_price = opening_price.toLocaleString();
        dp_closing_price = closing_price.toLocaleString();
        document.querySelector(".ethPrvPrice").innerHTML = dp_opening_price;
        document.querySelector(".ethCurPrice").innerHTML = dp_closing_price;
        document.querySelector(".ethFluc").innerHTML = percent.toFixed(2);
        if (closing_price > opening_price) document.querySelector(".ethCurPrice").style.color = red;
        if (closing_price < opening_price) document.querySelector(".ethCurPrice").style.color = blue;
        if (percent > 0) document.querySelector(".ethFluc").style.color = red;
        if (percent < 0) document.querySelector(".ethFluc").style.color = blue;

    });

//이오스 시세
fetch("https://crix-api-endpoint.upbit.com/v1/crix/candles/days/?code=CRIX.UPBIT.KRW-EOS").then((response) => response.json())
    .then((data) => {
        let opening_price;
        let closing_price;
        let coin = data[0];

        opening_price = coin.openingPrice;
        closing_price = coin.tradePrice;
        percent = ((closing_price - opening_price) / opening_price) * 100;
        dp_opening_price = opening_price.toLocaleString();
        dp_closing_price = closing_price.toLocaleString();
        document.querySelector(".eosPrvPrice").innerHTML = dp_opening_price;
        document.querySelector(".eosCurPrice").innerHTML = dp_closing_price;
        document.querySelector(".eosFluc").innerHTML = percent.toFixed(2);
        if (closing_price > opening_price) document.querySelector(".eosCurPrice").style.color = red;
        if (closing_price < opening_price) document.querySelector(".eosCurPrice").style.color = blue;
        if (percent > 0) document.querySelector(".eosFluc").style.color = red;
        if (percent < 0) document.querySelector(".eosFluc").style.color = blue;
    });

//리플 시세
fetch("https://crix-api-endpoint.upbit.com/v1/crix/candles/days/?code=CRIX.UPBIT.KRW-XRP").then((response) => response.json())
    .then((data) => {
        let opening_price;
        let closing_price;
        let coin = data[0];

        opening_price = coin.openingPrice;
        closing_price = coin.tradePrice;
        percent = ((closing_price - opening_price) / opening_price) * 100;
        dp_opening_price = opening_price.toLocaleString();
        dp_closing_price = closing_price.toLocaleString();
        document.querySelector(".xrpPrvPrice").innerHTML = dp_opening_price;
        document.querySelector(".xrpCurPrice").innerHTML = dp_closing_price;
        document.querySelector(".xrpFluc").innerHTML = percent.toFixed(2);
        if (closing_price > opening_price) document.querySelector(".xrpCurPrice").style.color = red;
        if (closing_price < opening_price) document.querySelector(".xrpCurPrice").style.color = blue;
        if (percent > 0) document.querySelector(".xrpFluc").style.color = red;
        if (percent < 0) document.querySelector(".xrpFluc").style.color = blue;
    });

//ada 시세
fetch("https://crix-api-endpoint.upbit.com/v1/crix/candles/days/?code=CRIX.UPBIT.KRW-ADA").then((response) => response.json())
    .then((data) => {
        let opening_price;
        let closing_price;
        let coin = data[0];

        opening_price = coin.openingPrice;
        closing_price = coin.tradePrice;
        percent = ((closing_price - opening_price) / opening_price) * 100;
        dp_opening_price = opening_price.toLocaleString();
        dp_closing_price = closing_price.toLocaleString();
        document.querySelector(".adaPrvPrice").innerHTML = dp_opening_price;
        document.querySelector(".adaCurPrice").innerHTML = dp_closing_price;
        document.querySelector(".adaFluc").innerHTML = percent.toFixed(2);
        if (closing_price > opening_price) document.querySelector(".adaCurPrice").style.color = red;
        if (closing_price < opening_price) document.querySelector(".adaCurPrice").style.color = blue;
        if (percent > 0) document.querySelector(".adaFluc").style.color = red;
        if (percent < 0) document.querySelector(".adaFluc").style.color = blue;
    });

//doge 시세
fetch("https://crix-api-endpoint.upbit.com/v1/crix/candles/days/?code=CRIX.UPBIT.KRW-doge").then((response) => response.json())
    .then((data) => {
        let opening_price;
        let closing_price;
        let coin = data[0];

        opening_price = coin.openingPrice;
        closing_price = coin.tradePrice;
        percent = ((closing_price - opening_price) / opening_price) * 100;
        dp_opening_price = opening_price.toLocaleString();
        dp_closing_price = closing_price.toLocaleString();
        document.querySelector(".dogePrvPrice").innerHTML = dp_opening_price;
        document.querySelector(".dogeCurPrice").innerHTML = dp_closing_price;
        document.querySelector(".dogeFluc").innerHTML = percent.toFixed(2);
        if (closing_price > opening_price) document.querySelector(".dogeCurPrice").style.color = red;
        if (closing_price < opening_price) document.querySelector(".dogeCurPrice").style.color = blue;
        if (percent > 0) document.querySelector(".dogeFluc").style.color = red;
        if (percent < 0) document.querySelector(".dogeFluc").style.color = blue;
    });

//matic 시세
fetch("https://crix-api-endpoint.upbit.com/v1/crix/candles/days/?code=CRIX.UPBIT.KRW-matic").then((response) => response.json())
    .then((data) => {
        let opening_price;
        let closing_price;
        let coin = data[0];

        opening_price = coin.openingPrice;
        closing_price = coin.tradePrice;
        percent = ((closing_price - opening_price) / opening_price) * 100;
        dp_opening_price = opening_price.toLocaleString();
        dp_closing_price = closing_price.toLocaleString();
        document.querySelector(".maticPrvPrice").innerHTML = dp_opening_price;
        document.querySelector(".maticCurPrice").innerHTML = dp_closing_price;
        document.querySelector(".maticFluc").innerHTML = percent.toFixed(2);
        if (closing_price > opening_price) document.querySelector(".maticCurPrice").style.color = red;
        if (closing_price < opening_price) document.querySelector(".maticCurPrice").style.color = blue;
        if (percent > 0) document.querySelector(".maticFluc").style.color = red;
        if (percent < 0) document.querySelector(".maticFluc").style.color = blue;
    });

//algo 시세
fetch("https://crix-api-endpoint.upbit.com/v1/crix/candles/days/?code=CRIX.UPBIT.KRW-algo").then((response) => response.json())
    .then((data) => {
        let opening_price;
        let closing_price;
        let coin = data[0];

        opening_price = coin.openingPrice;
        closing_price = coin.tradePrice;
        percent = ((closing_price - opening_price) / opening_price) * 100;
        dp_opening_price = opening_price.toLocaleString();
        dp_closing_price = closing_price.toLocaleString();
        document.querySelector(".algoPrvPrice").innerHTML = dp_opening_price;
        document.querySelector(".algoCurPrice").innerHTML = dp_closing_price;
        document.querySelector(".algoFluc").innerHTML = percent.toFixed(2);
        if (closing_price > opening_price) document.querySelector(".algoCurPrice").style.color = red;
        if (closing_price < opening_price) document.querySelector(".algoCurPrice").style.color = blue;
        if (percent > 0) document.querySelector(".algoFluc").style.color = red;
        if (percent < 0) document.querySelector(".algoFluc").style.color = blue;
    });

//atom 시세
fetch("https://crix-api-endpoint.upbit.com/v1/crix/candles/days/?code=CRIX.UPBIT.KRW-atom").then((response) => response.json())
    .then((data) => {
        let opening_price;
        let closing_price;
        let coin = data[0];

        opening_price = coin.openingPrice;
        closing_price = coin.tradePrice;
        percent = ((closing_price - opening_price) / opening_price) * 100;
        dp_opening_price = opening_price.toLocaleString();
        dp_closing_price = closing_price.toLocaleString();
        document.querySelector(".atomPrvPrice").innerHTML = dp_opening_price;
        document.querySelector(".atomCurPrice").innerHTML = dp_closing_price;
        document.querySelector(".atomFluc").innerHTML = percent.toFixed(2);
        if (closing_price > opening_price) document.querySelector(".atomCurPrice").style.color = red;
        if (closing_price < opening_price) document.querySelector(".atomCurPrice").style.color = blue;
        if (percent > 0) document.querySelector(".atomFluc").style.color = red;
        if (percent < 0) document.querySelector(".atomFluc").style.color = blue;
    });

//sol 시세
fetch("https://crix-api-endpoint.upbit.com/v1/crix/candles/days/?code=CRIX.UPBIT.KRW-sol").then((response) => response.json())
    .then((data) => {
        let opening_price;
        let closing_price;
        let coin = data[0];

        opening_price = coin.openingPrice;
        closing_price = coin.tradePrice;
        percent = ((closing_price - opening_price) / opening_price) * 100;
        dp_opening_price = opening_price.toLocaleString();
        dp_closing_price = closing_price.toLocaleString();
        document.querySelector(".solPrvPrice").innerHTML = dp_opening_price;
        document.querySelector(".solCurPrice").innerHTML = dp_closing_price;
        document.querySelector(".solFluc").innerHTML = percent.toFixed(2);
        if (closing_price > opening_price) document.querySelector(".solCurPrice").style.color = red;
        if (closing_price < opening_price) document.querySelector(".solCurPrice").style.color = blue;
        if (percent > 0) document.querySelector(".solFluc").style.color = red;
        if (percent < 0) document.querySelector(".solFluc").style.color = blue;
    });

//dot 시세
fetch("https://crix-api-endpoint.upbit.com/v1/crix/candles/days/?code=CRIX.UPBIT.KRW-dot").then((response) => response.json())
    .then((data) => {
        let opening_price;
        let closing_price;
        let coin = data[0];

        opening_price = coin.openingPrice;
        closing_price = coin.tradePrice;
        percent = ((closing_price - opening_price) / opening_price) * 100;
        dp_opening_price = opening_price.toLocaleString();
        dp_closing_price = closing_price.toLocaleString();
        document.querySelector(".dotPrvPrice").innerHTML = dp_opening_price;
        document.querySelector(".dotCurPrice").innerHTML = dp_closing_price;
        document.querySelector(".dotFluc").innerHTML = percent.toFixed(2);
        if (closing_price > opening_price) document.querySelector(".dotCurPrice").style.color = red;
        if (closing_price < opening_price) document.querySelector(".dotCurPrice").style.color = blue;
        if (percent > 0) document.querySelector(".dotFluc").style.color = red;
        if (percent < 0) document.querySelector(".dotFluc").style.color = blue;
    });

//mana 시세
fetch("https://crix-api-endpoint.upbit.com/v1/crix/candles/days/?code=CRIX.UPBIT.KRW-mana").then((response) => response.json())
    .then((data) => {
        let opening_price;
        let closing_price;
        let coin = data[0];

        opening_price = coin.openingPrice;
        closing_price = coin.tradePrice;
        percent = ((closing_price - opening_price) / opening_price) * 100;
        dp_opening_price = opening_price.toLocaleString();
        dp_closing_price = closing_price.toLocaleString();
        document.querySelector(".manaPrvPrice").innerHTML = dp_opening_price;
        document.querySelector(".manaCurPrice").innerHTML = dp_closing_price;
        document.querySelector(".manaFluc").innerHTML = percent.toFixed(2);
        if (closing_price > opening_price) document.querySelector(".manaCurPrice").style.color = red;
        if (closing_price < opening_price) document.querySelector(".manaCurPrice").style.color = blue;
        if (percent > 0) document.querySelector(".manaFluc").style.color = red;
        if (percent < 0) document.querySelector(".manaFluc").style.color = blue;
    });

//trx 시세
fetch("https://crix-api-endpoint.upbit.com/v1/crix/candles/days/?code=CRIX.UPBIT.KRW-trx").then((response) => response.json())
    .then((data) => {
        let opening_price;
        let closing_price;
        let coin = data[0];

        opening_price = coin.openingPrice;
        closing_price = coin.tradePrice;
        percent = ((closing_price - opening_price) / opening_price) * 100;
        dp_opening_price = opening_price.toLocaleString();
        dp_closing_price = closing_price.toLocaleString();
        document.querySelector(".trxPrvPrice").innerHTML = dp_opening_price;
        document.querySelector(".trxCurPrice").innerHTML = dp_closing_price;
        document.querySelector(".trxFluc").innerHTML = percent.toFixed(2);
        if (closing_price > opening_price) document.querySelector(".trxCurPrice").style.color = red;
        if (closing_price < opening_price) document.querySelector(".trxCurPrice").style.color = blue;
        if (percent > 0) document.querySelector(".trxFluc").style.color = red;
        if (percent < 0) document.querySelector(".trxFluc").style.color = blue;
    });

//sand 시세
fetch("https://crix-api-endpoint.upbit.com/v1/crix/candles/days/?code=CRIX.UPBIT.KRW-sand").then((response) => response.json())
    .then((data) => {
        let opening_price;
        let closing_price;
        let coin = data[0];

        opening_price = coin.openingPrice;
        closing_price = coin.tradePrice;
        percent = ((closing_price - opening_price) / opening_price) * 100;
        dp_opening_price = opening_price.toLocaleString();
        dp_closing_price = closing_price.toLocaleString();
        document.querySelector(".sandPrvPrice").innerHTML = dp_opening_price;
        document.querySelector(".sandCurPrice").innerHTML = dp_closing_price;
        document.querySelector(".sandFluc").innerHTML = percent.toFixed(2);
        if (closing_price > opening_price) document.querySelector(".sandCurPrice").style.color = red;
        if (closing_price < opening_price) document.querySelector(".sandCurPrice").style.color = blue;
        if (percent > 0) document.querySelector(".sandFluc").style.color = red;
        if (percent < 0) document.querySelector(".sandFluc").style.color = blue;
    });

//etc 시세
fetch("https://crix-api-endpoint.upbit.com/v1/crix/candles/days/?code=CRIX.UPBIT.KRW-etc").then((response) => response.json())
    .then((data) => {
        let opening_price;
        let closing_price;
        let coin = data[0];

        opening_price = coin.openingPrice;
        closing_price = coin.tradePrice;
        percent = ((closing_price - opening_price) / opening_price) * 100;
        dp_opening_price = opening_price.toLocaleString();
        dp_closing_price = closing_price.toLocaleString();
        document.querySelector(".etcPrvPrice").innerHTML = dp_opening_price;
        document.querySelector(".etcCurPrice").innerHTML = dp_closing_price;
        document.querySelector(".etcFluc").innerHTML = percent.toFixed(2);
        if (closing_price > opening_price) document.querySelector(".etcCurPrice").style.color = red;
        if (closing_price < opening_price) document.querySelector(".etcCurPrice").style.color = blue;
        if (percent > 0) document.querySelector(".etcFluc").style.color = red;
        if (percent < 0) document.querySelector(".etcFluc").style.color = blue;
    });

//환율

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

//Tqqq
//https://asp.zeroin.co.kr/module/json_master.php?exid=22&symbol=TQQQ&periodCode=0

fetch("https://quote.cnbc.com/quote-html-webservice/restQuote/symbolType/symbol?symbols=TQQQ&requestMethod=itv&noform=1&partnerId=2&fund=1&exthrs=1&output=json&events=1").then((res) => res.json()).then((data) => {
    let stock = data.FormattedQuoteResult.FormattedQuote[0];
    console.log(stock);
    let price = stock.last;
    let chanRate = stock.change_pct;

    document.querySelector(".nowTQ").innerHTML = price;
    document.querySelector(".chanTQ").innerHTML = chanRate;
});

fetch("https://quote.cnbc.com/quote-html-webservice/restQuote/symbolType/symbol?symbols=QQQ&requestMethod=itv&noform=1&partnerId=2&fund=1&exthrs=1&output=json&events=1").then((res) => res.json()).then((data) => {
    let stock = data.FormattedQuoteResult.FormattedQuote[0];
    console.log(stock);
    let price = stock.last;
    let chanRate = stock.change_pct;

    document.querySelector(".nowQ").innerHTML = price;
    document.querySelector(".chanQ").innerHTML = chanRate;
});

fetch("https://quote.cnbc.com/quote-html-webservice/restQuote/symbolType/symbol?symbols=SQQQ&requestMethod=itv&noform=1&partnerId=2&fund=1&exthrs=1&output=json&events=1").then((res) => res.json()).then((data) => {
    let stock = data.FormattedQuoteResult.FormattedQuote[0];
    console.log(stock);
    let price = stock.last;
    let chanRate = stock.change_pct;

    document.querySelector(".nowSQ").innerHTML = price;
    document.querySelector(".chanSQ").innerHTML = chanRate;
});

fetch("https://quote.cnbc.com/quote-html-webservice/restQuote/symbolType/symbol?symbols=SPY&requestMethod=itv&noform=1&partnerId=2&fund=1&exthrs=1&output=json&events=1").then((res) => res.json()).then((data) => {
    let stock = data.FormattedQuoteResult.FormattedQuote[0];
    console.log(stock);
    let price = stock.last;
    let chanRate = stock.change_pct;

    document.querySelector(".nowSPY").innerHTML = price;
    document.querySelector(".chanSPY").innerHTML = chanRate;
});