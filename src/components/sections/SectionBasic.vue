<template>
  <ChapterHeader>
    <!-- <template #subtitle>
      Inline Scripting
    </template> -->
    <template #header>
      Basic color change
    </template>
    <template #content>
      <div class="prose">
        <ol>
          <li>Define your object once with <InlineCode>text-varcolor-600</InlineCode>, <InlineCode>bg-varcolor-50</InlineCode> etc.</li>
          <li>Fill the variable (dynamically) with e. g. <InlineCode>varcolor-pink</InlineCode>.</li>
          <li><InlineCode>text-varcolor-600</InlineCode> renders as <InlineCode>text-pink-600</InlineCode>, <InlineCode>bg-varcolor-50</InlineCode> renders as <InlineCode>bg-pink-50</InlineCode>.</li>
        </ol>
        <p>Try yourself in <a href="https://play.tailwindcss.com/COEQMLmJAf" target="_blank">Tailwind CSS Playground</a>.</p>
      </div>
    </template>
  </ChapterHeader>
  <Editor :lines="3">
    <template #input>
      <div tabindex="0">
        <pre><code class="language-markdown"><code class="language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="highlight token code-snippet code keyword">{{ selectedColor.varColor }}</span> text-varcolor-600 bg-varcolor-50 border-varcolor-600 hover:bg-varcolor-100 focus:ring-varcolor-500 ...<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  ...<span class="token tag"><span class="token tag"><span class="token punctuation">
&lt;/</span>button</span><span class="token punctuation">&gt;</span></span> </code></code></pre>
      </div>
    </template>
    <template #output>
      <div class="flex justify-center">
        <button type="submit" :class="[selectedColor.varColor, 'text-varcolor-600 bg-varcolor-50 border-varcolor-600 hover:bg-varcolor-100 focus:ring-varcolor-500 inline-flex justify-center py-2 px-4 border shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2']">
          Secondary button
        </button>
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
          <div :class="[color.varColor, active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', 'ring-varcolor-500 -m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none']">
            <RadioGroupLabel as="p" class="sr-only">
              {{ color.name }}
            </RadioGroupLabel>
            <span aria-hidden="true" class="w-8 h-8 rounded-full border border-black border-opacity-10 bg-varcolor-500" />
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
  { name: 'Pink', varColor: 'varcolor-pink' },
  { name: 'Purple', varColor: 'varcolor-purple' },
  { name: 'Blue', varColor: 'varcolor-blue' },
  { name: 'Green', varColor: 'varcolor-green' },
  { name: 'Yellow', varColor: 'varcolor-yellow' },
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
