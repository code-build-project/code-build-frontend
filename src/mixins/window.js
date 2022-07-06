export default {
    data() {
        return {
            width: 0,
            isDesktop: true,
        };
    },

    mounted() {
        this.windowUpdateWidth();
        window.addEventListener('resize', this.windowUpdateWidth);
    },

    methods: {
        windowUpdateWidth() {
            this.width = window.innerWidth;

            if (this.width < 1161) {
                this.isDesktop = false;
            } else {
                this.isDesktop = true;
            }
        }
    }
};