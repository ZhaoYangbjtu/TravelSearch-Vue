

export default {

    props : ['placesList'],
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
            let url = 
            console.log(placeId);
            var p = new Promise(function(resolve, reject){
        //做一些异步操作
                setTimeout(function(){
                    console.log('异步任务1执行完成');
                    resolve('随便什么数据1');
                }, 1000);
            });
            
            fetch(url, options).then(function(response) { 
                // handle HTTP response
                }, function(error) {
 // handle network error
                }
            )
        }
        

    }

}
