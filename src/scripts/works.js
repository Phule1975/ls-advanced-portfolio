import Vue from "vue";

const thumbs = {
    template: "#slider-thumbs"
};

const btns = {
    template: "#slider-btns"
};

const display = {
    template: "#slider-display",
    components: {
        btns, thumbs
    }
};

const tags = {
    template: "#slider-tags"
};

const info = {
    template: "#slider-info",
    components: {
        tags
    }
};

new Vue ({
    template: "#slider-container",
    el: "#slider-component",
    components: {
        display,
        info
    },
    data() {
        return {
            works: []
        }
    },
    created () {
        const data = require("../data/works.json");
        this.works = data;
    }
});