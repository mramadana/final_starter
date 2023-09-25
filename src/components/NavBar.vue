<template>
  <header class="main-header">
    <div class="container">
      <div class="nav-header">
        <div class="logo">
          <img src="@/assets/messi.gif" alt="" @click="emitEvent" />
        </div>
        <ul class="nav-links" :class="{ active: navLinksActive }">
          <!-- <router-link :to="{name : route.name}">{{route.meta.title}}</router-link> -->

          <!-- <li class="links" v-for="route in AllRoutes" :key="route.name">

            <router-link
              v-if="route.name == 'Profile'"
              :to="{
                name: route.name,
                params: { userId: 150, userName: 'Mohamed Ramadan' },
                query: { age: 28, gender: 'male' },
              }"
            >
              {{ route.meta.title }}
            </router-link>
            
            <router-link v-else :to="{ name: route.name }">
              {{ route.meta.title }}
            </router-link>
          </li>

          <router-link
            :to="{ name: 'About', query: { age_2: 0, gender_2: 'male' } }"
          >
            {{ $t("welcome") }}
          </router-link> -->

          <router-link :to="{ name: 'Home' }">
            {{ $t("home") }}
          </router-link>

          <router-link :to="{ name: 'About' }">
            {{ $t("about") }}
          </router-link>

          <router-link
            :to="{
              name: 'Profile',
              params: { userId: 150, userName: 'Mohamed Ramadan' },
              query: { age: 28, gender: 'male' },
            }"
          >
            {{ $t("profile") }}
          </router-link>

          <router-link :to="{ name: 'NewRouet' }">
            {{ $t("Newroute") }}
          </router-link>

          <v-list>
            <v-item>
              <v-title>
                <button class="" @click="switchLang('ar')">العربيه</button>
              </v-title>
            </v-item>

            <v-item>
              <v-title>
                <button class="" @click="switchLang('en')">English</button>
              </v-title>
            </v-item>
          </v-list>
        </ul>

        <div class="left">
          <button
            class="nav-btn"
            @click="handleClick"
            :class="{ active: navBtnActive }"
          >
            <span></span><span></span><span></span>
          </button>
        </div>

        <div
          class="nav-overlay"
          @click="handleOverlayClick"
          :class="{ show: navOverlayShow }"
        ></div>
      </div>

      <div class="testC" @click="ToggleClass" :class="{ Toggle: itemToggle }">
        <button>itemToggle</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      AllRoutes: [],
      onlyNavbar: [],
      itemToggle: false,
      navBtnActive: false,
      navLinksActive: false,
      navOverlayShow: false,
      isActive: false,
    };
  },

  inject: ["emitter"],

  methods: {
    ToggleClass() {
      this.itemToggle = !this.itemToggle;
    },

    emitEvent() {
      this.emitter.emit("globalEvent");
    },

    chageDir(dir) {
      let element = document.querySelector(".html_direction");
      element.setAttribute("lang", dir);
      if (dir == "ar") {
        console.log("dir ar");
        element.setAttribute("dir", "rtl");
      }
      if (dir == "en") {
        element.setAttribute("dir", "ltr");
      }
    },

    switchLang(newLang) {
      // this.language = newLang;
      sessionStorage.setItem("locale", newLang);

      location.reload();
    },

    handleClick() {
      this.navBtnActive = true;
      this.navLinksActive = true;
      this.navOverlayShow = true;
    },

    handleOverlayClick() {
      this.navBtnActive = false;
      this.navLinksActive = false;
      this.navOverlayShow = false;
    },
  },

  mounted() {
    this.AllRoutes = this.$router.options.routes;

    // single rout
    this.onlyNavbar = this.$router.options.routes.filter(
      (item) => item.slug == "navBar"
    );
    console.log(this.onlyNavbar);

    const sessionKey = sessionStorage.getItem("locale");
    if (sessionKey) {
      console.log("he is not null");
      this.chageDir(sessionStorage.getItem("locale"));
    }
  },

  watch: {
    // Watch for changes in the route
    $route(to, from) {
      // Handle the event here
      console.log("Route changed:", to, from);
      this.handleOverlayClick();
    },
  },
};
</script>
