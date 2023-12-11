<template>
  <input
    class="ui-input"
    type="text"
    :value="modelValue"
    @input="updateModelValue"
  >
</template>

<script lang="ts" setup>
interface Props {
  modelValue: string
}

defineProps<Props>()

const emit = defineEmits(['update:model-value'])

const updateModelValue = (event: Event): void => {
  const target = event.target as HTMLInputElement

  emit('update:model-value', target.value)
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers';

.ui-input {
  @include fontInter16Regular;

  width: 100%;
  box-sizing: border-box;
  outline: none;
  border: none;
  color: $color-grey-text-03;
  padding-bottom: 12px;
  background-color: transparent;
  font-size: rem(14);

  @include media-breakpoint-up(md) {
    padding-bottom: 16px;
    background-color: $color-white;
    font-size: rem(16);
  }

  &::placeholder {
    color: $color-grey-text-03;
  }
}
</style>
