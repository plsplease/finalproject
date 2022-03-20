<template>
  <div class="overflow-x-hidden bg-gray-100">
    <div class="flex flex-col h-screen justify-between">
      <main class="px-6 py-8">
        <div class="container flex justify-between mx-auto">
          <div class="w-full">
            <div class="flex items-center justify-between">
              <h1 class="text-xl font-bold text-gray-700 md:text-2xl">Post</h1>
            </div>
            <div class="mt-6" v-for="(item, index) in box" :key="index">
              <div
                class="max-w-6xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md"
              >
                <div class="flex items-center justify-between">
                  <span class="font-light text-gray-600">{{ item.name }}</span>
                </div>

                <div class="mt-2">
                  <a
                    href="#"
                    class="text-2xl font-bold text-gray-700 hover:underline"
                    >{{ item.title }}</a
                  >

                  <p class="mt-2 text-gray-600">
                    {{ item.mes }}
                  </p>
                </div>
                <div class="flex items-center justify-between mt-4">
                  <a
                    href="#"
                    class="text-red-300 hover:underline"
                    v-if="uid == 'kBREftBkiMQJl4gMzpeN253za7g2'"
                    @click="eeee(index)"
                    >Del</a
                  >
                  <div>
                    <a href="#" class="flex items-center"
                      ><img
                        :src="img[aaa()].img"
                        alt="avatar"
                        class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                      />
                      <h1 class="font-bold text-gray-700 hover:underline">
                        {{ item.mailname }}
                      </h1>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-8"></div>
          </div>
        </div>
      </main>
      <footer class="px-6 py-2 text-gray-100 bg-gray-800">
        <div
          class="container flex flex-col items-center justify-between mx-auto md:flex-row"
        >
          <a href="#" class="text-2xl font-bold">Stay togather 🖤🤍</a>
          <p class="mt-2 md:mt-0">Nice to meet your.</p>
          <div class="flex mt-4 mb-2 -mx-2 md:mt-0 md:mb-0">
            <a href="#" class="mx-2 text-gray-100 hover:text-gray-400"
              ><svg viewBox="0 0 512 512" class="w-4 h-4 fill-current">
                <path
                  d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"
                ></path></svg></a
            ><a href="#" class="mx-2 text-gray-100 hover:text-gray-400"
              ><svg viewBox="0 0 512 512" class="w-4 h-4 fill-current">
                <path
                  d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"
                ></path></svg></a
            ><a href="#" class="mx-2 text-gray-100 hover:text-gray-400"
              ><svg viewBox="0 0 512 512" class="w-4 h-4 fill-current">
                <path
                  d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"
                ></path></svg
            ></a>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import { collection, query, onSnapshot } from "firebase/firestore";
