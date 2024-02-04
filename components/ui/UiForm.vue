<template>
  <form
    class="ui-form"
    @submit.prevent="openModal"
  >
    <div class="ui-form__fields">
      <div class="ui-form__field">
        <UiInput
          v-model="form.name"
          :placeholder="$t('form.name')"
        />
      </div>

      <div class="ui-form__field">
        <UiInput
          v-model="form.phone"
          :placeholder="$t('form.phone')"
        />
      </div>

      <div class="ui-form__field">
        <UiInput
          v-model="form.email"
          :placeholder="$t('form.email')"
        />
      </div>

      <div class="ui-form__field">
        <UiInput
          v-model="form.topic"
          :placeholder="$t('form.topic')"
        />
      </div>
    </div>

    <UiCheckbox
      value="item.value"
      label="Accept privacy policy"
      class="ui-form__checkbox"
      :checked="form.isPrivacyPolicyAccepted"
      @change="form.isPrivacyPolicyAccepted = $event"
    >
      <span>
        {{ $t('checkbox.accept') }}
      </span>

      <span class="ui-form__text--underline">
        {{ $t('checkbox.privacyPolicy') }}
      </span>
    </UiCheckbox>

    <UiButton
      class="ui-form__button"
      view="default"
      size="small"
      type="submit"
      :is-expanded="true"
      :is-disabled="isFormInvalid || isLoading"
    >
      {{ $t('button.leaveRequest') }}
    </UiButton>

    <ModalsContainer />
  </form>
</template>

<script lang="ts" setup>
import { ModalsContainer, useModal } from 'vue-final-modal'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

import UiInput from '@/components/ui/UiInput.vue'
import UiButton from '@/components/ui/UiButton.vue'
import UiCheckbox from '@/components/ui/UiCheckbox.vue'
import UiModal from '@/components/ui/UiModal.vue'

interface FormParams {
  name: string
  phone: string
  email: string
  topic: string
  isPrivacyPolicyAccepted: boolean
}

const formRules = {
  name: { required },
  phone: { required },
  email: { required, email },
  isPrivacyPolicyAccepted: { required }
}

const isLoading = ref(false);
const form: FormParams = reactive({
  name: '',
  phone: '',
  email: '',
  topic: '',
  isPrivacyPolicyAccepted: false,
})

const v$ = useVuelidate(formRules, form)

const { open, close } = useModal({
  component: UiModal,
  attrs: {
    onConfirm() {
      close()
      clearForm()
    },
  },
})

const isFormInvalid = computed(() => v$.value.$invalid || !form.isPrivacyPolicyAccepted)

const clearForm = (): void => {
  form.name = ''
  form.phone = ''
  form.email = ''
  form.topic = ''
  form.isPrivacyPolicyAccepted = false
}

const openModal = async (): Promise<void> => {
  const formDataString = `Name=${form.name}&Email=${form.email}&Phone=${form.phone}&Topic=${form.topic}`;

  isLoading.value = true;

  try {
    await fetch('https://script.google.com/macros/s/AKfycbzFpX7aD3z6pMSljiqQlFnLj2qalW3bmf7OJ_HYOwEmOM3j8OvE6JILsYg5dGVqFtM9/exec', {
      mode: 'no-cors',
      redirect: "follow",
      method: "POST",
      body: formDataString,
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    });

    open()
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers';

.ui-form {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: $color-white-text-02;
  padding: 28px 16px 36px 16px;
  z-index: 1;

  @include media-breakpoint-up(md) {
    background-color: $color-white;
    padding: 36px;
  }

  &__fields {
    display: flex;
    flex-direction: column;
    row-gap: 12px;

    @include media-breakpoint-up(md) {
      row-gap: 16px;
    }
  }

  &__field {
    border-bottom: 1px solid #DFDFDF;

    @include media-breakpoint-up(md) {
      border-bottom-color: #D4DCE5;
    }
  }

  &__checkbox {
    margin-top: 24px;

    @include media-breakpoint-up(md) {
      margin-top: 20px;
    }
  }

  &__text {
    &--underline {
      text-decoration: underline;
    }
  }

  &__button {
    margin-top: 36px;

    @include media-breakpoint-up(md) {
      margin-top: 56px;
      max-width: 247px;
    }
  }

  &__excel {
    display: none;
  }
}
</style>
