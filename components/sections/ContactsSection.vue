<template>
  <section
    class="contacts-section"
    id="contacts"
  >
    <div class="contacts-section__container container">
      <div class="contacts-section__content">
        <h2
          class="contacts-section__title"
          v-html="$t('contacts.title')"
        />

        <p class="contacts-section__text">
          {{ $t('contacts.description') }}
        </p>
      </div>

      <UiForm />
    </div>

    <img
      src="@/assets/images/contacts-background.png"
      alt="Circle"
      class="contacts-section__image"
    >
  </section>
</template>

<script lang="ts" setup>
import UiForm from '@/components/ui/UiForm.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers';

.contacts-section {
  width: 100%;
  box-sizing: border-box;
  position: relative;
  background-color: $color-white;
  overflow: hidden;

  @include media-breakpoint-up(md) {
    background-color: $color-white-text-02;
  }

  &__container {
    padding: 0;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding-bottom: 230px;
    row-gap: 28px;

    @include media-breakpoint-up(md) {
      flex-direction: row;
      padding: 147px 98px 230px 93px;
      border-radius: 60px;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 64px;
      overflow-x: initial;
    }
  }

  &__image {
    position: absolute;
    transform: rotate(-179deg) scale(1.2);
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    object-fit: cover;
    max-width: 550px;

    @include media-breakpoint-up(md) {
      position: absolute;
      left: 0;
      bottom: 0;
      right: none;
      transform: none;
      width: fit-content;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    row-gap: 8px;
    width: 100%;

    @include media-breakpoint-up(md) {
      padding: 0;
      row-gap: 20px;
    }
  }

  &__title {
    @include fontInter48Bold;

    color: $color-black;
    line-height: 120%;
    font-size: rem(20);

    @include media-breakpoint-up(md) {
      font-size: rem(48);
    }
  }

  &__text {
    @include fontInter18Regular;

    color: $color-grey-text-01;
    row-gap: 14px;

    @include media-breakpoint-up(md) {
      row-gap: 18px;
    }
  }
}
</style>
