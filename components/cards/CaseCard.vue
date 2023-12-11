<template>
  <div class="case-card">
    <img
      :src="props.case.image"
      :alt="props.case.title"
      class="case-card__image"
    >

    <div class="case-card__footer">
      <div class="case-card__block">
        <h5 class="case-card__title">
          {{ $t(props.case.title) }}
        </h5>

        <p class="case-card__text">
          {{ $t(props.case.text) }}
        </p>
      </div>

      <button class="case-card__button">
        <div
          v-for="item in 3"
          :key="item"
          class="case-card__circle"
        />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { CaseCardParams } from '@/shared/constants'

interface Props {
  case: CaseCardParams
}

const props = defineProps<Props>()
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers';

.case-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 68px;
  border-radius: 20px;
  background-color: $color-white-text-02;
  border-radius: 20px;
  padding: 68px 16px 20px 16px;
  min-height: 370px;
  max-height: 420px;
  width: 100%;

  @include media-breakpoint-up(md) {
    padding: 115px 32px 32px 32px;
    height: 420px;
    row-gap: 76px;
  }

  &__image {
    display: block;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    object-fit: contain;
    max-width: 220px;

    @include media-breakpoint-up(md) {
      max-width: 370px;
    }
  }

  &__footer {
    display: flex;
    flex-direction: column;
    row-gap: 18px;

    @include media-breakpoint-up(md) {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
      row-gap: 0;
      column-gap: 20px;
    }
  }

  &__block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 12px;
  }

  &__title {
    @include fontInter32Bold;

    color: $color-black;
    font-size: rem(16);

    @include media-breakpoint-up(md) {
      font-size: rem(32);
    }
  }

  &__text {
    @include fontInter16Regular;

    color: $color-grey-text-01;
    max-width: 500px;
    font-size: rem(14);

    @include media-breakpoint-up(md) {
      font-size: rem(16);
    }
  }

  &__button {
    outline: none;
    border: none;
    background-color: $color-red-primary;
    cursor: pointer;
    padding: 12px;
    border-radius: 10px;
    width: 56px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 4px;
    margin-left: auto;

    @include media-breakpoint-up(md) {
      // margin-left: ;
    }
  }

  &__circle {
    width: 8px;
    height: 8px;
    background-color: $color-white;
    border-radius: 20px;
  }
}
</style>
