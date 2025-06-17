<template>
  <ul class="list-none mt-6">
    <li class="text-cyan-600 hover:text-sky-800 text-2xl" v-for="file in files" :key="file">
      <a class="!no-underline !text-inherit" :href="`/files/${file}`" download>{{ file }}</a>
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
