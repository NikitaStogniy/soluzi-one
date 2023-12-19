<template>
  <div
    class="ui-header"
    :class="[{ 'ui-header--opened': isMenuShown }]"
  >
    <div class="ui-header__container container">
      <div
        class="ui-header__inner"
        :class="[{ 'ui-header__inner--opened': isMenuShown }]"
      >
        <UiLogo />

        <div
          class="ui-header__wrapper"
          :class="[{ 'ui-header__wrapper--opened': isMenuShown }]"
        >
          <ul
            class="ui-header__list"
            :class="[{ 'ui-header__list--opened': isMenuShown }]"
          >
            <li
              v-for="(item, index) in menuItems"
              :key="index"
            >
              <a
                class="ui-header__link"
                @click="onScrollToElement(item.hash)"
              >
                {{ $t(item.title) }}
              </a>
            </li>
          </ul>

          <div
            class="ui-header__block"
            :class="[{ 'ui-header__block--opened': isMenuShown }]"
          >
            <div
              class="ui-header__language"
              :class="[{ 'ui-header__language--opened': isMenuShown }]"
            >
              <span class="ui-header__label">
                En/It
              </span>

              <UiSwitch
                v-model="isLanguageEnglish"
                @update:model-value="toggleLocales"
              />
            </div>

            <UiButton
              class="ui-header__button"
              :class="[{ 'ui-header__button--opened': isMenuShown }]"
              view="extra"
              size="small"
              :is-expanded="true"
              @click="onScrollToElement('contacts')"
            >
              {{ $t('button.leaveRequest') }}
            </UiButton>
          </div>
        </div>

        <button
          class="ui-header__button-menu"
          :class="[{ 'ui-header__button-menu--opened': isMenuShown }]"
          @click="toggleMenu"
        >
          <MenuIconClose v-if="isMenuShown" />

          <MenuIcon v-else />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

import UiLogo from '@/components/ui/UiLogo.vue'
import UiButton from '@/components/ui/UiButton.vue'
import UiSwitch from '@/components/ui/UiSwitch.vue'

import MenuIconClose from '@/components/icons/MenuIconClose.vue'
import MenuIcon from '@/components/icons/MenuIcon.vue'

import { LOCAL_KEY } from '~/shared/constants'

import { scrollToElementById } from '~/utils/scroll-to-element'
import { scrollLock } from '~/utils/scroll-lock'

import type { MenuItemParams } from '~/shared/constants'

const { locale } = useI18n()

const menuItems: MenuItemParams[] = [
  { title: 'link.directions', hash: 'directions' },
  { title: 'link.offer', hash: 'offer' },
  { title: 'link.cases', hash: 'cases' },
  { title: 'link.contacts', hash: 'contacts' },
]

const isLanguageEnglish = ref(!(locale.value === 'en'))
const isMenuShown = ref(false)

const toggleLocales = (isEnabled: boolean) => {
  locale.value = isEnabled ? 'it' : 'en'
  localStorage.setItem(LOCAL_KEY, locale.value)
}

const toggleMenu = (): void => {
  isMenuShown.value = !isMenuShown.value

  scrollLock(isMenuShown.value)
}

const onScrollToElement = (id: string): void => {
  if (isMenuShown.value)
    toggleMenu()

  scrollToElementById(id)
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers';

.ui-header {
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;

  @include media-breakpoint-up(md) {
    top: 24px;
  }

  &--opened {
    position: relative;
    z-index: 100;
  }

  &__container {
    @include media-breakpoint-up(md) {
      padding: 0 60px;
    }
  }

  &__inner {
    border-radius: 0 0 20px 20px;
    border: 1px solid #E1E1E1;
    border-top: none;
    background: rgba(173, 173, 173, 0.10);
    backdrop-filter: blur(14px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 22px 16px;
    width: 100%;
    box-sizing: border-box;

    @include media-breakpoint-up(md) {
      border-radius: 20px;
      height: 88px;
      padding: 20px 28px;
      border-top: 1px solid #E1E1E1;
    }

    &--opened {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      height: 100vh;
      z-index: 100;
      background-color: #F5F5F5;
      border-radius: 0;
      align-items: flex-start;
      flex-direction: column;
      justify-content: flex-start;
    }
  }

  &__wrapper {
    display: flex;
    align-items: center;

    &--opened {
      width: 100%;
      margin-top: 84px;
      flex-direction: column;
      row-gap: 44px;
    }
  }

  &__list {
    display: none;
    width: 100%;

    @include media-breakpoint-up(md) {
      display: flex;
      align-items: center;
      column-gap: 40px;
      margin-right: 81px;
    }

    &--opened {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      row-gap: 28px;
    }
  }

  &__link {
    @include fontInter18Regular;

    color: $color-grey-text-02;
    white-space: nowrap;
    font-size: rem(18);
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  &__block {
    display: flex;
    align-items: center;
    column-gap: 44px;
    width: 100%;
    box-sizing: border-box;

    &--opened {
      flex-direction: column;
      row-gap: 48px;
      max-width: initial;
    }
  }

  &__language {
    display: none;

    @include media-breakpoint-up(md) {
      display: flex;
      align-items: center;
      column-gap: 16px;
    }

    &--opened {
      display: flex;
      align-items: center;
      column-gap: 16px;
    }
  }

  &__label {
    @include fontInter18Regular;

    color: $color-grey-text-02;
    font-size: rem(18);
  }

  &__button {
    display: none !important;

    @include media-breakpoint-up(md) {
      display: flex !important;
    }

    &--opened {
      display: flex !important;
    }
  }

  &__button-menu {
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;

    @include media-breakpoint-up(md) {
      display: none;
    }

    &--opened {
      position: absolute;
      right: 20px;
      top: 34px;
    }
  }
}
</style>
