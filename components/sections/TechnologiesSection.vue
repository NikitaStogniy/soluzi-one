<template>
  <section
    class="technologies-section"
    id="technologies"
  >
    <div class="technologies-section__container container">
      <ul class="technologies-section__list">
        <div
          v-for="(item, index) in technologies"
          :key="index"
          class="technologies-section__item"
        >
          <component :is="item.icon" />

          <span class="technologies-section__text">
            {{ $t(item.text) }}
          </span>
        </div>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import CoinsStackedIcon from '@/components/icons/CoinsStackedIcon.vue'
import LayersTwoIcon from '@/components/icons/LayersTwoIcon.vue'
import LayersThreeIcon from '@/components/icons/LayersThreeIcon.vue'
import TerminalBrowserIcon from '@/components/icons/TerminalBrowserIcon.vue'
import FlexAlignBottomIcon from '@/components/icons/FlexAlignBottomIcon.vue'
import PhoneIcon from '@/components/icons/PhoneIcon.vue'
import ShoppingCartIcon from '@/components/icons/ShoppingCartIcon.vue'

interface TechnologyCardParams {
  icon: any
  text: string
}

const technologies: TechnologyCardParams[] = [
  { icon: CoinsStackedIcon, text: 'technologies.startup' },
  { icon: LayersTwoIcon, text: 'technologies.landing' },
  { icon: LayersThreeIcon, text: 'technologies.websites' },
  { icon: TerminalBrowserIcon, text: 'technologies.support' },
  { icon: FlexAlignBottomIcon, text: 'technologies.webApplications' },
  { icon: PhoneIcon, text: 'technologies.applications' },
  { icon: ShoppingCartIcon, text: 'technologies.internetMarkets' },
]
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers';

.technologies-section {
  width: 100%;
  box-sizing: border-box;

  &__container {
    padding: rem(47) rem(16) rem(50) rem(16);

    @include media-breakpoint-up(md) {
      padding: 110px 60px;
    }
  }

  &__list {
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-wrap: wrap;
    flex-flow: row wrap;
    gap: 12px;

    @include media-breakpoint-up(md) {
      gap: 18px;
    }
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 10px;
    border-radius: 16px;
    border: 1px solid #E7E7E7;
    padding: 12px 10px;
    height: 91px;
    max-width: 140px;
    width: 100%;
    flex-grow: 2;

    &:last-child {
      flex-grow: 0;
    }

    @media (min-width: 360px) {
      max-width: 150px;
      height: initial;
    }

    @include media-breakpoint-up(md) {
      height: 192px;
      row-gap: 24px;
      max-width: 316px;
    }
  }

  &__text {
    @include fontInter24RobotoBold;

    color: $color-black;
    text-align: center;
    font-size: rem(12);
    max-width: 140px;

    @include media-breakpoint-up(md) {
      font-size: rem(24);
      max-width: none;
    }
  }
}
</style>
