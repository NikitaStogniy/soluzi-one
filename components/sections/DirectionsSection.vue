<template>
  <section
    class="directions-section"
    id="directions"
  >
    <div class="directions-section__overlay" />

    <h1 class="directions-section__title">
      {{ $t('directions.title') }}
    </h1>

    <ul class="directions-section__list">
      <li
        v-for="(item, index) in expertiseItems"
        :key="index"
        class="directions-section__item"
      >
        <CircleCheckIcon />

        <span class="directions-section__text">
          {{ $t(item) }}
        </span>
      </li>
    </ul>

    <UiButton
      class="directions-section__button"
      view="default"
      size="large"
      :is-expanded="true"
      @click="scrollToElementById('contacts')"
    >
      {{ $t('button.leaveRequest') }}
    </UiButton>
  </section>
</template>

<script lang="ts" setup>
import CircleCheckIcon from '@/components/icons/CircleCheckIcon.vue'
import UiButton from '@/components/ui/UiButton.vue'

import { scrollToElementById } from '~/utils/scroll-to-element'

const expertiseItems: string[] = ['directions.advise', 'directions.launch', 'directions.help']
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers';

.directions-section {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 100px 16px 100px 16px;
  background-image: url('@/assets/images/header-background.png');
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  @include media-breakpoint-up(md) {
    padding: 260px 0 217px 0;
    align-items: center;
    justify-content: center;
    background-position: top;
  }

  &__overlay {
    position: absolute;
    background: linear-gradient(0deg, $color-white 15.84%, rgba(255, 255, 255, 0.00) 86.26%);
    width: 100%;
    z-index: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  &__title, &__list, &__button {
    z-index: 1;
  }

  &__title {
    @include fontInter60Bold;

    color: $color-black;
    font-size: rem(24);
    margin-bottom: 24px;

    @include media-breakpoint-up(md) {
      font-size: rem(60);
      margin-bottom: 40px;
      max-width: 664px;
      text-align: center;
    }
  }

  &__list {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 32px;
    row-gap: 8px;

    @include media-breakpoint-up(md) {
      flex-direction: row;
      align-items: center;
      margin-bottom: 58px;
      column-gap: 20px;
      row-gap: 0;
    }
  }

  &__item {
    display: flex;
    align-items: center;
    column-gap: 8px;

    @include media-breakpoint-up(md) {
      column-gap: 12px;
    }
  }

  &__text {
    @include fontInter22Regular;

    color: $color-grey-text-01;
    font-size: rem(14);

    @include media-breakpoint-up(md) {
      font-size: rem(22);
    }
  }

  &__button {
    @include media-breakpoint-up(md) {
      max-width: 247px;
    }
  }
}
</style>
