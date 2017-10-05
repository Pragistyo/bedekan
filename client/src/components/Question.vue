<template lang="html">
  <div class="panel panel-success">
    <div class="panel-heading">
      <h1 class="panel-title">Question</h1>
    </div>
    <div class="panel-body" v-if="!start">
      belum mulai
    </div>
    <div class="panel-body" v-else="start">
      <h2>Pertanyaan nya mengapa why selalu always?</h2>
      <a href="#" class="btn btn-default btn-lg btn-block">Option A</a>
      <a href="#" class="btn btn-default btn-lg btn-block">Option B</a>
      <a href="#" class="btn btn-default btn-lg btn-block">Option C</a>
      <a href="#" class="btn btn-default btn-lg btn-block">Option D</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['pertanyaan'],
  data () {
    return {
      start: true
    }
  }
}
</script>

<style lang="css">
</style>
