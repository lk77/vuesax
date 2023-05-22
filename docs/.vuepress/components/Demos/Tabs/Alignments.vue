<template>
  <div class="">
    <h3>
      Default
    </h3>
    <vs-tabs :hover-line="true" :hover-text="true">
      <vs-tab label="Home">
        <div>

        </div>
      </vs-tab>
      <vs-tab label="Documents">
        <div>

        </div>
      </vs-tab>
      <vs-tab label="Contributors">
        <div>

        </div>
      </vs-tab>
      <vs-tab label="Ecosystem">
        <div>

        </div>
      </vs-tab>
    </vs-tabs>

    <h3>
      Center
    </h3>
    <vs-tabs alignment="center" hover-line="0.3" hover-text="1">
      <vs-tab label="Home">
        <div>

        </div>
      </vs-tab>
      <vs-tab label="Documents">
        <div>

        </div>
      </vs-tab>
      <vs-tab label="Contributors">
        <div>

        </div>
      </vs-tab>
      <vs-tab label="Ecosystem">
        <div>

        </div>
      </vs-tab>
    </vs-tabs>

    <h3>
      Right
    </h3>
    <vs-tabs alignment="right" hover-line="30%" hover-text="100%">
      <vs-tab label="Home">
        <div>

        </div>
      </vs-tab>
      <vs-tab label="Documents">
        <div>

        </div>
      </vs-tab>
      <vs-tab label="Contributors">
        <div>

        </div>
      </vs-tab>
      <vs-tab label="Ecosystem">
        <div>

        </div>
      </vs-tab>
    </vs-tabs>


    <h3>
      Fixed
    </h3>
    <vs-tabs alignment="fixed" hover-line hover-text>
      <vs-tab label="Home">
        <div>

        </div>
      </vs-tab>
      <vs-tab label="Documents">
        <div>

        </div>
      </vs-tab>
      <vs-tab label="Contributors">
        <div>

        </div>
      </vs-tab>
      <vs-tab label="Ecosystem">
        <div>

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
