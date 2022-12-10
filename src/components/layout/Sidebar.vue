<template>
  <div class="sidebar">
    <!--    <Icon icon="eva:alert-triangle-fill" :width="64" />-->
    <h2>DevRel</h2>
    <nav class="sidebar__nav">
      <ul class="sidebar__nav-list">
        <router-link to="/" custom v-slot="{ isActive, navigate }">
          <li
            class="sidebar__nav-item"
            :class="{ 'sidebar__nav-item--active' :isActive }"
            @click="navigate"
          >
            Главная страница
          </li>
        </router-link>
        <router-link to="/1" custom v-slot="{ isActive, navigate }">
          <li
            class="sidebar__nav-item"
            :class="{ 'sidebar__nav-item--active' :isActive }"
            @click="navigate"
          >
            Страница 2
          </li>
        </router-link>
        <router-link to="/2" custom v-slot="{ isActive, navigate }">
          <li
            class="sidebar__nav-item"
            :class="{ 'sidebar__nav-item--active' : isActive }"
            @click="navigate"
          >
            Страница 3
          </li>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>

<style lang="scss">
.sidebar {
  padding: 3rem 0;
  width: 300px;
  background-color: $white;
  overflow: hidden;
  -webkit-box-shadow: 0px 0px 20px -5px rgba(86, 86, 86, 0.2);
  -moz-box-shadow: 0px 0px 20px -5px rgba(86, 86, 86, 0.2);
  box-shadow: 0px 0px 20px -5px rgba(86, 86, 86, 0.2);
  h2 {
    padding: 0 0 0 50px;
    margin-bottom: 50px;
  }
  &__nav {
    &-item {
      padding: 1.5rem 3rem;
      position: relative;
      cursor: pointer;
      &:not(:last-child) {
        margin-bottom: .5rem;
      }
      &:hover, &--active {
        background-color: rgba($blue, 0.2);
        &:after {
          content: '';
          display: block;
          width: 4px;
          height: 30px;
          border-radius: 2rem;
          background-color: $blue;
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
}
</style>
