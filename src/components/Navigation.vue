<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" :to="{ name: 'home' }">
        <img src="@/assets/logo.svg" alt="logo" />
      </router-link>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        :class="{ 'is-active': isNavbarOpen }"
        @click="toggleNavbar"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbar" class="navbar-menu" :class="{ 'is-active': isNavbarOpen }">
      <div class="navbar-end has-text-centered">
        <router-link class="navbar-item" :to="{ name: 'home' }">About me</router-link>

        <router-link class="navbar-item" :to="{ name: 'home' }">Portfolio</router-link>

        <router-link class="navbar-item" :to="{ name: 'home' }">Services</router-link>

        <router-link class="navbar-item" :to="{ name: 'home' }">Tools</router-link>

        <router-link class="navbar-item" :to="{ name: 'home' }">Resources</router-link>

        <router-link class="navbar-item" :to="{ name: 'home' }">Blog</router-link>

        <div class="navbar-item">
          <div class="buttons">
            <router-link class="button is-primary m-auto" :to="{ name: 'home' }"
              >Let's work together</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'TNavigation',
  setup() {
    const isNavbarOpen = ref(false)

    const toggleNavbar = () => {
      isNavbarOpen.value = !isNavbarOpen.value
    }

    return {
      isNavbarOpen,
      toggleNavbar
    }
  }
}
</script>