import { db, auth } from "../plugin/index";
import { doc } from "firebase/firestore";
import { deleteDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
export default {
  mounted() {
    this.dddd();
    this.chackLogin();
  },
  data() {
    return {
      box: [],
      xxx: "",
      uid: "",
      idbox: [],
      img: [
        {
          img: "https://scontent.fbkk8-4.fna.fbcdn.net/v/t39.30808-6/276159926_517989286357009_1073036826107118765_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFkkESu6Re_1KQPx0ru74Y_C02UdkyftrMLTZR2TJ-2s7zCfkrZ0Vc634Ihu-tSRLM6NtttmO8lPRNCgESX-oYJ&_nc_ohc=WaAiMJReL8YAX_OG-8m&_nc_ht=scontent.fbkk8-4.fna&oh=00_AT89uUpYK4p2RFRMQqKJ8ovt69b-YbL7txJ3zFYixYctpw&oe=623A838C",
        },
        {
          img: "https://scontent.fbkk9-3.fna.fbcdn.net/v/t39.30808-6/276315150_518456989643572_3722808749482509060_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEg5XdnjTN63fxhQbq1xu6VYEf3ou0F9ydgR_ei7QX3J1DCpZajUaBCzNHnuf2U-qC_w8pzvUzFpi6bPfBSuDGg&_nc_ohc=G267aPIBylsAX9Shuhz&_nc_ht=scontent.fbkk9-3.fna&oh=00_AT9NqiSOFvZ_uaqq0tVNbK6Ms0XKGe97EK4xZNNlj1Cdlw&oe=623AEA0F",
        },
        {
          img: "https://image.bangkokbiznews.com/image/kt/media/image/news/2016/10/13/722830/640x390_722830_1476374679.jpg?x-image-process=style%2FLG&fbclid=IwAR14Ao8eHoVSkG2mtzSgHrR_nudME2jk3tBlWFAQOxUUGgpUoRXJcXcKVuM",
        },
        {
          img: "https://scontent.fbkk8-4.fna.fbcdn.net/v/t39.30808-6/275775084_516898249799446_375068224548129215_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHS_rc11VaChr-LLQQIcpLvfJndjo3gOVV8md2OjeA5Vefmw2SWty8lk5PFou3XZIDq7CbX8ipCRQxx5zJYn9ad&_nc_ohc=5Sfkm9V2HfEAX8tITI1&_nc_ht=scontent.fbkk8-4.fna&oh=00_AT_lomwbL_zE3RTuX32VCbBX5wwRoLAxwoGKHsu6GF1qsg&oe=623B1D30",
        },
        {
          img: "https://scontent.fbkk13-2.fna.fbcdn.net/v/t39.30808-6/275882912_516612629828008_5316856347417820321_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHHHWw1Y_XWEOkOI6n-pmzZwgtAFMTvaKvCC0AUxO9oq2OkGfQNjgx75fP_ouH_AiFX30vprQAQpK9AKIkGhXdh&_nc_ohc=pNNOkgLUqfcAX_5tESG&_nc_ht=scontent.fbkk13-2.fna&oh=00_AT99ZrFyPwsGnSN6EWgtMAfLdgxLu_X7oTOMyTKTZ3WoxQ&oe=623B6BC5",
        },
        {
          img: "https://scontent.fbkk9-2.fna.fbcdn.net/v/t39.30808-6/275683412_514968123325792_6081632517481372331_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeEtJ6AjooxL3xRxRUrviy3HtwQjuHZ6EGG3BCO4dnoQYYWZLKaadIhNs-irdP9ExpFyONiqGeZRxXHI9aEcWUrz&_nc_ohc=01wCsfZld5oAX-5r0CR&tn=gqjCRxlL8VJQeHi1&_nc_ht=scontent.fbkk9-2.fna&oh=00_AT__M13s5pJWtWTuCHAl1k-qw-NXClrDKX2wtLkmkN5amw&oe=623B5728",
        },
        {
          img: "https://cdn-local.mebmarket.com/meb/server1/126324/Thumbnail/book_detail_large.gif?2",
        },
        {
          img: "https://scontent.fbkk13-2.fna.fbcdn.net/v/t39.30808-6/275622000_512317350257536_1876184103698263987_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeFgoFpwEnsyUnA2Q2EQRd8kwUq_4GKtPbbBSr_gYq09tiNFgquXDIFZZtsbsNJecP9e_x46nPq2qVN3WDCfY25E&_nc_ohc=ubZ_CUH81oIAX_wR8Fj&_nc_oc=AQkmPemYl5qcLXg5rzdx5IkHJsHyWbEuLsGWuaSOm7kqy_1k87XKNH8F9bwBU4EqaWg&_nc_ht=scontent.fbkk13-2.fna&oh=00_AT862D1o5sdLvmFTBniOIu22RKCuVVn3CcY4r6fEI4WTiw&oe=623C7C99",
        },
        {
          img: "https://scontent.fbkk8-4.fna.fbcdn.net/v/t39.30808-6/275395661_511812153641389_4507866034313420730_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFhJnd6tXR4lolSo9RROOxv46ndBL6eYl3jqd0Evp5iXSoU0JNS-yFxVhnvNn-SWdwIEvcV3ppE2o3aRYUsDdwZ&_nc_ohc=JDYttuuPPgUAX9i-0ps&_nc_ht=scontent.fbkk8-4.fna&oh=00_AT-NWhHGndxJCdB7gAh5u0QKxeCDW_owd0h640zXK66uow&oe=623B0E90",
        },
        {
          img: "https://scontent.fbkk9-3.fna.fbcdn.net/v/t39.30808-6/275422205_511205247035413_88909486825305979_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFnPN8Ut8cPqPN_0KeFEKLeVEHPBjPH1UFUQc8GM8fVQZ32AoNhNGX9N7iHpcXSZ1wJWT59AcAGeUyzw1KSfzsP&_nc_ohc=kw5Dfw1SUgcAX94drTd&_nc_ht=scontent.fbkk9-3.fna&oh=00_AT-DlhAuNbKd3EnJQWdQJ51KWoB8tqP7Qdvc5xXPdrLDwQ&oe=623BBB75",
        },
        {
          img: "https://scontent.fbkk12-4.fna.fbcdn.net/v/t39.30808-6/275287162_510732850415986_537900320765646396_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGPm65rBSvcJBlIigrbm_Q7_Wu9Jki_7Cj9a70mSL_sKFKcFsHrfd1LyrSDs6azZy2MHb31tNFHfooQvSU20ZSA&_nc_ohc=OxuZOYb3lzIAX8YG4cD&_nc_ht=scontent.fbkk12-4.fna&oh=00_AT9B_o99Gao_bfpZCZGDH_tuWcS6azJM2DViCXsABSFYew&oe=623C8035",
        },
        {
          img: "https://scontent.fbkk12-1.fna.fbcdn.net/v/t39.30808-6/275387120_510680570421214_8340816374684488418_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeE3R7PrsHWEef8Pnm24J2bBwET7XR-9djLARPtdH712Mvce2fXYBH-e99-Oe9IrVyvJAWusi70Bksqg-lXqP4VB&_nc_ohc=vv7Kn6uUPnQAX_ZI5B6&_nc_ht=scontent.fbkk12-1.fna&oh=00_AT9_hI0e0ez5qO7GMmkEjmb25WjaEE8uxHRcHtPz23S_1Q&oe=623BC8D9",
        },
        {
          img: "https://scontent.fbkk9-3.fna.fbcdn.net/v/t39.30808-6/275279966_510153063807298_3164590571083455974_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEGFLODwvWYHl649NZoTFJx9WnN-e1jYcv1ac357WNhy8jjJtRsNWSKk7Z1q65U471hRGRpwHE3nO9sXhq3knhi&_nc_ohc=W4NkqqRhW4gAX8NGl1z&tn=gqjCRxlL8VJQeHi1&_nc_ht=scontent.fbkk9-3.fna&oh=00_AT_r1oQ8mHoN8DfVL7pJXOiMRJreqXnmK4B4zMwI8lFYCg&oe=623BAC06",
        },
        {
          img: "https://scontent.fbkk12-2.fna.fbcdn.net/v/t39.30808-6/275237052_509903460498925_1159319483007632550_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEtZSkaGwgMVnd2gmZR6G78Aoh4BmXhyLMCiHgGZeHIs_fzhzqN236ivUs_zkh8Yk0yErm--JNelujH7utNgbPb&_nc_ohc=wi0EgCx96KQAX-qcUpF&tn=gqjCRxlL8VJQeHi1&_nc_ht=scontent.fbkk12-2.fna&oh=00_AT9tzkR418KH1O4U2kziUqpgsIZN3PtpROLBqdrrPX0JFg&oe=623C70D6",
        },
        {
          img: "https://scontent.fbkk12-3.fna.fbcdn.net/v/t39.30808-6/275158217_509544430534828_6844271013358053512_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHLfcJClHRVuPhVSQdnwTEJUYNXbhBjs_BRg1duEGOz8PIgvd6khtkXqZK_ZiMaSdUbQYYszjhfXcBcb76lmMfm&_nc_ohc=LA1_BoDaAW4AX9S4my6&_nc_ht=scontent.fbkk12-3.fna&oh=00_AT8Eoi8RTBj0nkbewgLEilkaashu3oQz3kAnO5tzHtgvTA&oe=623C8BFB",
        },
      ],
    };
  },
  methods: {
    dddd() {
      const q = query(collection(db, "Datapost"));
      onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.box.push(doc.data());
          this.idbox.push(doc.id);
        });
      });
    },
    aaa() {
      return Math.floor(Math.random() * (this.img.length - 1 - 1 + 1)) + 1;
    },
    async eeee(i) {
      await deleteDoc(doc(db, "Datapost", this.idbox[i]));
      this.box = [];
      this.idbox = [];
      this.dddd();
    },
    chackLogin() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          this.uid = uid;
        } else {
          this.login = true;
        }
      });
    },
  },
};
</script>

<style></style>
