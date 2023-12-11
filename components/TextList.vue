<template>
  <ul class="text-list">
    <li
      v-for="(item, index) in displayedTexts"
      :key="index"
      class="text-list__item"
    >
      <CheckIcon />

      <span class="text-list__text">
        {{ $t(item) }}
      </span>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import CheckIcon from '@/components/icons/CheckIcon.vue'

interface Props {
  texts: string[]
}

const props = defineProps<Props>()

const displayedTexts = computed<string[]>(() => props.texts)
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers';

.text-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 12px;

  @include media-breakpoint-up(md) {
    row-gap: 16px;
  }

  &__item {
    display: grid;
    grid-template-columns: 16px 1fr;
    column-gap: 8px;

    @include media-breakpoint-up(md) {
      column-gap: 12px;
    }
  }

  &__text {
    @include fontInter16Regular;

    color: $color-grey-text-01;
    font-size: rem(14);

    @include media-breakpoint-up(md) {
      font-size: rem(16);
    }
  }
}
</style>
