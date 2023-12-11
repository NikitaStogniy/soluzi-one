<template>
  <ul class="stack-list">
    <li
      v-for="(item, index) in stacks"
      :key="index"
      class="stack-list__item"
    >
      <component :is="item.icon" />

      <span class="stack-list__name">
        {{ item.name }}
      </span>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import ReactStackIcon from '@/components/icons/stack/ReactStackIcon.vue'
import NodeStackIcon from '@/components/icons/stack/NodeStackIcon.vue'
import NextStackIcon from '@/components/icons/stack/NextStackIcon.vue'
import WordpressStackIcon from '@/components/icons/stack/WordpressStackIcon.vue'
import PHPStackIcon from '@/components/icons/stack/PHPStackIcon.vue'
import FlutterStackIcon from '@/components/icons/stack/FlutterStackIcon.vue'
import N8NStackIcon from '@/components/icons/stack/N8NStackIcon.vue'

const stacks = [
  { icon: ReactStackIcon, name: 'React' },
  { icon: NodeStackIcon, name: 'Node' },
  { icon: NextStackIcon, name: 'Next' },
  { icon: WordpressStackIcon, name: 'Wordpress' },
  { icon: PHPStackIcon, name: 'Php' },
  { icon: FlutterStackIcon, name: 'Flutterflow' },
  { icon: N8NStackIcon, name: 'N8N.io' },
]
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers';

.stack-list {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: -16px;
  padding-right: 16px;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @include media-breakpoint-up(md) {
    flex-wrap: wrap;
    gap: 16px;
    margin-right: 0;
    padding-right: 0;
    overflow-x: initial;
  }

  &__item {
    display: flex;
    align-items: center;
    column-gap: 8px;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #EBEBEB;
    background-color: $color-white;

    @include media-breakpoint-up(md) {
      padding: 16px;
      border-radius: 12px;
      column-gap: 12px;
    }
  }

  &__name {
    @include fontInter18Regular;

    color: $color-grey-text-04;
    text-transform: uppercase;
    font-size: rem(12);

    @include media-breakpoint-up(md) {
      font-size: rem(18);
    }
  }
}
</style>
