<template>
  <div class="discovery-card">
    <TextBlock
      view="extra"
      :name="$t(card.name)"
      :description="$t(card.description)"
    />

    <div
      v-if="card.coreTeams.length"
      class="discovery-card__wrapper"
    >
      <div class="discovery-card__block">
        <UsersIcon />

        <h6 class="discovery-card__title">
          {{ $t('title.coreTeam') }}
        </h6>
      </div>

      <ul class="discovery-card__list">
        <li
          v-for="(item, index) in card.coreTeams"
          :key="index"
          class="discovery-card__item"
        >
          <UiTag :title="item" />
        </li>
      </ul>
    </div>

    <div
      v-if="card.additionallies.length"
      class="discovery-card__wrapper"
    >
      <div class="discovery-card__block">
        <UsersPlusIcon />

        <h6 class="discovery-card__title">
          {{ $t('title.additionally') }}
        </h6>
      </div>

      <ul class="discovery-card__list">
        <li
          v-for="(item, index) in card.additionallies"
          :key="index"
        >
          <UiTag :title="item" />
        </li>
      </ul>
    </div>

    <div
      v-if="card.teams.length"
      class="discovery-card__wrapper"
    >
      <div class="discovery-card__block">
        <UsersIcon />

        <h6 class="discovery-card__title">
          {{ $t('title.team') }}
        </h6>
      </div>

      <ul class="discovery-card__list">
        <li
          v-for="(item, index) in card.teams"
          :key="index"
        >
          <UiTag :title="item" />
        </li>
      </ul>
    </div>

    <div class="discovery-card__content">
      <h4 class="discovery-card__title-footer">
        {{ $t('title.results') }}
      </h4>

      <TextList :texts="card.results" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import TextList from '@/components/TextList.vue'
import TextBlock from '@/components/TextBlock.vue'
import UiTag from '@/components/ui/UiTag.vue'

import UsersIcon from '@/components/icons/UsersIcon.vue'
import UsersPlusIcon from '@/components/icons/UsersPlusIcon.vue'

import type { DiscoveryCardParams } from '~/shared/constants'

interface Props {
  card: DiscoveryCardParams
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers';

.discovery-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 24px;
  padding: 12px 12px 24px 12px;
  border-radius: 14px;
  background-color: $color-white;
  height: 100%;

  @include media-breakpoint-up(md) {
    row-gap: 32px;
    padding: 21px 36px 28px 28px;
    border-radius: 20px;
    border: 4px solid $color-white;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 9px;

    @include media-breakpoint-up(md) {
      row-gap: 12px;
    }
  }

  &__block {
    display: grid;
    align-items: center;
    grid-template-columns: 18px 1fr;
    column-gap: 9px;

    @include media-breakpoint-up(md) {
      grid-template-columns: 24px 1fr;
      column-gap: 12px;
    }
  }

  &__title {
    @include fontInter20Bold;

    color: $color-black;
    font-size: rem(16);

    @include media-breakpoint-up(md) {
      font-size: rem(20);
    }
  }

  &__list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;

    @include media-breakpoint-up(md) {
      gap: 12px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 16px;

    @include media-breakpoint-up(md) {
      row-gap: 20px;
    }
  }

  &__title-footer {
    @include fontInter24Bold;

    color: $color-black;
    font-size: rem(18);

    @include media-breakpoint-up(md) {
      font-size: rem(24);
    }
  }
}
</style>
