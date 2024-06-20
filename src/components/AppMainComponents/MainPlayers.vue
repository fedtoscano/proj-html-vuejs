<script>
import { store } from '../../store.js';


export default {
    components:{
    
        

    },
data() {
return {  
    store,

    // items: Array.from(),
    // isDown: false,
    // startX: 0,
    // scrollLeft:0
}
},
methods:{
    // startDrag(event){
    //     this.isDown = true;

    //     this.startX = event.pageX - this.$refs.items.offsetLeft;        
    //     this.scrollLeft = this.$refs.items.scrollLeft
    //     console.log(this.startX)
    // },
    // stopDrag(){
    //     this.isDown = false;
    // },
    // isDragging(event){
    //     if(!this.isDown){
    //         return
    //     } 
    //     event.preventDefault();
    //     const x = event.pageX - this.$refs.items.offsetLeft;
    //     const dragValue = (x - this.startX)
    //     this.$refs.items.scrollLeft = this.scrollLeft - dragValue
    // }
}}
</script>

<template>
    <div class="container">
        <div class="players-container">
            <h2>Players</h2>

            <div class="players-carousel">

                <article v-for="(player, index) in store.players" :key="index">
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
        max-width: 1600px;
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
            overflow-x: auto;
            gap: 2rem;
            align-items: center;
        }

            article{
                flex: 0 0 auto;
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
</style>