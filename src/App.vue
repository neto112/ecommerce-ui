<template>
  <div id="nav">
    <NavbarOne />
  </div>
  <router-view
    v-if="categories && products"
    :baseURL="baseURL"
    :caregories="categories"
    :products="products"
    @fetchData="fetchData"
  />
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
      products: [],
      categories: [],
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
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
