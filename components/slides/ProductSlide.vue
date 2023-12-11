<template>
  <div class="product-slide">
    <div class="product-slide__wrapper">
      <TextBlock
        :name="$t('textBlock.productSupport.name')"
        :description="$t('textBlock.productSupport.description')"
      />

      <ul class="product-slide__list">
        <li
          v-for="(item, index) in productCards"
          :key="index"
        >
          <ProductCard :card="item" />
        </li>
      </ul>
    </div>

    <UiButton
      view="default"
      size="large"
      class="product-slide__button"
      :is-expanded="true"
      @click="scrollToElementById('contacts')"
    >
      {{ $t('button.leaveRequest') }}
    </UiButton>
  </div>
</template>

<script lang="ts" setup>
import TextBlock from '@/components/TextBlock.vue'
import UiButton from '@/components/ui/UiButton.vue'
import ProductCard from '@/components/cards/ProductCard.vue'

import { scrollToElementById } from '~/utils/scroll-to-element'

import type { ProductCardParams } from '~/shared/constants'

const productCards: ProductCardParams[] = [
  {
    title: 'title.developmentSupport',
    texts: [
      'supportCard.development.development',
      'supportCard.development.troubleshooting',
      'supportCard.development.prompt',
      'supportCard.development.testing',
      'supportCard.development.implementation',
      'supportCard.development.product'
    ]
  },
  {
    title: 'title.systemSupport',
    texts: [
      'supportCard.system.consultations',
      'supportCard.system.troubleshooting',
      'supportCard.system.backup',
      'supportCard.system.administrative',
      'supportCard.system.backupManagement',
      'supportCard.system.serverProtection',
    ]
  },
]
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers';

.product-slide {
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  width: 100%;
  box-sizing: border-box;

  @include media-breakpoint-up(md) {
    row-gap: 56px;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 24px;

    @include media-breakpoint-up(md) {
      row-gap: 60px;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 16px;
    align-items: stretch;

    @include media-breakpoint-up(md) {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 20px;
      row-gap: 0;
    }
  }

  &__button {
    @include media-breakpoint-up(md) {
      max-width: 277px;
    }
  }
}
</style>
