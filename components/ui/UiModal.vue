<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'

import UiButton from '@/components/ui/UiButton.vue'

import CheckLargeIcon from '@/components/icons/CheclLargeIcon.vue'

const emit = defineEmits(['confirm'])

const getInitialValues = {
  modelValue: false,
  hideOverlay: false,
  overlayTransition: 'vfm-fade',
  contentTransition: 'vfm-fade',
  clickToClose: true,
  escToClose: true,
  lockScroll: true,
  reserveScrollBarGap: true,
}
</script>

<template>
  <VueFinalModal
    v-bind="getInitialValues"
    class="ui-modal"
    content-class="ui-modal__wrapper"
    overlay-class="ui-modal__overlay"
  >
    <div class="ui-modal__content">
      <div class="ui-modal__circle">
        <CheckLargeIcon />
      </div>

      <h4 class="ui-modal__title">
        {{ $t('modal.title') }}
      </h4>
    </div>

    <UiButton
      class="ui-modal__button"
      view="default"
      size="small"
      :is-expanded="true"
      @click="emit('confirm')"
    >
      {{ $t('button.returnSite') }}
    </UiButton>
  </VueFinalModal>
</template>

<style lang="scss">
@import '@/assets/scss/helpers';

.ui-modal {
  display: flex;
  align-items: center;
  justify-content: center;

  &__overlay {
    background-color: rgba(38, 38, 38, 0.40);
  }

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 29px 16px 16px 16px;
    border-radius: 11px;
    background-color: $color-white;
    max-width: 80%;
    row-gap: 40px;

    @include media-breakpoint-up(md) {
      border-radius: 36px;
      padding: 76px 85px;
      max-width: 60%;
      row-gap: 60px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 24px;

    @include media-breakpoint-up(md) {
      row-gap: 36px;
    }
  }

  &__circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background-color: $color-white-text-02;
    border-radius: 50px;
  }

  &__title {
    @include fontInter40Bold;

    color: $color-black;
    text-align: center;
    font-size: rem(20);

    @include media-breakpoint-up(md) {
      font-size: rem(40);
    }
  }

  &__button {
    @include media-breakpoint-up(md) {
      max-width: 247px;
    }
  }
}
</style>
