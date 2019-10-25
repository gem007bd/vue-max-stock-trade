import Vue from 'vue';

export const fetchData = ({commit}) => {
    Vue.http.get('https://vuejs-stock-trade-ef200.firebaseio.com/data.json')
        .then(response => response.json())
        .then(data => {
            if(data) {
                const stocks = data.stocks;
                const funds = data.funds;
                const stockPortfolio = data.stockPortfolio;

                const portfolio = {
                    stockPortfolio,
                    funds
                };
                commit('SET_STOCKS', stocks);
                commit('SET_PORTFOLIO', portfolio);
            }
        })
}