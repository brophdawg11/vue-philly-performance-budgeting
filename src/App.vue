<template>
  <div id="app">
    <h1>Welcome to my App!</h1>
    <h3>The date and time is {{date}}</h3>
    <h3>The weather is ... {{weather}}</h3>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'app',
  data() {
    return {
      date: null,
      weather: 'Clear?',
    };
  },
  methods: {
    setDate() {
      this.date = moment().format('MMMM Do YYYY, h:mm:ss a');
    }
  },
  created() {
    this.setDate();
    setInterval(() => this.setDate(), 1000);
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
