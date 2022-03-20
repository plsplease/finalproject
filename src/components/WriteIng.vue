<template>
  <!-- component -->
  <div class="w-full bg-gray-800 h-screen">
    <div class="bg-gradient-to-b from-red-300 to-blue-600 h-96"></div>
    <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
      <div class="bg-gray-900 w-full shadow rounded p-8 sm:p-12 -mt-72">
        <p class="text-3xl font-bold leading-7 text-center text-white">
          Write something ?
        </p>
        <form @submit.prevent="papa()">
          <div class="md:flex items-center mt-12">
            <div class="w-full md:w-1/2 flex flex-col">
              <label class="font-semibold leading-none text-gray-300"
                >Topic</label
              >
              <input
                type="text"
                v-model="Name"
                required
                class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
              />
            </div>
            <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label class="font-semibold leading-none text-gray-300"
                >Title</label
              >
              <input
                type="text"
                v-model="Title"
                class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
              />
            </div>
          </div>
          <div class="md:flex items-center mt-8">
            <div class="w-full flex flex-col">
              <label class="font-semibold leading-none text-gray-300"
                >Description</label
              >
              <input
                type="text"
                v-model="des"
                class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
              />
            </div>
          </div>
          <div>
            <div class="w-full flex flex-col mt-8">
              <label class="font-semibold leading-none text-gray-300"
                >Message</label
              >
              <textarea
                type="text"
                v-model="Message"
                required
                class="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-800 border-0 rounded"
              ></textarea>
            </div>
          </div>
          <div class="flex items-center justify-center w-full">
            <button
              type="submit"
              class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, addDoc } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "../plugin/index";
export default {
  mounted() {},
  data() {
    return {
      Name: "",
      Title: "",
      des: "",
      Message: "",
      xxxx: "",
    };
  },
  methods: {
    async papa() {
      const user = auth.currentUser;
      const docRef1 = doc(db, "registermember", user.uid);
      const docSnap = await getDoc(docRef1);

      if (docSnap.exists()) {
        this.xxxx = docSnap.data().name;
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
      // Add a new document with a generated id.
      await addDoc(collection(db, "Datapost"), {
        name: this.Name,
        title: this.Title,
        des: this.des,
        mes: this.Message,
        uid: user.uid,
        mailname: docSnap.data().name,
      });

      this.$router.replace("/");
    },
  },
};
</script>

<style></style>
