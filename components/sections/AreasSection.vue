<template>
  <section
    class="areas-section"
    id="areas"
  >
    <div class="areas-section__container container">
      <h2 class="areas-section__title">
        {{ $t('technologies.title') }}
      </h2>

      <ul class="areas-section__list">
        <AreaCard
          v-for="(item, index) in areas"
          :key="index"
          :first-name="item.firstName"
          :last-name="item.lastName"
        />
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import AreaCard from '@/components/cards/AreaCard.vue'

interface AreaCardParams {
  firstName: string
  lastName: string
}

const areas: AreaCardParams[] = [
  { firstName: 'areas.food', lastName: 'areas.tech' },
  { firstName: 'areas.prop', lastName: 'areas.tech' },
  { firstName: 'areas.ed', lastName: 'areas.tech' },
  { firstName: 'areas.hr', lastName: 'areas.tech' },
  { firstName: 'areas.health', lastName: 'areas.tech' },
  { firstName: 'areas.retail', lastName: 'areas.tech' },
  { firstName: '', lastName: 'areas.others' },
]
</script>

<style lang="scss" scoped>
.areas-section {
  @import '@/assets/scss/helpers';

  width: 100%;
  box-sizing: border-box;

  &__container {
    display: flex;
    flex-direction: column;
    row-gap: 28px;
    padding: 0 16px 50px 16px;

    @include media-breakpoint-up(md) {
      padding: 0 92px 110px 92px;
      row-gap: 68px;
    }
  }

  &__title {
    @include fontInter48Bold;

    color: $color-black;
    text-align: center;
    font-size: rem(20);

    @include media-breakpoint-up(md) {
      max-width: 893px;
      font-size: rem(48);
      margin: 0 auto;
    }
  }

  &__list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-flow: row wrap;
    gap: 12px;

    @include media-breakpoint-up(md) {
      gap: 40px;
      flex-flow: none;
    }
  }
}
</style>
