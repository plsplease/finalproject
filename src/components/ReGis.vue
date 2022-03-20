<template>
  <body class="overflow-y-hidden">
    <div class="mx-auto container py-16 px-6">
      <div
        class="flex flex-col lg:flex-row justify-center items-center xl:space-x-44 lg:space-x-24 space-y-8 lg:space-y-0"
      >
        <div
          class="md:px-12 lg:px-0 flex flex-col justify-start items-start lg:w-2/5 xl:w-3/12"
        >
          <div>
            <p class="text-sm leading-3 text-gray-600">
              Let's get to know each other a little?
            </p>
          </div>
          <div class="xl:mt-4 mt-2">
            <p class="text-4xl font-semibold leading-9 text-gray-800">
              I ammm yourrr father !!!!!!!
            </p>
          </div>
          <div class="xl:mt-6 mt-4">
            <p class="text-base leading-6 text-gray-600">
              Let's have fun together We must be very close. Let's go hunting
              for one piece together.
            </p>
          </div>
          <form @submit.prevent="cccccc()">
            <div class="xl:mt-12 mt-6 w-full">
              <input
                class="focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 pb-1 border border-gray-600 w-full h-12 sm:w-96 md:w-full lg:w-72 px-4 text-base leading-4 text-gray-600 placeholder-gray-600"
                placeholder="Email address"
                type="email"
                name="input"
                id=""
                v-model="mail"
                required
              /><input
                class="focus:outline-none focus:ring-2 mt-3 focus:ring-gray-600 focus:ring-offset-2 pb-1 border border-gray-600 w-full h-12 sm:w-96 md:w-full lg:w-72 px-4 text-base leading-4 text-gray-600 placeholder-gray-600"
                placeholder="Password(more than six characters
.) "
                type="password"
                name="input"
                id=""
                v-model="passcode"
                required
              /><input
                class="focus:outline-none focus:ring-2 mt-3 focus:ring-gray-600 focus:ring-offset-2 pb-1 border border-gray-600 w-full h-12 sm:w-96 md:w-full lg:w-72 px-4 text-base leading-4 text-gray-600 placeholder-gray-600"
                placeholder="Name"
                type="text"
                name="input"
                required
                id=""
                v-model="nan"
              /><input
                class="focus:outline-none focus:ring-2 mt-3 focus:ring-gray-600 focus:ring-offset-2 pb-1 border border-gray-600 w-full h-12 sm:w-96 md:w-full lg:w-72 px-4 text-base leading-4 text-gray-600 placeholder-gray-600"
                placeholder="Surname"
                type="text"
                name="input"
                id=""
                required
                v-model="sur"
              />
            </div>

            <div class="xl:mt-4 mt-2 w-full">
              <button
                type="submit"
                class="hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 h-12 w-full sm:w-96 md:w-full lg:w-72 bg-gray-800 text-base font-medium leading-4 text-white"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div class="">
          <img
            class=""
            src="https://i.ibb.co/CzGcZF4/pexels-katie-e-3671083-1.png"
            alt="girl"
          />
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../plugin/index";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
export default {
  mounted() {},
  data() {
    return {
      mail: "",
      passcode: "",
      nan: "",
      sur: "",
      xxxxx: "",
    };
  },
  methods: {
    async aaaaaa() {
      // Add a new document with a generated id.
      const user = auth.currentUser;
      // Add a new document in collection "cities"
      await setDoc(doc(db, "registermember", user.uid), {
        email: this.mail,
        name: this.nan + " " + this.sur,
      });
      this.$router.replace("/");
    },
    async bbbbbb() {
      this.list = [];
      const querySnapshot = await getDocs(collection(db, "cities"));
      querySnapshot.list.forEach((doc) => {
        this.list.push(doc.data());
      });
    },
    cccccc() {
      createUserWithEmailAndPassword(auth, this.mail, this.passcode)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          this.aaaaaa();
          // ...
          this.xxxxx = user;
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          // ..
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
