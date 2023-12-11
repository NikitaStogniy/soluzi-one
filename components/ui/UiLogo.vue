<template>
  <div class="ui-logo">
    <span class="ui-logo__text">
      Soluzi
    </span>

    <span class="ui-logo__text ui-logo__text--colored">
      One
    </span>
  </div>
</template>

<script lang="ts" setup />

<style lang="scss" scoped>
@import '@/assets/scss/helpers';

.ui-logo {
  display: inline-flex;
  align-items: center;

  &__text {
    @include fontRoboto32Bold;

    color: $color-black;
    font-size: rem(22);

    @include media-breakpoint-up(md) {
      font-size: rem(32);
    }

    &--colored {
      color: $color-red-primary;
    }
  }
}
</style>
