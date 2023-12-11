<template>
  <div
    class="ui-switch"
    :class="{
      'ui-switch--on': modelValue,
      'ui-switch--off': !modelValue
    }"
    @click="toggleSwitch"
  >
    <div
      class="ui-switch__circle"
      :class="{
        'ui-switch__circle--left': !modelValue,
        'ui-switch__circle--right': modelValue,
      }"
    ></div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  modelValue: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['update:model-value'])

const toggleSwitch = (): void => {
  emit('update:model-value', !props.modelValue)
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers';

.ui-switch {
  min-width: 51px;
  max-width: 51px;
  height: 31px;
  border-radius: 30px;
  background-color: $color-black-primary;
  cursor: pointer;
  position: relative;

  &--off {
    transition: background-color 0.4s;
  }

  &--on {
    background-color: $color-green;
    transition: background-color 0.4s;
  }

  &__circle {
    width: 25px;
    height: 25px;
    background-color: $color-white;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    left: 3px;

    &--left {
      transition: left 0.4s;
    }

    &--right {
      top: 3px;
      left: 23px;
      transition: left 0.4s;
    }
  }
}
</style>
