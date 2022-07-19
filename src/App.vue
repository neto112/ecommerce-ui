<template>
  <div id="nav">
    <NavbarOne :cartCount="cartCount" @resetCartCount="resetCartCount" />
  </div>
  <router-view
    v-if="categories && products"
    style="min-height: 60vh"
    :baseURL="baseURL"
    :categories="categories"
    :products="products"
    @fetchData="fetchData"
  >
  </router-view>
  <FooterOne />
</template>
<script>
import NavbarOne from "./components/NavbarOne.vue";
import FooterOne from "./components/FooterOne.vue";
import axios from "axios";
export default {
  components: { NavbarOne, FooterOne },
  data() {
    return {
      baseURL: "https://limitless-lake-55070.herokuapp.com/",
      products: null,
      categories: null,
      cartCount: 0,
    };
  },
  methods: {
    async fetchData() {
      await axios
        .get(this.baseURL + "category/")
        .then((res) => {
          this.categories = res.data;
        })
        .catch((err) => console.log("err", err));

      await axios
        .get(this.baseURL + "product/")
        .then((res) => {
          this.products = res.data;
        })
        .catch((err) => console.log("err", err));

      if (this.token) {
        axios
          .get(`${this.baseURL}cart/?token=${this.token}`)
          .then((res) => {
            const result = res.data;
            this.cartCount = result.cartItems.length;
          })
          .catch((err) => console.log("err", err));
      }
    },
    resetCartCount() {
      this.cartCount = 0;
    },
  },
  mounted() {
    this.token = localStorage.getItem("token");
    this.fetchData();
  },
};
</script>

<style>
html {
  overflow-y: scroll;
}
</style>
