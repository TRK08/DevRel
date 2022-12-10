<template>
  <div class="home-page">
    <AppInput
      v-model:value="state.value"
      :required="true"
      placeholder="Поиск"
    />
    <div class="home-page__content">
      <div class="card home-page__card">
        <h3>Card title</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          aperiam aut beatae cupiditate ex expedita fugit iusto laudantium
          necessitatibus nisi, nobis pariatur porro qui quibusdam suscipit vitae
          voluptate voluptatem voluptatum.
        </p>
      </div>
      <div class="card home-page__card">
        <h3>Card title</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          aperiam aut beatae cupiditate ex expedita fugit iusto laudantium
          necessitatibus nisi, nobis pariatur porro qui quibusdam suscipit vitae
          voluptate voluptatem voluptatum.
        </p>
      </div>
    </div>
<!--    <div class="home-page__sidebar">-->
<!--      <div class="card home-page__card">-->
<!--        <h3>Card title</h3>-->
<!--        <p>-->
<!--          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam-->
<!--          aperiam aut beatae cupiditate ex expedita fugit iusto laudantium-->
<!--          necessitatibus nisi, nobis pariatur porro qui quibusdam suscipit vitae-->
<!--          voluptate voluptatem voluptatum.-->
<!--        </p>-->
<!--        <p>-->
<!--          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam-->
<!--          aperiam aut beatae cupiditate ex expedita fugit iusto laudantium-->
<!--          necessitatibus nisi, nobis pariatur porro qui quibusdam suscipit vitae-->
<!--          voluptate voluptatem voluptatum.-->
<!--        </p>-->
<!--        <p>-->
<!--          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam-->
<!--          aperiam aut beatae cupiditate ex expedita fugit iusto laudantium-->
<!--          necessitatibus nisi, nobis pariatur porro qui quibusdam suscipit vitae-->
<!--          voluptate voluptatem voluptatum.-->
<!--        </p>-->
<!--        <p>-->
<!--          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam-->
<!--          aperiam aut beatae cupiditate ex expedita fugit iusto laudantium-->
<!--          necessitatibus nisi, nobis pariatur porro qui quibusdam suscipit vitae-->
<!--          voluptate voluptatem voluptatum.-->
<!--        </p>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script setup lang="ts">
import AppInput from '../components/UI/AppInput.vue';
import { reactive } from 'vue';

const state = reactive({
  value: '',
});
</script>

<style lang="scss">
.home-page {
  //display: grid;
  //grid-template-columns: 1fr auto;
  gap: 1rem;
  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  &__sidebar {
    max-width: 300px;
  }
}
</style>
