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
    <v-card class="registerWrapper">
      <v-row class="registerHeader">
        اطلاعات بیمه نامه
      </v-row>
      <v-row>
        ارائه دهنده*
      </v-row>
      <v-row class="registerHeader">
        مشخصات بیمه گذار
      </v-row>
      <v-row class="textBoxes">
        <v-col cols="4">
          <textInput
            v-model="newUser.msisdn"
            :v="newUser.msisdn"
            label="کد ملی"
            required
          />
        </v-col>
        <v-col cols="4">
          <textInput
            v-model="newUser.msisdn"
            :v="newUser.msisdn"
            label="نام"
            required
          />
        </v-col>
      </v-row>
      <v-row class="textBoxes">
        <v-col cols="4">
          <textInput
            v-model="newUser.msisdn"
            :v="newUser.msisdn"
            label="نام خانوادگی "
            required
          />
        </v-col>
        <v-col cols="4">
          <textInput
            v-model="newUser.msisdn"
            :v="newUser.msisdn"
            label="تلفن همراه"
            required
          />
        </v-col>
      </v-row>
      <v-row class="textBoxes">
        <v-col cols="4">
          <textInput
            v-model="newUser.msisdn"
            :v="newUser.msisdn"
            label=" تلفن ثابت"
            required
          />
        </v-col>
        <v-col cols="4">
          <textInput
            v-model="newUser.msisdn"
            :v="newUser.msisdn"
            label="کد پستی"
            required
          />
        </v-col>
      </v-row>
      <v-row class="textBoxes">
        <v-col cols="4">
          <textInput
            v-model="newUser.msisdn"
            :v="newUser.msisdn"
            label=" نشانی"
            required
          />
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import textInput from "@/components/textInput.vue";

export default {
  data() {
    return {
      newUser: {
        msisdn: "",
        name: "",
        family: "",
        mobile: null,
        postalCode: "",
        address: "",
      },
    };
  },
  components: {
    textInput,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/general.scss";

.container {
  direction: rtl;
}
.plans {
  background-color: white;
}
.registerWrapper {
  border-radius: 2px;
  background: #fafafa;
  border: 1px solid #bdbdbd;
  margin-top: 2%;
  padding: 20px;
  div {
    &:first-of-type {
      margin-top: 0;
    }
    margin-top: 40px;
  }
}
.textBoxes {
  div {
    margin-top: 0;
  }
}
.registerHeader {
  font-weight: 600;
  font-size: 20px;
}

@media (min-width: 1264px) {
  .container {
    max-width: 1480px;
  }
}
</style>
