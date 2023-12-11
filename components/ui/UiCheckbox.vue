<template>
  <div
    class="ui-checkbox"
    :class="{ ['ui-checkbox--checked']: checked }"
    :aria-checked="props.checked"
    tabindex="0"
    role="checkbox"
    aria-labelledby="label"
    @click="handleClick"
  >
    <span
      class="ui-checkbox__icon"
      :class="{ ['ui-checkbox__icon--checked']: checked }"
    >
      <CheckedSquareIcon v-if="props.checked" />

      <SquareIcon v-else />
    </span>

    <span id="label" class="ui-checkbox__label">
      <slot />
    </span>
  </div>
</template>

<script setup lang="ts">
import CheckedSquareIcon from "@/components/icons/CheckSquareIcon.vue"
import SquareIcon from "@/components/icons/SquareIcon.vue"

interface Props {
  value: string
  label: string
  checked: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['change'])

const handleClick = () => {
  emit("change", !props.checked);
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/helpers';

.ui-checkbox {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 9px;
  user-select: none;
  cursor: pointer;
  border: 1px solid transparent;

  &__icon {
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 2px;

    svg {
      height: 100%;
      width: 100%;
    }
  }

  &__label {
    @include fontInter14Regular;

    color: $color-black;
    font-size: rem(12);

    @include media-breakpoint-up(md) {
      font-size: rem(14);
    }
  }
}
</style>
