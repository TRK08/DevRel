<template>
  <button
    :class="`button button--${props.size} button--${props.color}`"
    :disabled="isDisabled"
  >
    <p>
      <slot></slot>
    </p>
  </button>
</template>

<script setup lang="ts">
// import Spinner from "@/components/UI/Spinner";

import { computed } from 'vue';

interface Props {
  size?: string;
  disabled?: boolean;
  loading?: boolean;
  color?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'm',
  disabled: false,
  loading: false,
  color: 'orange',
});

const isDisabled = computed(() => {
  return props.disabled || props.loading;
});
</script>

<style lang="scss">
.button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0;
  white-space: nowrap;
  border: none;
  overflow: hidden;
  cursor: pointer;
  border-radius: $border-radius-xl;
  color: $white;
  padding: 0 1rem;
  height: 4rem;
  &--orange {
    background-color: $orange;
    &:disabled {
      background-color: rgba($orange, 0.5);
      box-shadow: $button-shadow-size rgba($orange, .25);
      pointer-events: none;
      cursor: default;
    }
    &:hover {
      box-shadow: $button-shadow-size rgba($orange, .25);
    }
    &:focus {
      outline: none;
    }
  }
  &--blue {
    background-color: $blue;
    &:disabled {
      background-color: rgba($blue, 0.5);
      box-shadow: $button-shadow-size rgba($blue, .25);
      pointer-events: none;
      cursor: default;
    }
    &:hover {
      box-shadow: $button-shadow-size rgba($blue, .25);
    }
    &:focus {
      outline: none;
    }
  }
  &--red {
    background-color: $red;
    &:disabled {
      background-color: rgba($red, 0.5);
      box-shadow: $button-shadow-size rgba($red, .25);
      pointer-events: none;
      cursor: default;
    }
    &:hover {
      box-shadow: $button-shadow-size rgba($red, .25);
    }
    &:focus {
      outline: none;
    }
  }
  p {
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 600;
  }
}
</style>
