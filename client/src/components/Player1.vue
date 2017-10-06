<template lang="html">
  <div class="panel panel-warning">
  <div class="panel-heading">
  <img src="../assets/avatar/003-boy.png" alt="player1">
  <h3 class="panel-title">Player 1</h3>
  <h3 class="panel-title">{{dataplayer.playername}}</h3>
  </div>
  <div class="panel-body">

    Score : {{ dataplayer.score }}
  </div>
</div>
</template>

<script>
export default {
  props: ['dataplayer']
}
</script>

<style lang="css">
</style>
