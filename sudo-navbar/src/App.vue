<template>
  <nav class="navbar">

      <router-link
              to="/clients"
              class="nav-link"
              :class="{'active-nav-link': $route.path === '/clients'}"
      >
          <UilUsersAlt />
      </router-link>

      <router-link
              to="/business"
              class="nav-link"
              :class="{'active-nav-link': $route.path === '/business'}"
      >
          <UilSuitcaseAlt />
      </router-link>
  </nav>
</template>

<script>
import { UilUsersAlt, UilSuitcaseAlt } from '@iconscout/vue-unicons'

export default {
  name: 'App',
    components: {
        UilUsersAlt,
        UilSuitcaseAlt
    }
}
</script>

<style>
  .navbar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #eff0f4;
    height: 100vh;
    border-right: 0.0625rem solid #dadbe7;
  }

  .navbar a {
      display: flex;
      margin: 0 auto 1.875rem;
      cursor: pointer;
  }

  svg {
      width: 1.25rem;
      height: 1.25rem;
      fill: #a7a9b4;
      transition: fill 0.15s ease-in-out;
  }

  svg:hover {
      fill: #306297;
  }

  .active-nav-link svg {
      fill: #306297;
  }
</style>
