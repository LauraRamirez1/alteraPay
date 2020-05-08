var app=new Vue({
    el: '#app',
    data() {
        return {
            make:"",
        }
    }, 
    methods: {
        renderSlider1() {
            var slider1 = document.getElementById('carrusel_mobile1')
            if(slider1) {
                var tns_slider1 = tns({
                    container: '#carrusel_mobile1',
                    navPosition:"bottom",
                    controls:false,
                    speed:1000,
                })
            }
        },
        renderSlider2() {
            var slider2 = document.getElementById('carrusel_mobile2')
            if(slider2) {
                var tns_slider1 = tns({
                    container: '#carrusel_mobile2',
                    navPosition:"bottom",
                    controls:false,
                    speed:1000,
                    responsive: {
                        420: {
                          items: 1,
                        },
                        650: {
                          items: 2,
                        },
                        768: {
                          items: 3,
                        },
                    }
                })
            }
        },
    },
    
    mounted() {
        this.renderSlider1()
        this.renderSlider2()
    }
});


