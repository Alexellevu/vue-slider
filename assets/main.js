const root = new Vue({
    el:'#root',
    data:{
        counter:0,
        images:['https://euro.venum.com//media/wysiwyg/loma/desk/VISUEL_SLIDER_03_02.jpg',//loma
                'https://boxe-mania.com/wp-content/uploads/2019/08/Rocky-Marciano.jpg',
                'https://www.fattimarziali.it/wp-content/uploads/2020/07/roy-jones-jr.jpg',
                'https://i.pinimg.com/originals/9c/d2/35/9cd235803feb4a951d4a8c5d45cbd7da.jpg',
                'https://i.pinimg.com/originals/c4/41/5a/c4415abc3de2142dcb58298bb1b8fc76.jpg'//Paquiao
            ]
    },

    methods:{
        prev(){
            if(this.counter === 0){
                return this.counter = this.images.length-1;
            }else{
                return this.counter-=1;
            }
        },

        next(){
            if(this.counter === this.images.length-1){
                return this.counter = 0;
            }else{
                return this.counter+=1;
            }
        }


    }
})
