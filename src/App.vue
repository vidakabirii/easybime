<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss" >
@import "./assets/css/remove_default.css";


@font-face {
  font-family: "shabnam";
  src: url("~@/assets/fonts/Shabnam-FD-WOL.eot");
  src: url("~@/assets/fonts/Shabnam-FD-WOL.ttf") format("truetype"),
    url("~@/assets/fonts/Shabnam-FD-WOL.woff") format("wof"),
    url("~@/assets/fonts/Shabnam-FD-WOL.woff2") format("wof2"),
    url("~@/assets/fonts/Shabnam-FD-WOL.eot?#iefix") format("embedded-opentype");
  font-weight: normal;
}

@font-face {
  font-family: "shabnam";
  src: url("~@/assets/fonts/Shabnam-Bold-FD-WOL.eot");
  src: url("~@/assets/fonts/Shabnam-Bold-FD-WOL.eot?#iefix")
      format("embedded-opentype"),
    url("~@/assets/fonts/Shabnam-Bold-FD-WOL.woff2") format("woff2"),
    url("~@/assets/fonts/Shabnam-Bold-FD-WOL.woff") format("woff"),
    url("~@/assets/fonts/Shabnam-Bold-FD-WOL.ttf") format("truetype");
  font-weight: bold;
}

@font-face {
  font-family: "shabnam";
  src: url("~@/assets/fonts/Shabnam-Thin-FD-WOL.eot");
  src: url("~@/assets/fonts/Shabnam-Thin-FD-WOL.eot?#iefix")
      format("embedded-opentype"),
    url("~@/assets/fonts/Shabnam-Thin-FD-WOL.woff2") format("woff2"),
    url("~@/assets/fonts/Shabnam-Thin-FD-WOL.woff") format("woff"),
    url("~@/assets/fonts/Shabnam-Thin-FD-WOL.ttf") format("truetype");
  font-weight: 100;
}

@font-face {
  font-family: "shabnam";
  src: url("~@/assets/fonts/Shabnam-Light-FD-WOL.eot");
  src: url("~@/assets/fonts/Shabnam-Light-FD-WOL.eot?#iefix")
      format("embedded-opentype"),
    url("~@/assets/fonts/Shabnam-Light-FD-WOL.woff2") format("woff2"),
    url("~@/assets/fonts/Shabnam-Light-FD-WOL.woff") format("woff"),
    url("~@/assets/fonts/Shabnam-Light-FD-WOL.ttf") format("truetype");
  font-weight: 300;
}

@font-face {
  font-family: "shabnam";
  src: url("~@/assets/fonts/Shabnam-Medium-FD-WOL.eot");
  src: url("~@/assets/fonts/Shabnam-Medium-FD-WOL.eot?#iefix")
      format("embedded-opentype"),
    url("~@/assets/fonts/Shabnam-Medium-FD-WOL.woff2") format("woff2"),
    url("~@/assets/fonts/Shabnam-Medium-FD-WOL.woff") format("woff"),
    url("~@/assets/fonts/Shabnam-Medium-FD-WOL.ttf") format("truetype");
  font-weight: 500;
}

#app {
  font-family: "shabnam";
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
