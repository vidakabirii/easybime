<template>
  <div style="direction=rtl">
    <div v-if="!isValid && required" class="invalid-feedback">
      *
    </div>
    <div class="textField-feedback">
      <v-text-field
        v-if="textType != 'number'"
        :label="label"
        v-model="model"
        v-bind:style="{ width: width + '%' }"
        :counter="counter"
        :type="textType"
      ></v-text-field>
      <v-text-field
        v-if="textType == 'number'"
        :label="label"
        v-model="model"
        v-bind:style="{ width: width + '%' }"
        :counter="counter"
        :type="textType"
        :min="min"
      ></v-text-field>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isValid: true,
    };
  },
  props: {
    min: {
      type: Number,
      default: 0,
    },
    textType: {
      type: String,
      default: "",
    },
    counter: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 100,
    },
    value: {
      type: String,
      default: "",
    },
    v: {
      type: String,
      //change it from true to false
      required: false,
    },
    label: {
      type: String,
      default: "",
    },
    isSubmitted: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.isValid = !this.required;
  },
  watch: {
    model: function() {
      if (this.required == true && this.model.length > 0) this.isValid = true;
      else this.isValid = false;
    },
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>

<style lang="scss">
.v-input .v-label {
  left: auto !important;
}
.invalid-feedback {
  display: inline-block;
  color: red;
  margin-left: 1vh;
}
.textField-feedback {
  display: inline-block;
  width: 96%;
}
</style>
