<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center pt-3"></div>
    </div>
    <div class="row">
      <div class="col-12 text-center pt-3">
        <div id="signup-div" class="flex-item-border">
          <h2 class="pt-4 pl-4"></h2>
          <form @submit="signup" class="pt-4 pl-4 pr-4">
            <div class="form-group">
              <label for="Email">Email</label>
              <input
                type="email"
                v-model="email"
                class="form-control"
                required
              />
            </div>
            <div class="form-row">
              <div class="col">
                <div class="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    v-model="firstName"
                    class="form-control"
                    required
                  />
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    v-model="lastName"
                    class="form-control"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="Password">Password</label>
              <input
                type="password"
                v-model="password"
                class="form-control"
                required
              />
            </div>
            <div class="form-group">
              <label for="Password">Confirm password</label>
              <input
                type="password"
                v-model="confirmPassword"
                class="form-control"
                required
              />
            </div>
            <button class="btn btn-primary mt-2">Create Account</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";
export default {
  props: ["baseURL"],
  methods: {
    data() {
      return {
        email: null,
        firstName: null,
        lastName: null,
        password: null,
        confirmPassword: null,
      };
    },
    async signup(e) {
      e.preventDefault();
      if (this.password === this.confirmPassword) {
        const user = {
          email: this.email,
          firstName: this.firstName,
          lastName: this.lastName,
          password: this.password,
        };
        console.log("user", user);
        await axios
          .post(`${this.baseURL}user/signup`, user)
          .then(() => {
            this.$router.replace("/");
            swal({
              text: "User signup successful, please login",
              icon: "success",
            });
          })
          .catch((err) => console.log("err", err));
      } else {
        swal({
          text: "passwords don't match",
          icon: "error",
        });
      }
    },
  },
};
</script>

<style scoped>
.btn-primary {
  background-color: #f0c14b;
  color: #000;
}
</style>