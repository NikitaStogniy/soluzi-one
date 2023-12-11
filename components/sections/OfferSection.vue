<template>
  <section
    class="offer-section"
    id="offer"
  >
    <div class="offer-section__container container">
      <h2 class="offer-section__title">
        {{ $t('offer.title') }}
      </h2>

      <ul class="offer-section__list">
        <li
          v-for="(item, index) in tabs"
          :key="index"
        >
          <UiTab
            v-model="selectedTab"
            :value="item.value"
          >
            {{ $t(item.title) }}
          </UiTab>
        </li>
      </ul>

      <component :is="displayedComponentSlide" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import UiTab from '@/components/ui/UiTab.vue'
import DevelopmentSlide from '@/components/slides/DevelopmentSlide.vue'
import DiscoverySlide from '@/components/slides/DiscoverySlide.vue'
import ProductSlide from '@/components/slides/ProductSlide.vue'

enum TabKey {
  development = 'development',
  discovery = 'discovery',
  product = 'product'
}

interface TabParams {
  title: string
  value: TabKey
}

const tabs: TabParams[] = [
  { title: 'tab.development', value: TabKey.development },
  { title: 'tab.discovery', value: TabKey.discovery },
  { title: 'tab.product', value: TabKey.product }
]

const selectedTab = ref<TabKey>(TabKey.development)

const displayedComponentSlide = computed(() => {
  switch (selectedTab.value) {
    case TabKey.development:
      return DevelopmentSlide
    case TabKey.discovery:
      return DiscoverySlide
    default:
      return ProductSlide
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers';

.offer-section {
  width: 100%;
  box-sizing: border-box;
  background-color: $color-white-text-02;
  border-radius: 36px;

  @include media-breakpoint-up(md) {
    border-radius: 60px;
  }

  &__container {
    display: flex;
    flex-direction: column;
    row-gap: 28px;
    padding: 50px 16px;

    @include media-breakpoint-up(md) {
      row-gap: 52px;
      padding: 110px 60px;
    }
  }

  &__title {
    @include fontInter48Bold;

    color: $color-black;
    font-size: rem(20);

    @include media-breakpoint-up(md) {
      font-size: rem(48);
    }
  }

  &__list {
    display: flex;
    align-items: center;
    column-gap: 12px;
    margin-right: -16px;
    overflow-x: auto;
    padding-right: 16px;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    @include media-breakpoint-up(md) {
      column-gap: 22px;
      padding-right: 0;
      margin-right: 0;
    }
  }
}
</style>
