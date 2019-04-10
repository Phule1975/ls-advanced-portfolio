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
    works: Array,
    currentWork: Object
  }
};

const tags = {
  template: "#slider-tags"
};

const info = {
  template: "#slider-info",
  components: {
    tags
  },
  props: {
    currentWork: Object}
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
      works: [],
      currentWork: {},
      currentIndex: 0 //1:37:57
    };
  },
  methods: {
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requiredPic = require(`../images/content/${item.photo}`);
        item.photo = requiredPic;
        return item;
      })
    },
    handleSlide(derection) {
      
    } 
  },

  created () {
    const data = require("../data/works.json");
    this.works = this.makeArrWithRequiredImages(data);

    this.currentWork = this.works[0];
  }
});