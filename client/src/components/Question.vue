<template lang="html">
  <div class="panel panel-success">
    <div class="panel-heading">
      <h1 class="panel-title">Question</h1>
    </div>
    <div class="panel-body" v-if="!start">
      belum mulai
    </div>
    <div class="panel-body" v-else="start">
      <h2>{{ pertanyaan.question }}</h2>
      <ButtonChoice v-if="!freezeButton"
      v-for="(choice, index) in pertanyaan.choice"
      :key="index"
      :value="choice"
      @clickanswer="clickanswer" />

    </div>
  </div>
</template>

<script>
import ButtonChoice from '@/components/Button'

export default {
  props: ['pertanyaan', 'unfreeze'],
  components: {
    ButtonChoice
  },
  data () {
    return {
      start: true,
      freezeButton: false
    }
  },
  methods: {
    clickanswer (choice) {
      // this.selected_answer = choice
      if (this.pertanyaan.answer === choice) { // kalo bener
        console.log('jawaban benar')
        this.$emit('sendscore', 1)
      } else { // kalo salah
        console.log('jawaban salah')
        this.$emit('sendscore', -1)
        this.freezeButton = true
      }
    }
  },
  watch: {
    pertanyaan (newPertanyaan) {
      console.log('pertanyaan berubah')
      this.freezeButton = false
    }
  },
  mounted () {
    console.log('jalanin mounted question')
    // this.freezeButton = false
  }
}
</script>

<style lang="css">
</style>
