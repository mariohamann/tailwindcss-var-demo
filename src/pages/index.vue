
<template>
  <header>
    <Hero />
  </header>

  <main class="py-8 leading-loose text-gray-900 bg-gray-100">
    <div class="my-24 space-y-24 text-lg">
      <section>
        <SectionBasic />
      </section>
      <section class="!mt-36">
        <SectionHierarchy />
      </section>
      <section class="!mt-36">
        <SectionSizes />
      </section>
      <section class="!mt-36">
        <SectionArbitrary />
      </section>
    </div>
  </main>

  <PartFooter class="" />
</template>

<script setup lang="ts">
import 'prism-theme-vars/base.css'
</script>

<route lang="yaml">
name: home
</route>
