<template>
  <section
    class="cases-section"
    id="cases"
  >
    <div class="cases-section__container container">
      <h2 class="cases-section__title">
        {{ $t('ourCases.our') }}

        <span class="cases-section__title cases-section__title--colored">
          {{ $t('ourCases.cases') }}
        </span>
      </h2>

      <ul class="cases-section__list">
        <li
          v-for="(item, index) in cases"
          :key="index"
          class="cases-section__item"
          :class="{ [`cases-section__item--short`]: item.isShort }"
        >
          <CaseCard :case="item" />
        </li>

        <li class="cases-section__item cases-section__item--short cases-section__item--empty">
          <p class="cases-section__text">
            {{ $t('ourCases.empty.title') }}
          </p>

          <UiButton
            view="default"
            size="small"
            class="cases-section__button"
            :is-expanded="true"
            @click="scrollToElementById('contacts')"
          >
            {{ $t('button.request') }}
          </UiButton>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import CaseCard from '@/components/cards/CaseCard.vue'
import UiButton from '@/components/ui/UiButton.vue'

import AssetImage from '@/assets/images/cases/ASSET.png'
import TodayPrice from '@/assets/images/cases/todayprice.png'
import Club500 from '@/assets/images/cases/club500.png'
import AMCapital from '@/assets/images/cases/am-capital.png'
import Hivvy from '@/assets/images/cases/Hivvy.png'
import GPSTruck from '@/assets/images/cases/gps-truck.png'
import Pixpulse from '@/assets/images/cases/PIXPULSE.png'

import { scrollToElementById } from '~/utils/scroll-to-element'

import type { CaseCardParams } from '@/shared/constants'

const cases: CaseCardParams[] = [
  { image: AssetImage, title: 'ourCases.asset.title', text: 'ourCases.asset.description', isShort: true },
  { image: TodayPrice, title: 'ourCases.todayPrice.title', text: 'ourCases.todayPrice.description', isShort: false },
  { image: AMCapital, title: 'ourCases.amCapital.title', text: 'ourCases.amCapital.description', isShort: false },
  { image: Club500, title: 'ourCases.club500.title', text: 'ourCases.club500.description', isShort: true },
  { image: Hivvy, title: 'ourCases.GPSTruck.title', text: 'ourCases.GPSTruck.description', isShort: true },
  { image: GPSTruck, title: 'ourCases.hivvy.title', text: 'ourCases.hivvy.description', isShort: false },
  { image: Pixpulse, title: 'ourCases.pixpulse.title', text: 'ourCases.pixpulse.description', isShort: false },
]
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers';

.cases-section {
  width: 100%;
  box-sizing: border-box;

  &__container {
    display: flex;
    flex-direction: column;
    padding: rem(50) rem(16) rem(100) rem(16);
    row-gap: rem(32);

    @include media-breakpoint-up(md) {
      padding: rem(110) rem(60);
      row-gap: rem(52);
    }
  }

  &__title {
    @include fontInter48Bold;

    color: $color-black;
    font-size: rem(20);

    &--colored {
      color: $color-red-primary;
    }

    @include media-breakpoint-up(md) {
      font-size: rem(48);
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: rem(12);

    @include media-breakpoint-up(md) {
      justify-content: center;
      flex-flow: row wrap;
      flex-wrap: wrap;
      gap: rem(20);
    }
  }

  &__item {
    flex-grow: 2;

    &--short {
      flex-grow: initial;

      @include media-breakpoint-up(md) {
        flex-grow: 0;
      }
    }

    &--empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      row-gap: rem(24);
      border-radius: 20px;
      border: 2px dashed #C9C6C6;
      width: 100%;
      padding: 20px 12px;

      @include media-breakpoint-up(md) {
        row-gap: rem(28);
        max-width: rem(538);
      }
    }
  }

  &__button {
    @include media-breakpoint-up(md) {
      max-width: 210px;
    }
  }

  &__text {
    @include fontInter28Medium;

    color: $color-black;
    text-align: center;
    max-width: rem(260);
  }
}
</style>
