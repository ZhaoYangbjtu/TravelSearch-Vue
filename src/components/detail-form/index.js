

export default {

    props : ['placeDetail'],

    components: {

    },

    data() {
        return {

            photoUrl : "https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyAt4bmRzAJ7Gb91HAXxouXDWS1NJdGxtl4&maxwidth=750&photoreference=",
            address : this.placeDetail.formatted_address,
            phone : this.placeDetail.formatted_phone_number,
            price : this.placeDetail.price_level,
            rate : this.placeDetail.rating,
            googlePage : this.placeDetail.url,
            website : this.placeDetail.website

        }
    },



    methods: {
        showSearchResult(){
            this.$emit("showSearchResult", "true");

        },
        initMap(){
            let latitude = 34.0237495
            let longitude = -118.2903984
            var uluru= new google.maps.LatLng(latitude, longitude);
            var directionsService = new google.maps.DirectionsService;
            var directionsDisplay = new google.maps.DirectionsRenderer;
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 14,
                center: uluru
            });
            var marker = new google.maps.Marker({
                position: uluru,
                map: map
            });
            directionsDisplay.setMap(map);
            directionsDisplay.setPanel(document.getElementById('routeInformation'));
            console.log("初始化地图");
            this.calculateAndDisplayRoute(directionsService, directionsDisplay);
            console.log("初始化路线")
        },
        calculateAndDisplayRoute(directionsService, directionsDisplay) {
            var start = 'chicago, il';
            var end = 'st louis, mo';
            directionsService.route({
                origin: start,
                destination: end,
                travelMode: 'DRIVING'
            }, function(response, status) {
                if (status === 'OK') {
                    directionsDisplay.setDirections(response);
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
            });
        }
        

    },
    mounted() {
        this.initMap()



    },

}
