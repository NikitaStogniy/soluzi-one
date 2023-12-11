<template>
  <button
    class="ui-button"
    :class="{
      [`ui-button--view-${view}`]: view,
      [`ui-button--size-${size}`]: size,
      ['ui-button--disabled']: isDisabled,
      ['ui-button--expanded']: isExpanded,
    }"
    :disabled="isDisabled"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
enum UiButtonView {
  default = 'default',
  extra = 'extra'
}

enum UiButtonSize {
  large = 'large',
  small = 'small'
}

interface Props {
  view?: string
  size?: string
  isDisabled?: boolean
  isExpanded?: boolean
}

withDefaults(defineProps<Props>(), {
  view: UiButtonView.default,
  size: UiButtonSize.large,
  isDisabled: false,
  isExpanded: false,
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers';

.ui-button {
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  cursor: pointer;
  width: fit-content;
  transition: all 0.35s ease-in-out;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  gap: 8px;
  white-space: nowrap;

  &--view {
    &-default {
      background-color: $color-red-primary;
      color: $color-white;

      &:hover {
        background-color: $color-red-light;
      }

      &:focus, &:active {
        background-color: $color-red-dark;
      }
    }

    &-extra {
      border: 2px solid $color-red-primary;
      background-color: $color-white;

      &:hover {
        background-color: $color-red-primary;
        color: $color-white;
      }

      &:focus, &:active {
        border-color: $color-red-dark;
        background-color: $color-red-dark;
      }
    }
  }

  &--size {
    &-large {
      @include fontInter20Medium;

      border-radius: 14px;
      padding: 12px 24px;
      font-size: rem(16);
      line-height: 150%;

      @include media-breakpoint-up(md) {
        border-radius: 16px;
        padding: 14px 24px;
        font-size: rem(20);
      }
    }

    &-small {
      @include fontInter16Medium;

      border-radius: 14px;
      padding: 12px 24px;
      font-size: rem(16);
      line-height: 150%;
    }
  }

  &--disabled {
    background-color: $color-white-text-03;
    cursor: initial;

    &:hover {
      background-color: $color-white-text-03;
    }

    &:focus, &:active {
      background-color: $color-white-text-03;
    }
  }

  &--expanded {
    width: 100%;
  }
}
</style>
