<template>
  <!-- This is an example component -->
  <div class="h-screen font-sans login bg-cover">
    <div
      class="container mx-auto h-full flex flex-1 justify-center items-center"
    >
      <div class="w-full max-w-lg">
        <div class="leading-loose">
          <form
            @submit.prevent="login"
            class="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl"
          >
            <p class="text-white text-center text-lg font-bold">LOGIN</p>
            <div class="">
              <label class="block text-sm text-white" for="email">E-mail</label>
              <input
                class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                type="email"
                id="email"
                v-model="email"
                placeholder="e-mail"
                aria-label="email"
                required
              />
            </div>
            <div class="mt-2">
              <label class="block text-sm text-white">password</label>
              <input
                class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                type="password"
                id="password"
                v-model="password"
                placeholder="password"
                arial-label="password"
                required
              />
            </div>

            <div class="mt-4 items-center flex justify-between">
              <button
                class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                type="submit"
              >
                Login
              </button>
              <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?
                <router-link to="/ReGis"
                  ><a class="text-blue-700 hover:underline dark:text-blue-500"
                    >Create account</a
                  ></router-link
                >
              </div>
            </div>
            <div class="text-center">
              <a
                class="inline-block right-0 align-baseline font-light text-sm text-500 hover:text-red-400"
              >
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../plugin/index.js";
export default {
  data() {
    return {
      email: "",
      password: "",
      box: "",
    };
  },
  methods: {
    login() {
      // const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          this.box = user;

          this.$router.replace("/");
          // this.$router.replace("/");
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          console.log(error);
        });
    },
  },
};
</script>

<style>
.login {
  /*
    background: url('https://tailwindadmin.netlify.app/dist/images/login-new.jpeg');
  */
  background: url("http://bit.ly/2gPLxZ4");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
