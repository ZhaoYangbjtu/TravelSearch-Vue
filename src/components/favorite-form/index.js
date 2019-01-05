

export default {

    props : ['favoriteList'],

    data() {
        return {


        }
    },

    mounted() {

    },

    methods: {
        removeItem: function(favItem){
            for(var i=0;i<this.favoriteList.length;i++){
                if(favItem["place_id"]==this.favoriteList[i].place_id){
                    this.favoriteList.splice(i,1)
                    localStorage.setItem("favList",JSON.stringify(this.favoriteList));
                    console.log("remove")
                    break;
                }
            }

        }


    }

}
