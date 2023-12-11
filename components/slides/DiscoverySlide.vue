<template>
  <div class="discovery-slide">
    <div class="discovery-slide__wrapper">
      <TextBlock
        :name="$t('textBlock.startupDiscovery.name')"
        :description="$t('textBlock.startupDiscovery.description')"
      />

      <ul class="discovery-slide__list">
        <li
          v-for="(item, index) in discoveryCards"
          :key="index"
          class="discovery-slide__item"
        >
          <DiscoveryCard :card="item" />

          <UiButton
            v-if="item.hasButton"
            view="default"
            size="large"
            class="discovery-slide__button"
            :is-expanded="true"
            @click="scrollToElementById('contacts')"
          >
            {{ $t('button.leaveRequest') }}
          </UiButton>
        </li>
      </ul>
    </div>

    <UiButton
      view="default"
      size="large"
      class="discovery-slide__button-footer"
      :is-expanded="true"
      @click="scrollToElementById('contacts')"
    >
      {{ $t('button.leaveRequest') }}
    </UiButton>
  </div>
</template>

<script lang="ts" setup>
import TextBlock from '@/components/TextBlock.vue'
import DiscoveryCard from '@/components/cards/DiscoveryCard.vue'
import UiButton from '@/components/ui/UiButton.vue'

import { scrollToElementById } from '~/utils/scroll-to-element'

import type { DiscoveryCardParams } from '~/shared/constants'

const discoveryCards: DiscoveryCardParams[] = [
  {
    name: 'textBlock.shortenedDiscoveryPhase.name',
    description: 'textBlock.shortenedDiscoveryPhase.description',
    coreTeams: ['tag.productManager', 'tag.businessAnalyst', 'tag.projectManage'],
    additionallies: ['UX/UI designer', 'Marketer'],
    teams: [],
    results: [
      'workResult.canvasModel',
      'workResult.bpmn',
      'workResult.wireframes',
      'workResult.detailedBacklog',
      'workResult.visionScope'
    ],
    hasShowMore: false,
    hasButton: true
  },
  {
    name: 'textBlock.discoveryPhase.name',
    description: 'textBlock.discoveryPhase.description',
    coreTeams: [],
    additionallies: [],
    teams: ['tag.productManager', 'tag.businessAnalyst', 'tag.projectManage', 'tag.designer', 'tag.marketer'],
    results: [
      'workResult.canvasModel',
      'workResult.bpmn',
      'workResult.wireframes',
      'workResult.audience',
      'workResult.backlog',
      'workResult.visionScope',
      'workResult.analys',
      'workResult.model',
      'workResult.roadmap',
      'workResult.uiUx'
    ],
    hasShowMore: true,
    hasButton: false
  },
]
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers';

.discovery-slide {
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  row-gap: 32px;

  @include media-breakpoint-up(md) {
    row-gap: 0;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 16px;

    @include media-breakpoint-up(md) {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 20px;
      row-gap: 0;
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    row-gap: 56px;
  }

  &__button {
    display: none;

    @include media-breakpoint-up(md) {
      display: flex;
      max-width: 277px;
    }
  }

  &__button-footer {
    display: flex;

    @include media-breakpoint-up(md) {
      display: none;
    }
  }
}
</style>
