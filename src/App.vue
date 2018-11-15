<template>
  <div id="app">
    <h1>Welcome to my App!</h1>
    <h3>The date and time is {{date}}</h3>
    <h3>The weather is ... {{weather}}</h3>
  </div>
</template>

<script>
import $ from 'jquery';
import _ from 'lodash';
import moment from 'moment';

export default {
  name: 'app',
  data() {
    return {
      date: null,
      weather: '???',
    };
  },
  methods: {
    loadWeather() {
      const url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22philadelphia%2C%20pa%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

      $.ajax({
        url, success: result => {
          this.weather = _.get(result, 'query.results.channel.item.condition.text');
        }
      });
    },
    setDate() {
      this.date = moment().format('MMMM Do YYYY, h:mm:ss a');
    }
  },
  created() {
    this.setDate();
    setInterval(() => this.setDate(), 1000);
    setTimeout(() => this.loadWeather(), 1000);

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
