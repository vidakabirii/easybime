<template>
  <v-container>
    <v-card class="wrapper">
      <v-row class="plans">
        <v-col>
          عنوان طرح
        </v-col>
        <v-col cols="3">
          بیمه حوادث انفرادی بیمه البرز طرح 3 (صدور آنلاین)
        </v-col>
        <v-col>
          قیمت:
        </v-col>
        <v-col>
          600,000 ریال
        </v-col>
        <v-col>
          <img src="../assets/img/636764137666861998.png" />
        </v-col>
        <v-col> مشاهده جزییات</v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  margin-right: 20px;
  margin-top: 20px;
  direction: rtl;
}
.wrapper {
  padding: 20px;
}
.title {
  text-align: right;
  p {
    display: inline-block;
    font-size: 24px;
  }
  img {
    width: 20px;
    display: inline-block;
    align-self: center;
    margin-left: 10px;
  }
}
.sort {
  font-size: 16px;
  color: #212121;
}
.icon {
  margin-right: -40px;
  margin-left: -100px;
}
.collapseBox {
  margin-top: 3%;
  cursor: pointer;
}
.plans {
  div {
    font-size: 14px;
    color: #212121;
    margin-top: 10px;
    &:nth-child(1),
    &:nth-child(3) {
      color: #757575;
    }
  }
  img {
    width: 32px;
    height: 32px;
  }
}
@media (min-width: 1264px) {
  .container {
    max-width: 1480px;
  }
}
</style>
