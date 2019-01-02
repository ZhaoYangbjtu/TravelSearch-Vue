<template>
  <div id="app">

    <SearchForm @places = "getPlaceLists" />
    <ResultForm v-if = "showSearchResult" :placeLists = "placeLists" @detail="getPlaceDetail" @showDetail = "showExistDetail"/>
    <DetailForm v-if = "showDetail" :placeDetail = "placeDetail" @showSearchResult = "showExistSearchResult"/>
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
          placeLists : "123",
          placeDetail : "",
          showSearchResult : false,
          showDetail : false

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
    getPlaceLists: function (data) {
        this.placeLists = data.results;
        this.showSearchResult = true;
        this.showDetail = false;

    },
    getPlaceDetail: function (data) {
        this.placeDetail = data ;
        this.showSearchResult = false;
        this.showDetail = true;

    },
    showExistSearchResult: function (data){
        this.showSearchResult = true;
        this.showDetail = false;
    },
    showExistDetail: function (data){
        this.showSearchResult = false;
        this.showDetail = true;
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
