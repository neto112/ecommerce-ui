<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Add New Product</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-md-6 px-5 px-md-0">
        <form>
          <div class="form-group">
            <label>Category</label>
            <select class="form-control" v-model="categoryId" required>
              <option
                v-for="category of categories"
                :key="category.id"
                :value="category.id"
              >
                {{ category.categoryName }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label>Name</label>
            <input type="text" v-model="name" class="form-control" />
          </div>
          <div class="form-group">
            <label>Description</label>
            <input type="text" v-model="description" class="form-control" />
          </div>
          <div class="form-group">
            <label>Image Url</label>
            <input type="text" v-model="imageURL" class="form-control" />
          </div>
          <div class="form-group">
            <label>Price</label>
            <input type="number" v-model="price" class="form-control" />
          </div>
          <button type="button" class="btn btn-primary" @click="addProduct">
            Add Product
          </button>
        </form>
        {{categories}}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";
export default {
  props: ["baseURL", "products", "categories"],
  data() {
    return {
      id: null,
      categoryId: null,
      name: null,
      description: null,
      imageURL: null,
      price: null,
    };
  },
  methods: {
    addProduct() {
      const newProduct = {
        categoryId: this.categoryId,
        description: this.description,
        name: this.name,
        imageURL: this.imageURL,
        price: this.price,
      };
      axios.post(this.baseURL+"product/add", newProduct).then(() => {
        this.$router.push({ name: "AdminProduct" });
        swal({
          text: "Product added",
          icon: "success",
        }).catch((err) => {
          console.log("err", err);
        });
      });
    },
  },
};
</script>

<style>
</style>