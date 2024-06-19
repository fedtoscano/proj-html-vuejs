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
},
created() {
    this.previous();
    this.next();
}
}
</script>

<template>
    <div class="container">
            <button @click="previous" id="previous">previous</button>
            <div v-for="(slide, index) in store.CarouselContent" :key="index">
                <div v-if="index === x" class="item">                        
                    <img :src="slide.image"/>
                    <div class="text">
                        <h3>{{slide.title}}</h3>
                        <p>
                            {{slide.text}}
                        </p>
                    </div>
                </div>
            </div>
            <button @click="next" id="next">next</button>
    </div>
</template>

<style lang="scss" scoped>

.item{
    width: 100%;
    height: 600px;
    img{
        width: 100%;
    }
}
</style>