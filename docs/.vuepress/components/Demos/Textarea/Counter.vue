<template>
  <div>
    <vs-textarea counter="20" label="Counter: 20" v-model:counter-danger="counterDanger" v-model="textarea" />
  </div>
</template>

<script>
export default {
  data:()=>({
    textarea: '',
    counterDanger: false
  })
}
</script>

<style lang="stylus">
</style>
