<template>
  <div class="total">
    <div class="modelx">
      {{chips}}
    </div>
    <vs-chips color="rgb(145, 32, 159)" placeholder="New Element" v-model="chips">
      <vs-chip
        :key="chip"
        @click="remove(chip)"
        v-for="chip in chips" closable>
        {{ chip }}
      </vs-chip>
    </vs-chips>
  </div>
</template>

<script>
export default {
  data(){
    return {
      chips:[
        "Vuejs",
        "Node",
        "Vuesax"
      ]
    }
  },
  methods: {
    remove (item) {
      this.chips.splice(this.chips.indexOf(item), 1)
    }
  }
}
</script>

<style lang="css">
.total {
  width: 100%
}
</style>
