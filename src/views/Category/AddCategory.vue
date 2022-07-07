<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Add Category</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form>
          <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" v-model="categoryName" />
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea type="text" class="form-control" v-model="description" />
          </div>
          <div class="form-group">
            <label>ImageURL</label>
            <input type="url" class="form-control" v-model="imageURL" />
          </div>
          <button type="button" class="btn btn-primary" @click="addCategory">
            Submit
          </button>
        </form>
      </div>
      <div class="col-9"></div>
    </div>
  </div>
</template>
<script>
const axios = require("axios");
const sweetalert = require("sweetalert");
export default {
  props: ["baseURL", "categories"],
  data() {
    return {
      categoryName: null,
      description: null,
      imageURL: null,
    };
  },
  methods: {
    addCategory() {
      const newCategory = {
        categoryName: this.categoryName,
        description: this.description,
        imageUrl: this.imageUrl,
      };

      const baseURL = "https://limitless-lake-55070.herokuapp.com";

      axios({
        method: "post",
        url: `${baseURL}/category/create`,
        data: JSON.stringify(newCategory),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(() => {
          sweetalert({
            text: "Category added successfully",
            icon: "success",

          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>