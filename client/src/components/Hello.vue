<template>
  <div class="hello">
    <NavBar/>
    <MainBox />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import MainBox from '@/components/MainBox'
export default {
  name: 'hello',
  components: {
    NavBar,
    MainBox
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
