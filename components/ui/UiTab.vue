<template>
  <button
    class="ui-tab"
    :class="{ ['ui-tab--selected']: isSelected }"
    @click="selectValue"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
interface Props {
  modelValue: string
  value: string
}

const props = defineProps<Props>()
const emit = defineEmits(['update:model-value'])

const isSelected = computed(() => props.modelValue === props.value)

const selectValue = (): void => {
  emit('update:model-value', props.value)
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers';

.ui-tab {
  @include fontInter22Regular;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 10px;
  background-color: $color-white;
  border: 2px solid transparent;
  color: $color-black;
  height: 34px;
  white-space: nowrap;
  font-size: rem(15);

  @include media-breakpoint-up(md) {
    padding: 10px 22px;
    height: 48px;
    border: 3px solid transparent;
    border-radius: 12px;
    font-size: rem(22);
  }

  &--selected {
    font-weight: 500;
    border-color: $color-red-primary;
  }
}
</style>
