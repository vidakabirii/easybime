<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view />
  </div>
</template>

<style lang="scss" >
@import "./assets/css/remove_default.css";

@font-face {
  font-family: "iraniansans";
  src: url("~@/assets/fonts/iraniansans-webfont.woff") format("truetype");
}

#app {
  font-family: "iraniansans";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
