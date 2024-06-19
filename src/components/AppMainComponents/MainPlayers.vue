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
    background-size: contain;
    background-repeat: no-repeat;
    height: 764px;

    .players-container{
        // max-width: 1200px;
        margin: 0 auto;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 3rem;

            h2{
                font-size: 2em;
                margin-bottom: 3rem;
            }

        .players-carousel{
            display: flex;
            overflow: hidden;
            flex-wrap: wrap;
            gap: 2rem;
            align-items: center;

            article{
                width: calc((100% / 4) - 2rem);
                overflow: hidden;
                border-radius: 3rem;

                .image-container{
                    width: 100%;
                    position: relative;
                    img{
                        width: 100%;
                    }

                    .info-container{
                    font-size: 1.1em;
                    font-weight: bold;
                    text-align: center;
                    background-color: black;
                    border-radius: 3rem;
                    padding: 1rem;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;

                    p{
                        margin-bottom: 1em;
                    }
                }
                }


            }
        }
    }
}

</style>