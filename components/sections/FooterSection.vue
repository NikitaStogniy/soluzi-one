<template>
  <section
    class="footer-section"
    id="footer"
  >
    <div class="footer-section__container container">
      <div class="footer-section__header">
        <UiLogo />

        <ul class="footer-section__list">
          <li
            v-for="(item, index) in menuItems"
            :key="index"
          >
            <a
              class="footer-section__link"
              @click="scrollToElementById(item.hash)"
            >
              {{ $t(item.title) }}
            </a>
          </li>
        </ul>

        <button
          class="footer-section__button"
          @click="scrollToTop"
        >
          <ChevronUpIcon />
        </button>
      </div>

      <div class="footer-section__footer">
        <span class="footer-section__text">
          {{ $t('footer.privacyPolicy') }}
        </span>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import UiLogo from '@/components/ui/UiLogo.vue'

import ChevronUpIcon from '@/components/icons/ChevronUpIcon.vue'

import { scrollToElementById } from '~/utils/scroll-to-element'

import type { MenuItemParams } from '~/shared/constants'

const menuItems: MenuItemParams[] = [
  { title: 'link.directions', hash: 'directions' },
  { title: 'link.offer', hash: 'offer' },
  { title: 'link.cases', hash: 'cases' },
  { title: 'link.contacts', hash: 'contacts' },
]

const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers';

.footer-section {
  width: 100%;
  box-sizing: border-box;
  position: relative;

  &__container {
    padding: 0 16px 80px 16px;
    margin-top: 60px;

    @include media-breakpoint-up(md) {
      padding: 86px 60px 65px 60px;
      margin-top: 0;
    }
  }

  &__header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 21px;
    border-bottom: 1px solid #EEE;
    row-gap: 45px;

    @include media-breakpoint-up(md) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 48px;
      row-gap: 0;
    }
  }

  &__list {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    row-gap: 28px;

    @include media-breakpoint-up(md) {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      column-gap: 40px;
      row-gap: 0;
    }
  }

  &__link {
    @include fontInter18Regular;

    color: $color-grey-text-02;
    cursor: pointer;
    font-size: rem(16);

    @include media-breakpoint-up(md) {
      font-size: rem(18);
    }

    &:hover {
      text-decoration: underline;
    }
  }

  &__button {
    outline: none;
    border: none;
    background-color: transparent;
    position: absolute;
    right: 16px;
    top: -10px;

    @include media-breakpoint-up(md) {
      position: static;
      right: none;
      top: none;
    }
  }

  &__footer {
    padding-top: 28px;

    @include media-breakpoint-up(md) {
      padding-top: 33px;
    }
  }

  &__text {
    @include fontInter14Regular;

    color: $color-grey-text-05;
  }
}
</style>
