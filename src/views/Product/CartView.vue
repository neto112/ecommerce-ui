<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Shopping cart</h3>
      </div>
      <div
        v-for="cartItem in cartItems"
        :key="cartItem.id"
        class="row mt-2 pt-3"
      >
        <div class="col-2"></div>
        <div class="col-md-3">
          <img :src="cartItem.product.imageURL" alt="" class="w-100" />
        </div>
        <div class="col-md-5 px-3">
          <div class="card-block px-3">
            <h6 class="card-title">
              {{ cartItem.product }}
            </h6>
            <p class="mb-0 font-weight-bold" id="item-price">
              $ {{ cartItem.product.price }} per unit
            </p>
            <p class="mb-0">Quantity: {{ cartItem.quantity }}</p>
          </div>
          <div class="p-mb-0">
            Total:
            <span class="font-weight-">
              ${{ cartItem.product.price * cartItem.quantity }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      cartItems: [],
      token: null,
      totalCost: 0,
    };
  },
  props: ["baseURL"],
  methods: {
    // fetch All items in cart
    listCartItems() {
      axios
        .get(`${this.baseURL}cart/?token=${this.token}`)
        .then((res) => {
          const result = res.data;
          this.cartItems = result.cartItems;
          this.totalCost = result.totalCost;
        })
        .catch((err) => console.log("err", err));
    },
  },
  mounted() {
    this.token = localStorage.getItem("token");
    this.listCartItems();
  },
};
</script>

<style>
</style>