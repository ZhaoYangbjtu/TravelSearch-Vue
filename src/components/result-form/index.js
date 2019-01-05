

export default {

    props : ['placeLists'],
    components: {

    },

    data() {
        return {
            isFavorite : false,
            favoritePlaceId :[],
            allPlaceLists:[],
            page:0
        }
    },

    mounted() {
        for(var i=0;i<JSON.parse(localStorage.getItem("favList")).length;i++) {
            this.favoritePlaceId.push(JSON.parse(localStorage.getItem("favList"))[i].place_id)

        }
    },

    methods: {
        requestPlaceDetail(placeId){

            console.log(placeId);
            var p = new Promise(function(resolve, reject){
        //做一些异步操作
                setTimeout(function(){
                    console.log('异步任务1执行完成');
                    resolve('随便什么数据1');
                }, 1000);
            });
            let url = 'http://yang923nodejs.us-west-1.elasticbeanstalk.com/request_place_detail?id='+placeId;
            var self = this

            fetch(url).then(function(response){
                return response.json();
            }).then(function(data){
                console.log(data)
                self.$emit("detail", data.result)
            }).catch(function(e){
                console.log("error")
            })
        },
        showDetail(){
            this.$emit("showDetail", "true");
        },
        addOrRemoveItem(favItem){
            console.log(favItem);

            var favList = JSON.parse(localStorage.getItem("favList"));

            if(favList == null){
                favList = new Array()
            }
            var flag = 0
            for(var i=0;i<favList.length;i++) {
                if (favItem.place_id == favList[i].place_id){
                    flag = 1
                    console.log("remove")
                    break
                }
            }
            if(flag ==0 ) {
                favList.push(favItem);
                this.favoritePlaceId.push(favItem.place_id)
                localStorage.setItem("favList",JSON.stringify(favList));
                this.$emit("favoriteList",favList)
                $("#"+favItem.place_id).removeClass("far");
                $("#"+favItem.place_id).addClass("fas");
                $("#"+favItem.place_id).css("color","#EEEE00");
            }else{
                favList.splice(i,1)
                this.favoritePlaceId.splice(i,1)
                localStorage.setItem("favList",JSON.stringify(favList));
                console.log("remove")
                this.$emit("favoriteList",favList)
                $("#"+favItem.place_id).removeClass("fas");
                $("#"+favItem.place_id).addClass("far");
                $("#"+favItem.place_id).css("color","#000000");

            }





        },
        inFavoriteList : function(item){
            for(var i=0;i<JSON.parse(localStorage.getItem("favList")).length;i++) {
                if (item.place_id == JSON.parse(localStorage.getItem("favList"))[i].place_id){
                    console.log(true)
                    return true
                }
            }
            console.log(false)
            return false
        },
        requestNextPage : function(){
            let url = 'http://yang923nodejs.us-west-1.elasticbeanstalk.com/request_next_page?pagetoken='+this.placeLists.next_page_token
            self = this
            fetch(url).then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log(data)
                self.allPlaceLists.push(self.placeLists)
                console.log("ha")

                self.placeLists = data
                console.log("ha")
                self.page ++;
                console.log("ha")

            }).catch(function (e) {
                console.log(e)
            })

        },
        showPrevPage : function(){
            this.page--;
            this.placeLists = this.allPlaceLists[this.page]


        }


    }

}
