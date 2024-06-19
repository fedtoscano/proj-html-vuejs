<script>
import { store } from '../../store.js';

export default {
data() {
return {
    store,
    x: 0,
}
},
methods: {
    previous() {
            if (this.x <= 0) {
                this.x = this.store.CarouselContent.length - 1;
            } else{
                this.x --;
            }
        },
    next() {
            if (this.x >= this.store.CarouselContent.length - 1) {
                this.x = 0;
            } else{
                this.x ++;
            }
        },
    changeImageTimer(){
        setInterval(() => {
            if (this.x >= this.store.CarouselContent.length - 1) {
                this.x = 0;
            } else if(this.x < 0) {
                this.x = this.store.CarouselContent.length - 1;
            }
            this.x++
        
        }, 4000);
    }
},
created() {
    this.previous();
    this.next();
    this.changeImageTimer();
}
}
</script>

<template>
    <div class="container-carousel">
        <div v-for="(slide, index) in store.CarouselContent" :key="index">
            <div v-if="index === x" class="item">
                <div class="image-container">
                    <img :src="slide.image"/>
                </div>
                <div class="text">
                    <h1>{{slide.title}}</h1>
                    <h3>
                        {{slide.text}}
                    </h3>
                    <button class="btn-learn">learn more <font-awesome-icon icon="fa-solid fa-arrow-right" /></button>
                </div>  
                <span @click="previous" id="previous"><font-awesome-icon icon="fa-solid fa-caret-left" /></span>
                <span @click="next" id="next"><font-awesome-icon icon="fa-solid fa-caret-right"/></span>
                </div>
            </div>
    </div>
</template>

<style lang="scss" scoped>
.item{
    position: relative;
    .image-container{
        width: 100vw;
    }
    .text{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        text-align: center;
        width: 515px; 
        h1{
            font-size: 3.5rem;
            font-weight: 900;
            margin-bottom: 1rem;
        }
        h3{
            font-size: 1rem;
            margin-bottom: 1rem;
            font-weight: 900;
        }
        .btn-learn{
            background-color: transparent;
            color: white;
            border: 1px solid white;
            padding: 1rem 2.5rem;
            border-radius: 30px;
            font-weight: 900;
        }
    }
    #previous{
        position: absolute;
        top: 50%;
        left: 5%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 2rem;
        border: 1px solid white;
        padding: 1rem 1.5rem;
        border-radius: 50%;
    }
    #next{
        position: absolute;
        top: 50%;
        right: 5%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 2rem;
        border: 1px solid white;
        padding: 1rem 1.5rem;
        border-radius: 50%;
    }
}
img{
    width: 100vw;
    height: 658px;
    object-fit: cover;
    object-position: center;
}
</style>