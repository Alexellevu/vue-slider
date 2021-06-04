const root = new Vue({
    el:'#root',
    data:{
        counter:0,
    
        images:['https://www.boxeringweb.net/images/j2xml/f7a7406ca89d4c6be13536e37f397aa7.jpg',//loma
                'https://boxe-mania.com/wp-content/uploads/2019/08/Rocky-Marciano.jpg',
                'https://www.fattimarziali.it/wp-content/uploads/2020/07/roy-jones-jr.jpg',
                'https://sportpowermind.it/wp-content/uploads/2016/06/tumblr_lvte6l2lAp1qbsg6oo1_1280.jpg',
                'https://i.pinimg.com/originals/9c/d2/35/9cd235803feb4a951d4a8c5d45cbd7da.jpg',
                'https://i.pinimg.com/originals/c4/41/5a/c4415abc3de2142dcb58298bb1b8fc76.jpg',//Paquiao
                'https://www.sportmagazine.it/wp-content/uploads/2021/01/canelo-alvarez-storia.png'//Canelo
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
        },
        pointSelector(index) {
          this.counter = index;
            if(this.counter === index){
              return this.counter;

                 }else{
                    this.counter= index;
                } 
        }


    },

    mounted(){
        document.addEventListener('keyup', (e) => {
            console.log(e.key);
            if(e.key === 'ArrowLeft'){
                this.prev();
            }else if(e.key === 'ArrowRight'){
                this.next();
            }
        }),

        setInterval(this.next, 5000 );
      
    }
})
