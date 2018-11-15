<template>
  <div id="app">
    <h1>Welcome to my App!</h1>
    <h3>Today's date is {{date}}</h3>
    <h3>Today's weather is ... {{weather}}</h3>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      date: new Date().toISOString(),
      weather: 'Sunny?'
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
