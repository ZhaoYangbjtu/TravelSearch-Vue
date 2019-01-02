

export default {

    props : ['placeLists'],
    components: {

    },

    data() {
        return {

        }
    },

    mounted() {

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
        }
        

    }

}
