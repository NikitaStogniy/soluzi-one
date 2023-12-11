<template>
  <svg class="check-large-icon" width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M37.5 11L16.875 31.1667L7.5 22" stroke="#EB5757" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/helpers';

.check-large-icon {
  width: 30px;
  height: 30px;

  @include media-breakpoint-up(md) {
    width: 45px;
    height: 44px;
  }
}
</style>
