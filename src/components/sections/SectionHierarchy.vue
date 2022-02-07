<template>
  <ChapterHeader>
    <!-- <template #subtitle>
      Inline Scripting
    </template> -->
    <template #header>
      Hierarchy and subvalues
    </template>
    <template #content>
      <div class="prose">
        <ul>
          <li>Variables are automatically consumable by every child element.</li>
          <li>You can overwrite variables in every child.</li>
          <li>You can overwrite single variants of the variable with other colors or opacities.</li>
        </ul>
      </div>
    </template>
  </ChapterHeader>
  <Editor :lines="6">
    <template #input>
      <div tabindex="0">
        <pre><code class="language-markdown"><code class="language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="highlight token code-snippet code keyword">{{ selectedColor.varColor }}</span> text-var-600 bg-var-50 border-var-600 hover:bg-var-100 focus:ring-var-500 ...<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-white bg-var-600 border-var-800 hover:bg-var-700 focus:ring-var-500 ...<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-var-600 bg-var-50 border-var-600 hover:bg-var-100 focus:ring-var-500 ...<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Secondary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-var-600 bg-var-50 border-var-50 hover:bg-var-100 focus:ring-var-500 ...<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Tertiary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="highlight token code-snippet code keyword">{{ selectedColor.varDisabled }}</span> text-var-600 bg-var-50 border-var-50 ...<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Disabled<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></span></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></code></pre>
      </div>
    </template>
    <template #output>
      <div class="flex justify-center">
        <div :class="[selectedColor.varColor, 'flex flex-row place-items-start space-x-2 sm:flex-row sm:space-y-0 sm:space-x-2']">
          <button type="submit" class="inline-flex justify-center py-2 px-4 text-sm font-medium text-white bg-var-600 hover:bg-var-700 rounded-md border border-var-800 focus:outline-none focus:ring-2 focus:ring-var-500 focus:ring-offset-2 shadow-sm">
            Primary
          </button>
          <button type="submit" class="inline-flex justify-center py-2 px-4 text-sm font-medium text-var-600 bg-var-50 hover:bg-var-100 rounded-md border border-var-600 focus:outline-none focus:ring-2 focus:ring-var-500 focus:ring-offset-2 shadow-sm">
            Secondary
          </button>
          <button type="submit" class="inline-flex justify-center py-2 px-4 text-sm font-medium text-var-600 bg-var-50 hover:bg-var-100 rounded-md border border-var-50 focus:outline-none focus:ring-2 focus:ring-var-500 focus:ring-offset-2 shadow-sm">
            Tertiary
          </button>
          <button Disabled type="submit" :class="[selectedColor.varDisabled, 'inline-flex justify-center py-2 px-4 text-sm font-medium text-var-600 bg-var-50 rounded-md border border-var-50 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-sm']">
            Disabled
          </button>
        </div>
      </div>
    </template>
  </Editor>
  <div ref="el" class="left-0 mt-8 w-full text-center">
    <RadioGroup v-model="selectedColor">
      <!-- <RadioGroupLabel class="block text-sm font-medium text-gray-700">
        Switch color
      </RadioGroupLabel> -->
      <div class="flex justify-center items-center mt-4 space-x-3">
        <RadioGroupOption v-for="color in colors" :key="color.name" v-slot="{ active, checked }" as="template" :value="color">
          <div :class="[color.varColor, active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', 'ring-var-500 -m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none']">
            <RadioGroupLabel as="p" class="sr-only">
              {{ color.name }}
            </RadioGroupLabel>
            <span aria-hidden="true" class="w-8 h-8 bg-var-500 rounded-full border border-black border-opacity-10" />
          </div>
        </RadioGroupOption>
      </div>
    </RadioGroup>
  </div>
</template>

<script>
import { ref } from 'vue'
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'

const colors = [
  { name: 'Pink', varColor: 'var-pink', varDisabled: 'var-600-pink/20' },
  { name: 'Purple', varColor: 'var-purple', varDisabled: 'var-600-purple/20' },
  { name: 'Blue', varColor: 'var-blue', varDisabled: 'var-600-blue/20' },
  { name: 'Green', varColor: 'var-green', varDisabled: 'var-600-green/20' },
  { name: 'Yellow', varColor: 'var-yellow', varDisabled: 'var-600-yellow/20' },
]

export default {
  components: {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
  },
  setup() {
    const selectedColor = ref(colors[0])

    return {
      colors,
      selectedColor,
    }
  },
}
</script>
