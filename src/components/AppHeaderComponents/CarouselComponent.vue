<script>
import { store } from '../../store.js';

export default {
data() {
return {
    store,
}
}
}
</script>

<template>
    <div class="container">
            <button @click="previous" id="previous">previous</button>
            <div v-for="(slide, index) in store.CarouselContent" :key="index">
                <div class="item">                        
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