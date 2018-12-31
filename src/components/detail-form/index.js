

export default {
    props : ['placeDetail'],

    components: {

    },

    data() {
        return {
            photos : "",
            photoUrl : "https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyAt4bmRzAJ7Gb91HAXxouXDWS1NJdGxtl4&maxwidth=750&photoreference="

        }
    },

    mounted() {
        this.photos = this.placeDetail.photos
        console.log(this.photos)

    },

    methods: {
        

    }

}
