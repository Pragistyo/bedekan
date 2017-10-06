<template>
  <a @click="clickanswer" href="#" class="btn btn-default btn-lg btn-block">{{ value }}</a>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    clickanswer () {
      this.$emit('clickanswer', this.value)
    }
  }
}
</script>

<style lang="css">
</style>
