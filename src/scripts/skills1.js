import Vue from "vue";

const skill = {
    template: "#skill"
}

const skillsRow = {
    template: "#skills-row",
    components: {
        skill
    },
    props: {
        skill: Object
    }
}


new Vue({
    el: "#skills-component",
    template: "#skills-list",
    components: {
        skillsRow
    },

    data () {
        return {
            skills: {}
        }
    },
    
    created () {
        const data = require("../data/skills.json");
        this.skills = data;
    }
     
    
    /*,
    data: {
        skills: {}
    },
    
    created() {
        const data = require("../data/skills.json");
        this.skills = data;
    }*/
});

/*const skill = {
    template: "#skill",
    props: {
        skillName: String,
        skillPercents: Number
    },
    methods: {
        drawCircle() {
            const circle = this.$ref["color-circle"];
            const dashOffset = parseInt(getComputedStyle(circle).getPropertyValue("stroke-dasharray"));
            const percent = (dashOffset / 100) * (100 - this.skillPercents);
            circle.style.strokeDashoffset = percent;
        }
    },
    mounted () {
        this.drawCircle();
    }
};

const skillsRow = {
    template: "#skills-row",
    components: {
        skill
    },
    props: {
        skillRowObject: Object
    }
};*/


