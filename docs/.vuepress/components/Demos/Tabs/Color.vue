<template>
  <div class="">
    <vs-tabs hover-line="100%">
      <vs-tab color="success" defaultColor="success" label="Success">
        <div class="con-tab-ejemplo">
          Success
        </div>
      </vs-tab>
      <vs-tab color="danger" defaultColor="danger" label="Danger">
        <div class="con-tab-ejemplo">
          Danger
        </div>
      </vs-tab>
      <vs-tab color="warning" label="Warning">
        <div class="con-tab-ejemplo">
          Warning
        </div>
      </vs-tab>
      <vs-tab color="dark" label="Dark">
        <div class="con-tab-ejemplo">
          Dark
        </div>
      </vs-tab>
      <vs-tab color="rgb(16, 233, 179)" label="RGB | HEX">
        <div class="con-tab-ejemplo">
          RGB | HEX
        </div>
      </vs-tab>
      <vs-tab label="Default">
        <div class="con-tab-ejemplo">
          Default
        </div>
      </vs-tab>
    </vs-tabs>
  </div>
</template>

<script>
export default {
  data:()=>({
    colorx:'success'
  }),
}
</script>

<style lang="css">
</style>
