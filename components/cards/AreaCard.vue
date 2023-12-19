<template>
  <div class="area-card">
    <span
      v-if="firstName"
      class="area-card__text area-card__text--colored"
    >
      {{ $t(firstName) }}
    </span>

    <span class="area-card__text">
      {{ $t(lastName) }}
    </span>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  firstName: string
  lastName: string
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers';

.area-card {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #E7E7E7;
  background-color: $color-white;
  padding: 20px;
  border-radius: 10px;
  flex-grow: 2;
  white-space: nowrap;

  &:last-child {
    flex-grow: 0;
  }

  @include media-breakpoint-up(md) {
    padding: 36px 20px 35px 20px;
    width: 284px;
    border-radius: 16px;
    flex-grow: 0;
  }

  &__text {
    @include fontInter44SemiBold;

    color: $color-grey-text-03;
    text-align: center;
    font-size: rem(18);

    @include media-breakpoint-up(md) {
      font-size: rem(44);
    }

    &--colored {
      color: $color-red-primary;
    }
  }
}
</style>
