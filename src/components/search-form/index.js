

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
            this.$emit("test", '我是子元素传过来的')
            let latitude = 34.0237495
            let longitude = -118.2903984
            let url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+latitude+','+longitude+'&radius='+this.distance+'&type='+this.category+'&keyword='+this.keyword+'&key=AIzaSyAt4bmRzAJ7Gb91HAXxouXDWS1NJdGxtl4'
            console.log(this.keyword+this.category+this.distance);
 //            fetch(url).then(
 //                function(response) { 
 //                    console.log(response);
 //                    this.$emit('test', '我是子元素传过来的')

 //                // handle HTTP response
 //                }, 
 //                function(error) {
 // // handle network error
 //                }
 //            )
        },
        clearForm(){
            this.keyword = ""
            this.category = ""
            this.distance = ""
            this.specify_location = ""
        }
        

    }

}
