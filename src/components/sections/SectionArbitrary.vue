<template>
  <ChapterHeader>
    <!-- <template #subtitle>
      Inline Scripting
    </template> -->
    <template #header>
      Arbitrary Values
    </template>
    <template #content>
      <div class="prose">
        <ul>
          <li>You can set and use arbitrary values for both spacings and colors. </li>
          <li>In the example below height and roundedness resize perfectly with the width of the object.</li>
        </ul>
        <p>Try yourself in <a href="https://play.tailwindcss.com/0r55inbvBq" target="_blank">Tailwind CSS Playground</a>.</p>
      </div>
    </template>
  </ChapterHeader>
  <Editor :lines="8">
    <template #input>
      <div tabindex="0">
        <pre><code class="language-markdown"><code class="language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span v-for="option in sizes" :key="option.value"><span :class="[option.name === size.name && 'highlight', 'token code-snippet code keyword']">{{ option.written }}</span>
            </span><span class="highlight token code-snippet code keyword">rounded-[calc(var(--tw-varspacing)*0.2)]</span>
            <span class="highlight token code-snippet code keyword">h-[calc(var(--tw-varspacing)*1.2)]</span>
            w-varspacing ...<span class="token punctuation">"</span></span>
<span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></code></pre>
      </div>
    </template>
    <template #output>
      <div class="flex justify-center items-center h-32">
        <div :class="[size.class, 'transition-all w-varspacing rounded-[calc(var(--tw-varspacing)*0.2)] h-[calc(var(--tw-varspacing)*1.4)] bg-pink-500 shadow-md']" />
      </div>
    </template>
  </Editor>
  <div ref="el" class="left-0 mx-auto mt-8 w-full text-center">
    <RadioGroup v-model="size" class="mt-2">
      <div class="grid grid-cols-4 gap-3 mx-auto max-w-xs">
        <RadioGroupOption v-for="option in sizes" :key="option.name" v-slot="{ active, checked }" as="template" :value="option">
          <div :class="[active ? 'ring-2 ring-offset-2 ring-primary-500' : '', checked ? 'bg-primary-600 border-transparent text-white hover:bg-primary-700' : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50', 'cursor-pointer focus:outline-none border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium sm:flex-1']">
            <RadioGroupLabel as="p">
              <span class="font-mono">{{ option.name }}</span>
            </RadioGroupLabel>
          </div>
        </RadioGroupOption>
      </div>
    </RadioGroup>
  </div>
</template>

<script>
import { ref } from 'vue'
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'

const sizes = [
  { name: '< sm', class: 'varspacing-[21px]', written: 'varspacing-[21px]' },
  { name: 'sm', class: 'varspacing-12', written: 'sm:varspacing-12' },
  { name: 'md', class: 'varspacing-16', written: 'md:varspacing-16' },
  { name: 'lg', class: 'varspacing-24', written: 'lg:varspacing-24' },
]

export default {
  components: {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
  },
  setup() {
    const size = ref(sizes[0])

    return {
      sizes,
      size,
    }
  },
}
</script>
