<template>
  <div class="centerx">
    <vs-upload multiple automatic action="https://jsonplaceholder.typicode.com/posts/" @on-success="successUpload" />
  </div>
</template>

<script>
export default {
  methods:{
    successUpload(){
      this.$vs.notify({color:'success',title:'Upload Success',text:'Lorem ipsum dolor sit amet, consectetur'})
    }
  }
}
</script>

<style lang="css">
</style>
