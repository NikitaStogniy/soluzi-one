<template>
  <div class="index-page">
    <UiHeader />
    <DirectionsSection />
    <AreasSection />
    <OfferSection />
    <TechnologiesSection />
    <CasesSection />
    <ContactsSection />
    <FooterSection />
  </div>
</template>

<script lang="ts" setup>
import UiHeader from '@/components/ui/UiHeader.vue'
import DirectionsSection from '@/components/sections/DirectionsSection.vue'
import AreasSection from '@/components/sections/AreasSection.vue'
import CasesSection from '@/components/sections/CasesSection.vue'
import ContactsSection from '@/components/sections/ContactsSection.vue'
import OfferSection from '@/components/sections/OfferSection.vue'
import FooterSection from '@/components/sections/FooterSection.vue'
import TechnologiesSection from '@/components/sections/TechnologiesSection.vue'
</script>

<style lang="scss" scoped>
.index-page {
  position: relative;
}
</style>
