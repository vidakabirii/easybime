<template>
  <div class="home">
    <v-container>
      <v-card class="wrapper">
        <v-row>
          <v-col class="title">
            <img src="../assets/icons/plan-market-icon.svg" />
            <p>
              طرح های بیمه
            </p>
          </v-col>
        </v-row>
        <v-row class="sort">
          <v-col cols="1" class="icon">
            <v-icon>mdi-chart-timeline</v-icon>
          </v-col>
          <v-col cols="2"><p>مرتب سازی بر اساس:</p></v-col>
          <v-col cols="1"><p>جدیدترین</p></v-col>
          <v-col cols="1"><p>ارزان ترین</p></v-col>
          <v-col cols="1"><p>گران ترین</p></v-col>
          <v-col cols="1"><p>بیشترین تخفیف</p></v-col>
        </v-row>
        <collapse :selected="false" class="collapseBox">
          <v-row class="plans" slot="collapse-header">
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
            <v-col style="margin-top: 5px;">
              <button @click="shop()">
                خرید
              </button>
            </v-col>
          </v-row>
          <v-row slot="collapse-body">
            <v-col>نوع بیمه:</v-col>
            <v-col> بیمه حوادث انفرادی</v-col>
            <v-col>ارائه دهنده</v-col>
            <v-col>توضیحات و مستندات هیچ سندی برای این طرح ثبت نشده است.</v-col>
            <v-col></v-col>
          </v-row>
        </collapse>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import * as plansServices from "@/service/api/plans/plans.js";
import collapse from "vue-collapse";

export default {
  name: "Home",
  components: { collapse },
  mounted() {
    this.getPlans();
  },
  methods: {
    getPlans() {
      plansServices.get().then((res) => {
        console.log(res);
      });
    },
    shop() {
      this.$router.push({ path: `/shop` });
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  direction: rtl;
}
.container {
  margin-right: 20px;
  margin-top: 20px;
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
  border: 1px solid #ecf0f8;
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
  background-color: #ffebee;
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
  button {
    background: linear-gradient(90deg, #53bf58 0, #429946 100%);
    width: 152px;
    height: 36px;
    color: #fff;
  }
}
@media (min-width: 1264px) {
  .container {
    max-width: 1480px;
  }
}
</style>
