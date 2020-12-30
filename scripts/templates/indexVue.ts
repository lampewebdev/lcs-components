export default ({newPackageName}: {newPackageName: string}): string => {
  return `<template>
  <div class="button">
      
  </div>
</template>

<script lang='ts'>
  import { defineComponent } from 'vue'
  export default defineComponent({
      name: 'button',
      props: { },
      setup(props) {
        
      },
  })
</script>
  
<style scoped>

</style>`
}