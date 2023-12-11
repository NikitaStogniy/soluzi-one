<template>
  <svg class="phone-icon" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 35H24.02M16.4 44H31.6C33.8402 44 34.9603 44 35.816 43.564C36.5686 43.1805 37.1805 42.5686 37.564 41.816C38 40.9603 38 39.8402 38 37.6V10.4C38 8.15979 38 7.03968 37.564 6.18404C37.1805 5.43139 36.5686 4.81947 35.816 4.43597C34.9603 4 33.8402 4 31.6 4H16.4C14.1598 4 13.0397 4 12.184 4.43597C11.4314 4.81947 10.8195 5.43139 10.436 6.18404C10 7.03968 10 8.15979 10 10.4V37.6C10 39.8402 10 40.9603 10.436 41.816C10.8195 42.5686 11.4314 43.1805 12.184 43.564C13.0397 44 14.1598 44 16.4 44ZM25 35C25 35.5523 24.5523 36 24 36C23.4477 36 23 35.5523 23 35C23 34.4477 23.4477 34 24 34C24.5523 34 25 34.4477 25 35Z" stroke="#EB5757" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main";

.phone-icon {
  width: 32px;
  height: 32px;

  @include media-breakpoint-up(md) {
    width: 48px;
    height: 48px;
  }
}
</style>
