<template>
    <div id="app">

        <SearchForm @places = "getPlaceLists" @showFavorite = "showFavorite" @showSearchResult = "showExistSearchResult" />
        <ResultForm v-if = "showSearchResult" :placeLists = "placeLists" @detail="getPlaceDetail" @showDetail = "showExistDetail" @favoriteList = "getFavoriteList"/>
        <FavoriteForm v-if = "showFavoriteList" :favoriteList = "favoriteList"/>
        <DetailForm v-if = "showDetail" :placeDetail = "placeDetail" @showSearchResult = "showExistSearchResult"/>
    </div>
</template>

<script>

import SearchForm from './components/search-form/index.vue'
import ResultForm from './components/result-form/index.vue'
import DetailForm from './components/detail-form/index.vue'
import FavoriteForm from './components/favorite-form/index.vue'


export default {
    name: 'app',
    data() {
        return {
            placeLists : "123",
            placeDetail : "",
            showSearchResult : false,
            showDetail : false,
            showFavoriteList : false,
            favoriteList : JSON.parse(localStorage.getItem("favList"))

        }

    },
    components: {
        SearchForm,
        ResultForm,
        DetailForm,
        FavoriteForm

    },
    mounted() {


    },
    methods : {
        getPlaceLists: function (data) {
            this.placeLists = data;
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
            this.showFavoriteList = false
        },
        showExistDetail: function (data){
            this.showSearchResult = false;
            this.showDetail = true;
        },
        showFavorite : function (data){
            this.showFavoriteList = true;
            this.showSearchResult = false;


        },
        getFavoriteList : function (data){
            this.favoriteList = data;
        }



    },
    computed:{

    }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
