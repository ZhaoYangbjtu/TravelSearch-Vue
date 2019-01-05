

export default {


    components: {

    },

    data() {
        return {
            keyword : "",
            category : "",
            distance : "",
            specify_location : null,
            latitude : "",
            longitude : "",
            isDisabled : true,
            isChecked : false,
            isRequired : false,
            keywordValidated : false,
            specify_locationValidated : false,
            isDisplayed : false,
            isResults: true



        }
    },

    mounted() {

    },

    methods: {
        searchPlaces(){
            if(this.specify_location == null && this.isChecked == true && this.keyword == ""){
                this.keywordValidated = true;
                this.specify_locationValidated = true;
            }
            else if (this.specify_location == null && this.isChecked == true){
                console.log("specigyvalidate")
                this.specify_locationValidated = true;
            }
            else if (this.keyword ==""){
                this.keywordValidated = true;
            }
            else {
                this.isDisplayed = true
                this.latitude = 34.0237495
                this.longitude = -118.2903984
                let ip = 'http://ip-api.com/json'

                console.log(this.keyword + this.category + this.distance);
                self = this
                fetch(ip).then(function (response) {
                    console.log("response", response)
                    return response.json();
                }).then(function (data) {
                    console.log("data", data)
                    self.latitude = data.lat
                    console.log(self.latitude)
                    self.longitude = data.lon
                    console.log(self.longitude)
                    var url = 'http://yang923nodejs.us-west-1.elasticbeanstalk.com/request_nearby_places?category=' + self.category + '&distance=16093.44&keyword=' + self.keyword + '&' +
                        'latitude=' + self.latitude + '&longitude=' + self.longitude + '&specify_location=' + self.specify_location;
                    console.log(url)
                    fetch(url).then(function (response) {
                        return response.json();
                    }).then(function (data) {
                        console.log(data)
                        self.isDisplayed = false
                        self.$emit("places", data)
                    }).catch(function (e) {
                        console.log("error google")
                    })

                }).catch(function (e) {
                    console.log("error api")
                })
            }
        },
        clearForm(){
            this.keyword = ""
            this.category = ""
            this.distance = ""
            this.specify_location = ""
        },
        isChange(){
            if(this.isChecked == false){
                this.isChecked = true;
                this.isDisabled = false;
                this.isRequired = true;
            }
            else{
                this.isChecked = false;
                this.isDisabled = true
                this.isRequired = false;
            }

        },
        displayResult(){
            this.isResults = true;
            this.$emit("showSearchResult",true)

        },
        displayFavorite(){
            this.isResults = false;
            this.$emit("showFavorite",true)

        }

        

    }

}
