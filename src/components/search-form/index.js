

export default {


    components: {

    },

    data() {
        return {
            keyword : "",
            category : "",
            distance : "",
            specify_location : ""


        }
    },

    mounted() {

    },

    methods: {
        searchPlaces(){

            let latitude = 34.0237495
            let longitude = -118.2903984
            let url = 'http://yang923nodejs.us-west-1.elasticbeanstalk.com/request_nearby_places?category=default&distance=16093.44&keyword=usc&latitude=34.0021&longitude=-118.282'
            console.log(this.keyword+this.category+this.distance);
            self = this
            fetch(url).then(function(response){
                return response.json();
            }).then(function(data){
                console.log(data)
                self.$emit("places", data)
            }).catch(function(e){
                console.log("error")
            })
        },
        clearForm(){
            this.keyword = ""
            this.category = ""
            this.distance = ""
            this.specify_location = ""
        }
        

    }

}
