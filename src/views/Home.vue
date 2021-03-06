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
          <v-col cols="2"><p>بیشترین تخفیف</p></v-col>
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
@import "../assets/css/general.scss";

.home {
  direction: rtl;
}

</style>
