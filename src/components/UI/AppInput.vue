<template>
  <div
    :class="[
      'input',
      {
        disabled: disabled,
        error: !state.valid,
        fixed: placeholder || value,
      },
    ]"
  >
    <input
      :id="`${state.id}input`"
      :class="'input__input'"
      v-model="inputValue"
      :placeholder="placeholder"
      :type="inputMode"
      :required="required"
      :disabled="disabled"
      :autocomplete="inputAutocomplete"
      :rules="validate"
      @keyup.enter="$emit('enter')"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, defineEmits, reactive } from 'vue';

interface IProps {
  mode?: 'text' | 'email';
  value?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
}

interface IEmits {
  (e: 'update:value', value: string): void;
}

const emits = defineEmits<IEmits>();

const props = withDefaults(defineProps<IProps>(), {
  mode: 'text',
  value: '',
  placeholder: '',
  disabled: false,
  required: false,
});

const state = reactive({
  max: 1000,
  valid: true,
  message: '',
});

const inputMode = computed((): string => {
  if (props.mode === 'email') {
    return 'email';
  } else {
    return 'text';
  }
});

const inputAutocomplete = computed((): string => {
  if (props.mode === 'email') {
    return 'email';
  } else {
    return 'off';
  }
});

const inputValue = computed({
  get: () => props.value,
  set: (newVal) => {
    emits('update:value', newVal);
  },
});

const validate = (value: string) => {
  state.valid = true;
  if (props.required && !value) {
    state.message = 'Поле обязательно для заполнения';
    state.valid = false;
    return;
  }

  switch (props.mode) {
    case 'email':
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        state.message = 'Неверный формат электронной почты';
        state.valid = false;
      }
      break;
  }
};
</script>

<style lang="scss">
.input {
  max-width: 250px;
  &__input {
    border-radius: $border-radius;
    outline: none;
    border: 2px solid transparent;
    color: $text;
    padding: 1rem;
    font-size: 1rem;
    &:disabled {
      background-color: #dcdcdc;
      pointer-events: none;
    }
  }
}
</style>
