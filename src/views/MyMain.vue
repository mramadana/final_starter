<template>
  <h1>my index page</h1>

  <button @click="routerFun">go to profile</button>

  <div>
    <p>view my data</p>

    <h5>{{ $t("welcome") }}</h5>


    <provideInject :myProp="ourName" />
  </div>
</template>

<script>
import axios from "axios";
import ProvideInject from "@/views/ProvideInject.vue";

export default {
  name: "MyMain",
  data() {
    return {
      newProducts: [],
      ourName: "moamed Ramadan",
      age: "28",
      // language: "en",
    };
  },

  inject: ["emitter"],

  components: {
    ProvideInject,
  },

  provide() {
    return {
      ourName: this.ourName,
      age: this.age,
      Myfunction: this.sayHi,
    };
  },

  methods: {
    sayHi() {
      console.log("hi");
    },

    routerFun() {
      this.$router.push({ path: "Profile" });
    },

    async getProducts() {
      await axios
        .get("https://course-backend.onrender.com")
        .then((response) => {
          // console.log(response.data)
          this.newProducts = response.data;
          console.log(response.data, "data product 0000000");
        })
        .catch((error) => {
          console.log(error);
          console.log(error);
        });
    },

    toProfile(view, id, userName, age, gender) {
      this.$router.push({
        name: view,
        params: { userId: id, userName: userName },
        query: { age: age, gender: gender },
      });
    },
  },

  async mounted() {
    console.log(this.$router.options.routes, "all route");
    console.log(this.$router.hasRoute("Profile"));
    console.log(this.$route);
    await this.getProducts();
  },

  mounted() {
    this.emitter.on("globalEvent", () => {
      console.log("golabal event");
    });
  },
};
</script>

<style scoped>
.mydata {
  width: 550px;
  margin: 0 auto;
  padding: 10px;
  background: #ddd;
  border-radius: 5px;
  margin-bottom: 15px;
}
</style>
