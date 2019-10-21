<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <router-link class="nav-item nav-link" activeClass="active" tag="li" to='/'>Home</router-link>
      <router-link class="nav-item nav-link"  activeClass="active" tag="li" to='/portfolio'>Portfolio</router-link>
      <router-link class="nav-item nav-link"  activeClass="active" tag="li" to='/stocks'>Stocks</router-link>
      <router-link class="nav-item nav-link"  activeClass="active" tag="li" to='/end-day'>End Day</router-link>
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
    </div>

  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style scoped>
li {
    cursor: pointer !important;
}
</style>>
