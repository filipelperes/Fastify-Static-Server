<template>
  <ul class="!my-9 min-h-28 max-h-[55vh] overflow-x-hidden overflow-y-auto w-1/2 border border-neutral-50 rounded-xl">
    <li class="text-sky-400 hover:text-sky-800 text-2xl text-center !py-2" v-for="file in files" :key="file">
      <a :href="`/files/${file}`" download>{{ file }}</a>
    </li>
  </ul>
</template>

<!-- SHORTHAND PARA EXPORT DEFAULT -->
<script lang="ts" setup>
defineProps<{
  files: string[]
}>()
</script>

<!-- SEM O SHORTHAND
<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'FileList',
  props: {
    files: {
      type: Array as PropType<string[]>,
      required: true
    }
  }
})
</script>
-->
