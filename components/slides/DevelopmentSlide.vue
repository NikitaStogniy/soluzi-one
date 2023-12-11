<template>
  <div class="development-slide">
    <div class="development-slide__wrapper">
      <TextBlock
        :name="$t('textBlock.development.name')"
        :description="$t('textBlock.development.description')"
      />

      <ul class="development-slide__list">
        <li
          v-for="(item, index) in developmentCards"
          :key="index"
        >
          <DevelopmentCard :card="item" />
        </li>
      </ul>

      <StackList />
    </div>

    <UiButton
      view="default"
      size="large"
      class="development-slide__button"
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
import DevelopmentCard from '@/components/cards/DevelopmentCard.vue'
import StackList from '@/components/StackList.vue'

import LayersThreeIcon from '@/components/icons/LayersThreeIcon.vue'
import DataflowIcon from '@/components/icons/DataflowIcon.vue'
import PhoneIcon from '@/components/icons/PhoneIcon.vue'

import { scrollToElementById } from '~/utils/scroll-to-element'

import type { DevelopmentCardParams } from '~/shared/constants'

const developmentCards: DevelopmentCardParams[] = [
  { icon: LayersThreeIcon, title: 'card.softwareDevelopment.title', text: 'card.softwareDevelopment.description' },
  { icon: DataflowIcon, title: 'card.blockchainSolutions.title', text: 'card.blockchainSolutions.description' },
  { icon: PhoneIcon, title: 'card.mobile.title', text: 'card.mobile.description' }
]
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers';

.development-slide {
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
    row-gap: 32px;

    @include media-breakpoint-up(md) {
      row-gap: 60px;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 12px;

    @include media-breakpoint-up(md) {
      grid-template-columns: repeat(3, 1fr);
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
