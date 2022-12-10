<template>
  <div class="main-layout">
    <app-sidebar />
    <div class="main-layout__container ">
      <app-header />
      <div class="main-layout__content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import AppHeader from './Header.vue';
import AppSidebar from './Sidebar.vue';

export default defineComponent({
  components: { AppSidebar, AppHeader },
});
</script>

<style lang="scss">
.main-layout {
  min-height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;
  background-color: $background-color;
  &__content {
    padding: 2rem;
  }
}
</style>
