<template>
<div id="home">
  <div id="background-div" class="page-holder bg-cover">
    <div class="container">
      <h3 class="mb-4 rounded" id="heading">Start shopping</h3>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: "HomeView",
  components: {},
};
</script>

<style>
.page-holder {
  min-height: 100vh;
}
.bg-cover{
  background-size: cover !important;
}
#background-div {
  background: url(https://simplecoding-ecommerce.netlify.app/img/home.af78af94.png)
}
#heading {
  font-weight: 100;
}
</style>
