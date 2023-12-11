<template>
  <div class="development-card">
    <component :is="card.icon" />

    <div class="development-card__content">
      <h6 class="development-card__title">
        {{ $t(card.title) }}
      </h6>

      <p class="development-card__text">
        {{ $t(card.text) }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { DevelopmentCardParams } from '~/shared/constants'

interface Props {
  card: DevelopmentCardParams
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers';

.development-card {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  border-radius: 20px;
  border: 1px solid #EBEBEB;
  background-color: $color-white;
  padding: 16px 13px 20px 16px;
  height: 100%;

  @include media-breakpoint-up(md) {
    row-gap: 32px;
    padding: 28px 20px 32px 28px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    row-gap: 14px;

    @include media-breakpoint-up(md) {
      row-gap: 32px;
    }
  }

  &__title {
    @include fontInter24Bold;

    color: $color-black;
    font-size: rem(16);

    @include media-breakpoint-up(md) {
      font-size: rem(24);
    }
  }

  &__text {
    @include fontInter20Regular;

    color: $color-grey-text-01;
    font-size: rem(14);

    @include media-breakpoint-up(md) {
      font-size: rem(20);
    }
  }
}
</style>
