<template>
  <div class="ui-tag">
    {{ $t(title) }}
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title: string
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers';

.ui-tag {
  @include fontInter16Regular;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 3px 7px;
  color: $color-black;
  border-radius: 22px;
  border: 1px solid #EDEDED;
  background-color: $color-white-text-01;
  font-size: rem(12);

  @include media-breakpoint-up(md) {
    font-size: rem(15);
    border-radius: 29px;
    padding: 4px 10px;
  }
}
</style>
