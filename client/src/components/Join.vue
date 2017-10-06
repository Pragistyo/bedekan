<template>
  <form v-on:submit.prevent='submitMulai' method="post">
    <input v-model="formUsername.username" type="text" name="" value="" placeholder="username">
    <input type="submit" name="" value="Mulai">
  </form>
</template>

<script>
export default {
  data () {
    return {
      formUsername : {username}
    }
  },
  methods: {
    // submitMulai () {
    //
    // }
  }
}
</script>

<style lang="css">
</style>
