<template>
  <ul>
    <li v-for="file in files" :key="file">
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
