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
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" 
          href="#" 
          id="navbarDropdownMenuLink" 
          role="button" 
          data-toggle="dropdown" 
          aria-haspopup="true" 
          aria-expanded="false">
          Save & Load
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Save Data</a>
          <a class="dropdown-item" href="#">Load Data</a>
        </div>
      </li>
      <strong class="navbar-text nav-right">Funds: {{funds | currency}}</strong>
    </div>
  </div>
</nav> 


</template>

<script>
import { mapActions } from 'vuex'
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions([
      'randomizeStocks'
    ]),
    endDay() {
      this.randomizeStocks();
    }
  }
}
</script>

<style scoped>
li {
    cursor: pointer !important;
}
</style>>
