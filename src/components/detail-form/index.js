

export default {

    props : ['placeDetail'],

    components: {

    },

    data() {
        return {

            photoUrl : "https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyAt4bmRzAJ7Gb91HAXxouXDWS1NJdGxtl4&maxwidth=750&photoreference="

        }
    },

    mounted() {



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
        }
        

    }

}
