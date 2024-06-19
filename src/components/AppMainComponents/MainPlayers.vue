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
    <div class="container">
        <div class="players-container">
            <h2>Players</h2>

            <div class="players-carousel">

                <article v-for="(player, index) in store.players">
                    <div class="image-container">
                        <img :src="player.pic" :alt="`${player.name} official photo`">

                        <div class="info-container">
                            <p>{{player.number}}</p>
                            <p><span>{{ player.name }}</span> - <span>{{ player.role }}</span></p>
                        </div>

                    </div>
                </article>

            </div>

        </div>
    </div>

</template>

<style scoped lang="scss">
@use "../../style/general.scss";

.container{
    background-image: url(../../assets/imgs/player.jpg);
    height: 764px;

    .players-container{
        max-width: 1200px;
        margin: 0 auto;
        color: white;

        .players-carousel{
            display: flex;
            overflow: hidden;
            flex-wrap: wrap;
            gap: 1.5rem;

            article{
                width: calc((100% / 4) - 1.5rem);
                position: relative;

                .image-container{
                    width: 100%;
                    img{
                        width: 100%;
                        border-radius: 3rem;
                    }

                    .info-container{
                    height: 30%;
                    text-align: center;
                    background-color: black;
                    border-radius: 3rem;
                }
                }


            }
        }
    }
}

</style>