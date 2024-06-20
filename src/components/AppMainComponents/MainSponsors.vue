<script>
import { store } from '../../store.js';

export default {
    components:{
    
        

    },
data() {
return {  
    store,
}
}}
</script>

<template>
    <section id="bet777">
        <img src="../../assets/imgs/reklam.jpg" alt="">
    </section>

    <section id="sponsor-list">
        <div class="sponsor-container">
            <img :src="sponsor.img" alt="" v-for="sponsor in store.sponsors" :key="sponsor.id">
        </div>
    </section>
</template>

<style scoped lang="scss">
    #bet777{
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-around;
        margin-bottom: 2rem;
    }

    #sponsor-list{
        background-color: black;
        padding-top: 1rem;

        .sponsor-container{
            display: flex;
            justify-content: space-evenly;
            padding: 2em;

            img{
                border: 1px solid white;
                border-radius: 2rem;
                padding: 1em .5em;
                width: calc(100% / 7)
            }
        }
    }
</style>