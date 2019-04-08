import Vue from "vue";

const thumbs = {
  template: "#slider-thumbs",
  props: {
    works: Array //1:17:27
  }
};

const btns = {
  template: "#slider-btns"
};

const display = {
  template: "#slider-display",
  components: {
    btns, thumbs
  },
  props: {
    works: Array
  }
};

const tags = {
  template: "#slider-tags"
};

const info = {
  template: "#slider-info",
  omponents: {
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