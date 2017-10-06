<template lang="html">
  <div class="panel panel-success">
    <div class="panel-heading">
      <h1 class="panel-title">Winner</h1>
    </div>
    <div class="panel-body">

      <h1> {{ datapemenang[0]['.value'] }} </h1>
    </div>
  </div>
</template>

<script>
// import ButtonChoice from '@/components/Button'

export default {
  props: ['datapemenang']
}
</script>

<style lang="css">
</style>
