<template>
  <div id="app">
    <span>{{name}} </span>
    <SearchForm @test = "test" />
    <ResultForm :placesList = "name"/>
    <DetailForm />
  </div>
</template>

<script>

import SearchForm from './components/search-form/index.vue'
import ResultForm from './components/result-form/index.vue'
import DetailForm from './components/detail-form/index.vue'


export default {
  name: 'app',
  data() {
    return {
      name : "123"
    }

  },
  components: {
    SearchForm,
    ResultForm,
    DetailForm
    
  },
  mounted() {


  },
  methods : {
    test: function (a) {
      this.name = a ;

    }
  } 
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
