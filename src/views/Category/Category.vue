<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Our Categories</h3>
        <router-link :to="{ name: 'AddCategory' }">
          <button class="btn" style="float: center">Add Category</button>
        </router-link>
      </div>
    </div>
    <div class="row">
      <div
        v-for="category of categories"
        :key="category.id"
        class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex"
      >
        <CategoryBox :category="category"> </CategoryBox>
      </div>
    </div>
  </div>
</template>
<script>
import CategoryBox from "../../components/Category/CategoryBox.vue";
export default {
  // eslint-disable-next-line
  name: "Category",
  props: ["categories"],
  components: { CategoryBox },
  data() {
    return {
      baseURL: "https://limitless-lake-55070.herokuapp.com",
      // "https://limitless-lake-55070.herokuapp.com/swagger-ui.html"
    };
  },
  methods: {},
  mounted() {},
};
</script>
<style scoped></style>