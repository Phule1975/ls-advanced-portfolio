import Vue from "vue"
import Flickity from 'vue-flickity';

new Vue({
    el: "#reviews",
    components: {
        Flickity
    },
  
     data() {
        return {
            flickityOptions: {
                groupCells: 2,
                prevNextButtons: false,
                pageDots: false
        
        // any options from Flickity can be used
            }
        }
    },
  
    methods: {
        next() {
            this.$refs.flickity.next();
        },
    
        previous() {
            this.$refs.flickity.previous();
        }
    }
});