<template>
  <div class="product-card">
    <h4 class="product-card__title">
      {{ $t(card.title) }}
    </h4>

    <TextList :texts="card.texts" />
  </div>
</template>

<script lang="ts" setup>
import TextList from '@/components/TextList.vue'

import type { ProductCardParams } from '~/shared/constants'

interface Props {
  card: ProductCardParams
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers';

.product-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid #EBEBEB;
  background-color: $color-white;
  border-radius: 14px;
  padding: 16px 12px 24px 12px;
  row-gap: 16px;
  height: 100%;

  @include media-breakpoint-up(md) {
    border-radius: 16px;
    padding: 28px 60px 28px 32px;
    row-gap: 24px;
  }

  &__title {
    @include fontInter28Bold;

    color: $color-black;
    font-size: rem(18);

    @include media-breakpoint-up(md) {
      font-size: rem(28);
    }
  }
}
</style>
