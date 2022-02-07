
<template>
  <div class="px-4 pb-6 mx-auto mb-2 max-w-screen-lg xl:px-0">
    <p class="mb-1 font-sans text-base text-primary-600 uppercase">
      <slot name="subtitle" />
    </p>
    <h2 class="pb-3 font-sans text-3xl font-bold">
      <slot name="header" />
    </h2>
    <p class="pb-2 mx-auto mt-2 text-lg">
      <slot name="content" />
    </p>
  </div>
</template>
