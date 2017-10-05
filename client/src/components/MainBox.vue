<template lang="html">
  <div class="container">
    <div class="col-md-2">
      <Player1/>
    </div>
    <div class="col-md-8">
      <Question/>
    </div>
    <div class="col-md-2">
      <Player2/>
    </div>
  </div>
</template>

<script>
import Player1 from '@/components/Player1'
import Player2 from '@/components/Player2'
import Question from '@/components/Question'
export default {
  components: {
    Player1,
    Player2,
    Question
  }
}
</script>

<style lang="css">
</style>
