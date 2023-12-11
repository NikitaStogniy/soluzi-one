<template>
  <div
    class="text-block"
    :class="{ [`text-block--view-${view}`]: view }"
  >
    <span class="text-block__title">
      {{ name }}
    </span>

    <span class="text-block__text">
      {{ description }}
    </span>
  </div>
</template>

<script lang="ts" setup>
enum TextBlockView {
  default = 'default',
  extra = 'extra'
}

interface Props {
  name: string
  description: string
  view?: string
}

withDefaults(defineProps<Props>(), { view: TextBlockView.default })
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers';

.text-block {
  &--view {
    &-default {
      .text-block {
        &__title {
          @include fontInter30Bold;

          color: $color-black;
          font-size: rem(16);

          @include media-breakpoint-up(md) {
            font-size: rem(30);
          }
        }

        &__text {
          @include fontInter30Regular;

          font-size: rem(16);

          @include media-breakpoint-up(md) {
            font-size: rem(30);
          }
        }
      }
    }

    &-extra {
      .text-block {
        &__title {
          @include fontInter20Bold;

          color: $color-red-primary;
          font-size: rem(18);

          @include media-breakpoint-up(md) {
            font-size: rem(20);
          }
        }

        &__text {
          @include fontInter20Regular;

          font-size: rem(18);

          @include media-breakpoint-up(md) {
            row-gap: rem(20);
          }
        }
      }
    }
  }

  &__title {
    margin-right: 7px;
  }

  &__text {
    color: $color-black;
  }
}
</style>
