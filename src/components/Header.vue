<template>

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Trader</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav mr-auto">
      <router-link class="nav-item nav-link" activeClass="active" tag="li" to='/'>Home</router-link>
      <router-link class="nav-item nav-link"  activeClass="active" tag="li" to='/portfolio'>Portfolio</router-link>
      <router-link class="nav-item nav-link"  activeClass="active" tag="li" to='/stocks'>Stocks</router-link>
    </div>
    
    <div class="navbar-nav">
      <li  class="nav-item nav-link"><a @click="endDay">End Day</a></li>
      <li class="nav-item dropdown show">
        <a class="nav-link dropdown-toggle" 
          id="navbarDropdownMenuLink"
          @click="isDropdownOpen = !isDropdownOpen"
          role="button" 
          data-toggle="dropdown" 
          aria-haspopup="true" 
          aria-expanded="true">
          Save & Load
        </a>
        <div class="dropdown-menu" :class="{show: isDropdownOpen}" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" @click="saveData">Save Data</a>
          <a class="dropdown-item" @click="loadData">Load Data</a>
        </div>
      </li>
      <strong class="navbar-text nav-right">Funds: {{funds | currency}}</strong>
    </div>
  </div>
</nav> 
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      isDropdownOpen: false
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions([
      'randomizeStocks',
      'fetchData'
    ]),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put('https://vuejs-stock-trade-ef200.firebaseio.com/data.json', data)
        .then(res => {
          console.log(res.body);
        })
    },
    loadData() {
      this.fetchData();
    }
  }
}
</script>

<style scoped>
li {
    cursor: pointer !important;
}
</style>>
